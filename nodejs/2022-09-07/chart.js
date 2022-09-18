const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    // console.log('client');
    res.sendFile(__dirname + '/chart.html');
});




// io -> 클라이언트와의 모든 연결을 가지고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
io.on('connection', function(socket){
    console.log('connected : ', socket.id);

    socket.emit('info', socket.id);
    io.emit('welcome', socket.id + '님이 입장하셨습니다.');

    socket.on('send', function(data){
        // data = {id : ~~~, msg : ~~~};
        console.log('client message : ', data.msg);
        io.emit('newMessage', data);
    });

    socket.on('disconnect', function(){
        io.emit('welcome', socket.id + '님이 퇴장하셨습니다.' );
    })
});


http.listen(8002, function(){
    console.log('Server Port : ', 8002);
});