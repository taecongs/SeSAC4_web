const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    // console.log('client');
    res.sendFile(__dirname + '/chart.html');
});


io.on('connection', function(socket){
    console.log('connected : ', socket.id);

    socket.emit('info', socket.id);

    // 모든 사용자와의 연결이 되어 있다.
    io.emit('welcome', socket.id + '님이 입장하셨습니다.');

    socket.on('send', function(data){
        console.log('Client Message : ', data.msg);
        io.emit('newMessage', data);
    });
})







http.listen(9003, function(){
    console.log('Server Port : ', 9003);
});