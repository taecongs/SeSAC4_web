const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + '/index.html');
});


/*=========================================================
    on의 역활은? read 
    connection : 이벤트명, function(socekt){} : 콜백함수
=========================================================*/
io.on('connection', function(socket){
    console.log('connected');


/*=========================================================
    hello라는 이벤트의 콜백함수(data)에 server hello 를 보낸다.
=========================================================*/    
    socket.emit('hello', 'server hello');



/*=========================================================
    버튼을 클릭하면 clickResponse 이벤트의 콜백함수(data)에 success 를 보낸다.
=========================================================*/     
    socket.on('click', function(data){
        console.log('client click');
        // 새로고침하게 되면 연결되어 있는 개인 클라이언트한테 보낼 수 있다.
        socket.emit('clickResponse', 'success');

        // 전체 연결된 정보를 가지고 있다. 
        // 새로고침하게 되면 연결되어 있는 모든 클라이언트한테 보낼 수 있다.
        io.emit('clickResponse', 'io success');
    })
});


http.listen(8000, function(){
    console.log('Server Port : ', 8000);
});