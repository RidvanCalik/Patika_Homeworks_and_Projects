const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
require('dotenv').config()
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
var userScheme = new Schema({
    ID:String,
    userName: String,
    userPass: String
}, {collection: 'users'});

var userModel=  mongoose.model('user', userScheme);


app.get("/login", (req,res)=>{
    mongoose.connect(process.env.MONGO_DB_URL);
    async function findUser(){
        let user =await userModel.find({ userName: 'bahadır'}).exec();

    }
   
    res.send(process.env.MONGO_DB_URL)
})

io.on("connection",(socket)=>{
    console.log("halooo");
})

const port=8080;
http.listen(port,()=>console.log('running on ==> http://localhost:'+port+''))