const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('./frontend'));
const socket= require('socket.io');
const cors= require('cors');
const PORT=8080
const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
  });
  
const io=socket(server)

io.on("connection",async function (socket) {   // 2 - creating server

    //handle incomming requests here..
    console.log('connection established')
    socket.join('room1')
    console.log(socket.rooms)
    const sockets=await io.fetchSockets()
    sockets.forEach(element => {
      console.log(element.id)
    });
  

    socket.on("chat message",(msg)=>{
      socket.broadcast.emit('chat message',msg);
      
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');});

});



 //3 - listen for any incoming requests

