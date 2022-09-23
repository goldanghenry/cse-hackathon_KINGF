const socket = io(); //이게 socket.io에서 백과 프론트를 잇는..함수..

const welcome = document.getElementById("welcome");
const room = document.getElementById("room");
const form = welcome.querySelector("form");

room.hidden = true;

let roomName;

function addMessage(message){ //메세지를 만들때 사용.
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handleMessageSubmit(event){ //메세지를 보냈을때(Send를 눌렀을때) 작동.
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", value, roomName, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function handleNicknameSubmit(event){ //닉네임 설정시 작동
    event.preventDefault();
    const input = room.querySelector("#name input");
    socket.emit("nickname", input.value);
}


function showRoom(){ //룸에 입장 후 작동.
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;

    const msgForm = room.querySelector("#msg");
    const nameForm = room.querySelector("#name");
    msgForm.addEventListener("submit", handleMessageSubmit);
    nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event){ //룸에 입장하기위해 작동.
    event.preventDefault();
    const input = form.querySelector("input");

    socket.emit( //이벤트이름, 전달될 정보(인자), 서버에서 호출하는 함수(마지막 인자로 둬야함) 이 외에 모든걸 다 무제한으로 보낼수잇을걸
        "enter_room",
        input.value,
        showRoom
    ); 
    roomName = input.value;
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user) => {
    addMessage(`${user} joined!!`);
});

socket.on("bye", (user) => {
    addMessage(`${user} left...`);
});

socket.on("new_message", (msg) => {
    addMessage(msg);
});

socket.on("room_change", (rooms) =>{
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = "";
    if(rooms.length === 0){ //rooms가 비어있을 경우 처리
        return;
    }
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    });
});
