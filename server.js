const express = require('express')
const app = express()
// const cors = require('cors')
// app.use(cors())
const path = require('path');
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});


const { v4: uuidV4 } = require('uuid')



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/home2', function(req, res){
  res.render('home2')
});

app.get('/', function(req, res){
  // res.sendFile(path.resolve(__dirname) + "/views/home.html");
  res.render('home');
 });

app.get('/room', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
});





io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId);
    // messages
    socket.on('message', (message) => {
      //send message to the same room
      io.to(roomId).emit('createMessage', message)
  }); 


    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(process.env.PORT||3030);
