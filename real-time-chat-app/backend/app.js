const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);


io.on("connection",(socket)=>{
    console.log("halooo");
})

const port=8080;
http.listen(port,()=>console.log('running on ==> http://localhost:'+port+''))