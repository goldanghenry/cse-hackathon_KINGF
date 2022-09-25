from flask import Flask, url_for, session, render_template, request, redirect, flash
import sqlite3
from os import path
import datetime

ROOT = path.dirname(path.realpath(__file__))
app = Flask(__name__)
app.secret_key = 'tjdgus12'

# -------------------------- Page route ------------------------------
# main page
@app.route('/')
def index():

    return render_template('index.html')

# 상담예약
@app.route('/consultant')
def consultant():
    return render_template('consultant.html')

# 이용안내
@app.route('/notice')
def notice():
    return render_template('notice.html')

# 마이페이지
@app.route('/mypage')
def mypage():
    return render_template('my_page.html')

# 로그인
@app.route('/login')
def login():
    return render_template('log_in.html')

# 상담사 로그인
@app.route('/log_in_consultant')
def log_in_consultant():
    return render_template('log_in_consultant.html')

# 회원 로그인
@app.route('/log_in_normal')
def log_in_normal():
    return render_template('log_in_normal.html')

# 상담사 회원가입
@app.route('/membership_consultant')
def membership_consultant():
    return render_template('membership_consultant.html')

# 회원 회원가입
@app.route('/membership_normal')
def membership_normal():
    return render_template('membership_normal.html')

# 상담사 개인 소개 페이지
@app.route('/blog')
def blog():
    # # DB 만들고 수정하기
    # con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    # cur = con.cursor()
    # sql = "SELECT * FROM ArticleList WHERE idx=?"
    # cur.execute(sql, (idx,))
    # selectedN = cur.fetchall()
    # selectedN = selectedN[0]

    # con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    # cur = con.cursor()
    # userid = session.get('userId')
    # tableName = userid.replace('@','').replace('.','')
    # sql = f"DELETE FROM {tableName} WHERE idx= ?"
    # cur.execute(sql, (selectedN[0],))
    # con.commit()
    return render_template('blog.html')

# 심리 예약 신청
@app.route('/reservation_default')
def reservation_default():
    return render_template('reservation_default.html')

# 가입 페이지/ 상담사 & 일반회원
@app.route('/membership')
def membership():
    return render_template('membership.html')

# 상담 화면
@app.route('/consulting_room')
def consulting_room():
    return render_template('consulting_room.html')


# -------------------------- function route --------------------------
# 로그인 요청
@app.route('/login_proc', methods=['GET', 'POST'])
def login_proc():
    global loginId
    if request.method == 'POST':
        loginId = request.form['loginId']
        loginPw = request.form['loginPw']

    elif request.method == 'GET':
        loginId = request.args.get('loginId')
        loginPw = request.args.get('loginPw')

    if len(loginId) == 0:
        flash("Please Enter Email")
        return redirect(url_for("login"))
    elif len(loginPw) == 0:
        flash("Please Enter Password")
        return redirect(url_for("login"))

    else:
        con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
        cur = con.cursor()
        sql = "SELECT * FROM USERLIST where userId =?"
        cur.execute(sql, (loginId,))
        rows = cur.fetchall()

        for rs in rows:
            if loginId == rs[1] and loginPw == rs[3]:
                session['logFlag'] = True
                session['idx'] = rs[0]
                session['userId'] = rs[1]
                session['userName'] = rs[2]
                return redirect(url_for("index"))
            else:
                flash("Please check your Email or password")
                return redirect(url_for("login"))   # 팝업 추가!

        flash("Please check your Email or password")
        return redirect(url_for("login"))

# 로그아웃 버튼 클릭시 호출
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

# 상담사 회원가입 요청
@app.route('/c_register', methods=['GET', 'POST'])
def c_register():
    # form에서 가져오기
    if request.method == 'POST':
        _id_ = request.form['registerId']
        _password_ = request.form['registerPw']
        _username_ = request.form['registerUsername']
        _yymmdd_ = request.form['registerYYMMDD']
        _phone_ = request.form['registerPhone']
        _email_ = request.form['registerEmail']
        _div_ = request.form['registerDiv']
        _about_ = request.form['registerAbout']
        

    elif request.method =='GET':
        _id_ = request.args.get('registerId')
        _password_ = request.args.get('registerPw')
        _username_ = request.args.get('registerUsername')
        _yymmdd_ = request.args.get('registerYYMMDD')
        _phone_ = request.args.get('registerPhone')
        _email_ = request.args.get('registerEmail')
        _div_ = request.args.get('registerDiv')
        _about_ = request.args.get('registerAbout')

    # DB에 회원가입 정보 삽입
    sql = """
        INSERT INTO C_UserList(userId, userPw, name, yymmdd, phone, email, div, About)
        values(?,?,?,?,?,?,?,?)
    """
    con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    cur = con.cursor()
    cur.execute(sql, (_id_, _password_, _username_, _yymmdd_, _phone_, _email_,_div_, _about_,))
    con.commit()

    # DB에 유저 table 생성
    con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    cur = con.cursor()
    
    sql =f"""
        create table {_id_}(
            idx integer primary key autoincrement,
            subject text not null,
            c_taget text not null,
            c_date text not null,
            progress text not null)
    """
    cur.execute(sql)
    return redirect(url_for("log_in_consultant"))
    
# 회원가입 요청
@app.route('/register', methods=['GET', 'POST'])
def register():
    # form에서 가져오기
    if request.method == 'POST':
        _id_ = request.form['registerId']
        _password_ = request.form['registerPw']
        _username_ = request.form['registerUsername']
        _yymmdd_ = request.form['registerYYMMDD']
        _phone_ = request.form['registerPhone']
        _email_ = request.form['registerEmail']
        _div_ = request.form['registerDiv']
        _about_ = request.form['registerAbout']
        
    elif request.method =='GET':
        _id_ = request.args.get('registerId')
        _password_ = request.args.get('registerPw')
        _username_ = request.args.get('registerUsername')
        _yymmdd_ = request.args.get('registerYYMMDD')
        _phone_ = request.args.get('registerPhone')
        _email_ = request.args.get('registerEmail')
        _div_ = request.args.get('registerDiv')
        _about_ = request.args.get('registerAbout')

    # DB에 회원가입 정보 삽입
    sql = """
        INSERT INTO UserList(userId, userPw, name, yymmdd, phone, email, div, About)
        values(?,?,?,?,?,?,?,?)
    """
    con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    cur = con.cursor()
    cur.execute(sql, (_id_, _password_, _username_, _yymmdd_, _phone_, _email_,_div_, _about_,))
    con.commit()

    # DB에 유저 table 생성
    con = sqlite3.connect(path.join(ROOT, 'KINGF_main.db'))
    cur = con.cursor()
    
    sql =f"""
        create table {_id_}(
            idx integer primary key autoincrement,
            subject text not null,
            c_taget text not null,
            c_date text not null,
            progress text not null)
    """
    cur.execute(sql)
    return redirect(url_for("log_in_normal"))

if __name__ == '__main__':
    app.run(debug=True)