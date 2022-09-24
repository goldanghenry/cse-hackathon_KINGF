//-------------------------- 초기설정 ------------------------------
const socket = io(); //이게 socket.io에서 백과 프론트를 잇는 함수

const myFace = document.getElementById("myFace");
const peerFace = document.getElementById("peerFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");
const call = document.getElementById("call");

call.hidden = true; //통화부분은 처음에 보이지 않아야 한다.

let myStream; //스트림
let muted = false; //뮤트가 되었는가
let cameraOff = false; //카메라가 꺼졌는가
let roomName; //방에 참여하기 위해 필요한 이름
let myPeerConnection; //p2p 연결

//-------------------------- 화상통화에 필요한 부분------------------------------

async function getCameras(){ //user가 가진 카메라 목록을 얻어옴
    try{
        const devices = await navigator.mediaDevices.enumerateDevices(); //모든 디바이스를 다 가져옴
        const cameras = devices.filter(device => device.kind === "videoinput"); //그 중에 비디오인풋만 거름
        const currentCamera = myStream.getVideoTracks()[0]; //현재 사용중인 카메라는 그 목록 중 처음 것

        cameras.forEach(camera => { //목록을 순회하면서 목록을 만들어넣는 것
            const option = document.createElement("option");  
            option.value = camera.deviceId;
            option.innerText = camera.label;
            if(currentCamera.label === camera.label){
                option.selected = true;
            }
            camerasSelect.appendChild(option);
        });
        //console.log(cameras);
    } catch(error){
        console.log(error);
    }
}

async function getMedia(deviceId){ //오디오와 카메라 스트림을 얻음
    const initialConstrains = { //기본 설졍
        audio: true, 
        video: {facingMode: "user"},
    }
    const cameraConstrains = { //카메라를 deviceId로 설정
        audio: true,
        video: {deviceId: {exact: deviceId}},
    }

    try{
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? cameraConstrains : initialConstrains, //deviceId가 존재하면 그걸로 설정, 아니면 기본설정
        );
        myFace.srcObject = myStream;
        if(!deviceId){
            await getCameras();
        }
    } catch(error){
        console.log(error);
    }
}
//getMedia(); //이게 모든걸 실행하는 함수.

function handleCameraClick(){ //카메라 온 오프
    myStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
    });
    if(cameraOff){
        cameraBtn.innerText = "Camera Off";
        cameraOff = false;
    }
    else{
        cameraBtn.innerText = "Camera On";
        cameraOff = true;
    }
}

function handleMuteClick(){ //음소거 하냐 마냐
    myStream.getAudioTracks().forEach(track => {
        console.log("track: ", track);
        track.enabled = !track.enabled;
    });
    if(!muted){
        muteBtn.innerText = "UnMute";
        muted = true;
    }
    else {
        muteBtn.innerText = "Mute";
        muted = false;
    }
}


async function handleCameraChange(){ //카메라를 바꿀때.
    await getMedia(camerasSelect.value);
    
    muteBtn.innerText = "Mute"; //이 설정이 전부 기본값으로 돌아감.
    muted = false;
    cameraBtn.innerText = "Camera Off";
    cameraOff = false;

    if(myPeerConnection){
        const videoTrack = myStream.getVideoTracks()[0]; //첫 번째 track 즉 지금 선택한 카메라 스트림!!
        const videoSender = myPeerConnection.getSenders().find(sender => {
            sender.track.kind === "video"
        });
        videoSender.replaceTrack(videoTrack);
    }
}


muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
camerasSelect.addEventListener("input", handleCameraChange);

//-------------------------- welcome form ------------------------------

const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");


async function initCall(){
    welcome.hidden = true; //방 입장 폼을 숨기기
    call.hidden = false; //화상 창을 띄우기
    await getMedia(); //카메라, 마이크, 다른 카메라도 전부 다 불러와!(폰은 카메라가 두개니까..)

    makeConnection();
}

async function handleWelcomeSubmit(event){ //버튼 눌렀을때 작동
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    await initCall();
    socket.emit("join_room", input.value);
    roomName = input.value;
    input.value ="";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);


//---------------------socket 부분-----------------------

socket.on("welcome", async () =>{ //소켓이 방에 참여했을때
    const offer = await myPeerConnection.createOffer(); //offer가 누군지 정해줘.
    myPeerConnection.setLocalDescription(offer);
    //console.log("send offer");
    socket.emit("offer", offer, roomName);
}); //peer A에서 작동

socket.on("offer", async (offer) => {
    myPeerConnection.setRemoteDescription(offer);
    const answer = await myPeerConnection.createAnswer();
    myPeerConnection.setLocalDescription(answer);
    socket.emit("answer", answer, roomName);

}); //peer B에서 작동

socket.on("answer", (answer) =>{
    myPeerConnection.setRemoteDescription(answer);

}); //peer A에서 작동

socket.on("ice", (ice) => { //iceCandidate를 주고받는 부분. handleIce와 세트
    //console.log("ice??????")
    myPeerConnection.addIceCandidate(ice);
});

//--------------------webRTC signaling------------------

function makeConnection(){ // == addStream. 이게 나아.
    myPeerConnection = new RTCPeerConnection({ //무료 stun서버. xirsys걸 사용
        iceServers: [{   urls: [ "stun:ntk-turn-2.xirsys.com" ]}, {   username: "57_iQJsczkCRQfKl822hidmvlFovkKQhFEG0huM2QUe94fjw-hDmc4nk1AoM0v0eAAAAAGMuxGttb21JdE1vbQ==",   credential: "b18fd286-3be5-11ed-a551-0242ac120004",   urls: [       "turn:ntk-turn-2.xirsys.com:80?transport=udp",       "turn:ntk-turn-2.xirsys.com:3478?transport=udp",       "turn:ntk-turn-2.xirsys.com:80?transport=tcp",       "turn:ntk-turn-2.xirsys.com:3478?transport=tcp",       "turns:ntk-turn-2.xirsys.com:443?transport=tcp",       "turns:ntk-turn-2.xirsys.com:5349?transport=tcp"   ]}]
    }); //p2p 연결 구성(아직 연결되지 않음)
    myPeerConnection.addEventListener("icecandidate", handleIce);
    myPeerConnection.addEventListener("addstream", handleAddStream);
    myStream.getTracks().forEach(track =>{ //양쪽 브라우저에서 카메라, 마이크 데이터스트림을 받아서 연결에 집어넣어.
        myPeerConnection.addTrack(track, myStream);
    })
}

function handleIce(data){ //iceCandidate를 주고받는 부분
    socket.emit("ice", data.candidate, roomName);
    //console.log("ice!!!!!")
    //console.log(data);
}

function handleAddStream(data){
    
    peerFace.srcObject = data.stream;
    //console.log("peer stream: ", data.stream);
    //console.log("myStream: ", myStream);
}


/*
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
*/