import express from "express"; //express 사용
import http from "http";
//import WebSocket from "ws";
import SocketIO from "socket.io";

const app = express(); //application 객체를 app에 대입

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => res.render("home")); //home을 보여줄거야. (home.pug)
app.get("/*", (req, res) => res.redirect("/")); //이상한 곳으로 리디렉션 되지 않게! 뭘 해도 메인으로 보내

const handleListen = () => console.log(`listening on http://localhost:3000`); //3000번 포트 사용 + log찍어

const httpServer = http.createServer(app); //http 서버도 돌리고
//const wss = new WebSocket.Server({server}); //webSocket 서버도 돌리는거지~ (같은 포트에 있음)
const wsServer = SocketIO(httpServer);

function publicRooms(){
    const sids = wsServer.sockets.adapter.sids;
    const rooms = wsServer.sockets.adapter.rooms;

    const publicRooms = [];
    rooms.forEach((_, key) => {
        if(sids.get(key) === undefined){
            publicRooms.push(key);
        } 
    });
    return publicRooms;
}

wsServer.on("connection", (socket) => {

    socket["nickname"] = "Unknown";

    socket.onAny((event)=>{ //이런식으로 소켓의 이벤트를 알아볼 수 있다.
        //console.log(wsServer.sockets.adapter); //우리는 서버의 메모리? 어뎁터를 쓰고잇어서 서버가 늘어나면 같은 frontend를 보고 있음에도 만나지 못할 수 있어..
        console.log(`socket event: ${event}`);
    });

    socket.on("enter_room", (roomName, done) => { //msg는 정보, done은 함수, enter_room처럼 사용자 정의 이벤트를 돌릴 수 있음.
        socket.join(roomName); //소켓의 룸 참가
        done(); //룸 참가 성공 시 room name이 보이고 메세지 폼이 보이게 하는 함수.
        socket.to(roomName).emit("welcome", socket.nickname);
        wsServer.sockets.emit("room_change", publicRooms());
    }); 

    socket.on("disconnecting", () => {
        socket.rooms.forEach(room => {
            socket.to(room).emit("bye", socket.nickname);
        });
    });

    socket.on("disconnect", () => {
        wsServer.sockets.emit("room_change", publicRooms());
    });

    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    });

    socket.on("nickname", (nickname) => {
        socket["nickname"] = nickname;
    });

});













httpServer.listen(3000, handleListen);


/*const sockets = []; //연결된 소켓을 여기에 넣을거야.

wss.on("connection", (socket)=>{ 
    //console.log(socket); //connection이 생기면 socket을 받음.

    sockets.push(socket);
    socket["nickname"] = "Unknown"; //닉네임을 입력하지 않을수도 잇으니까

    console.log("connected to browser !");

    socket.on("close", ()=>{ //브라우저를 닫으면 발생.
        console.log("disconnected from the browser");
    });
    socket.on("message", (msg)=>{ //브라우저에서 메세지를 받으면 발생
        //socket.send(message.toString());
        //console.log(message.toString("utf-8"));

        const message = JSON.parse(msg);

        switch (message.type){
            case "new_message":
                sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`));
                break;
            case "nickname":
                socket["nickname"] = message.payload;
                console.log(message.payload);
                break;
        }

    });

    //socket.send("HELLo"); //브라우저로 메세지를 보냄
    
}); */


