const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('Client');
    res.sendFile(__dirname + '/review.html');
});

let msg = {hello : '안녕하세요^^2', study : '예습과 복습을 철저히 하자!2'};

io.on('connection', function(socket){
    // 해당 클라리언트에서 메시지를 보냈고 data에 담긴다.
    socket.on('hello', function(data){
        // data에 환영합니다가 담긴다.
        console.log('Client1 : ', data);

        // 클라이언트 페이지에서 정의 된 이벤트 메서드 hello의 콜백함수(data)에 데이터가 담긴다.
        socket.emit('hello', '안녕하세요^^');
    });


    socket.on('study', function(data2){
        console.log('Client2 : ', data2);

        socket.emit('study', '예습과 복습을 철저히 하자!');
    });


    socket.on('bye', data3 => {
        console.log('Client3 : ', data3);

        socket.emit('study', '안녕히가세요★');
    });

})




http.listen(9001, function(){
    console.log('Server Port : ', 9001);
});