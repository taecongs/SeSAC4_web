const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    // console.log('client');
    res.sendFile(__dirname + '/practice-1.html');
});


/*=========================================================
    on의 역활은? read 
    connection : 이벤트명, function(socekt){} : 콜백함수
=========================================================*/
io.on('connection', function(socket){
    socket.on('hello', function(data){
        console.log('Client : ', data);
        socket.emit('hello', '안녕하세요.');
    });


    socket.on('study', function(data){
        console.log('Client : ', data);
        socket.emit('study', '공부합시다.');
    });

    socket.on('bye', function(data){
        console.log('Client : ', data);
        socket.emit('bye', '안녕히가세요.');
    });
});

http.listen(8001, function(){
    console.log('Server Port : ', 8001);
});