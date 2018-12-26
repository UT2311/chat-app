const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicpath = path.join(__dirname ,"../public");
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicpath));
console.log(publicpath);
io.on('connection',(socket)=>{
    console.log('nre user connected');
    socket.on('disconnect',()=>{
        console.log('disconnected from server');
    })
});
server.listen(port,()=>{
    console.log(`the server is listening to port ${port}`);
});