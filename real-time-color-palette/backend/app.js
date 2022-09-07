const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");


app.use(cors());


app.get("/", (req, res) => {
	res.send("welcome");
});

io.on("connection",(socket)=>{
    console.log("Birisi bağlandı");
    
})

http.listen(4321, () => console.log("Server is up 🚀 🚀"));