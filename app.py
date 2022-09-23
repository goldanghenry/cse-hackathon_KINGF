from flask import Flask, url_for, session, render_template, request, redirect, flash
import sqlite3
from os import path

ROOT = path.dirname(path.realpath(__file__))
app = Flask(__name__)
app.secret_key = 'tjdgus12'

# -------------------------- Page route ------------------------------
# main page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/About')
def About():
    return render_template('About.html')

# -------------------------- function route --------------------------
# 로그인 버튼 클릭시 호출
@app.route('/login')
def login():
    return render_template('login.html')

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
        con = sqlite3.connect(path.join(ROOT, 'Keyword_Statics.db'))
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

# 회원가입 요청
@app.route('/register', methods=['GET', 'POST'])
def register():
    # form에서 가져오기
    if request.method == 'POST':
        _id_ = request.form['registerId']
        _username_ = request.form['registerUsername']
        _password_ = request.form['registerPw']

    elif request.method =='GET':
        _id_ = request.args.get('registerId')
        _username_ = request.args.get('registerUsername')
        _password_ = request.args.get('registerPw')
    tableName = _id_.replace('@','').replace('.','')

    # 양식 확인
    if len(_id_) == 0:
        flash("Please Enter Email")
        return redirect(url_for("login"))
    if len(_username_) == 0:
        flash("Please Enter User name")
        return redirect(url_for("login"))
    if len(_password_) == 0:
        flash("Please Enter Password")
        return redirect(url_for("login"))

    # 닉네임 중복 확인
    con = sqlite3.connect(path.join(ROOT, 'Keyword_Statics.db'))
    cur = con.cursor()
    sql = "SELECT userId FROM USERLIST where userId =?"
    cur.execute(sql, (_id_,))
    result = cur.fetchall()

    if result:
        flash("User name already in use.\nPlease enter another name.")
        return redirect(url_for("login"))

    else:
        # DB에 회원가입 정보 삽입
        sql = """
            INSERT INTO USERLIST(userId, userName, userPw)
            values(?,?,?)
        """
        cur.execute(sql, (_id_,_username_,_password_,))
        con.commit()

        # DB에 유저 북마크 table 생성
        con = sqlite3.connect(path.join(ROOT, 'Keyword_Statics.db'))
        cur = con.cursor()

        print(tableName)
        sql =f"""
            create table {tableName}(
                idx integer not null,
                title text not null,
                link text not null,
                published_date text not null,
                key1 text not null,
                key2 text not null,
                key3 text not null,
                publish text not null)
        """
        cur.execute(sql)
        flash("Membership successful!\nPlease login")
        return redirect(url_for("login"))

if __name__ == '__main__':
    app.run(debug=True)