import {io} from "socket.io-client"

const  socket=io("localhost:8080",{ transports: ["websocket"] });

function connecToServer(){
    console.log(socket);
    socket.on("connect",()=>{
        console.log("bağlandı mq");
    })
}
function sendMessageToServer(message){

    console.log(message);
}

export {connecToServer,sendMessageToServer};