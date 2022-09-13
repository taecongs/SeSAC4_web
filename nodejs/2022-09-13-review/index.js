const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    console.log('');
    // __dirname : 현재 실행 중인 폴더 경로
    res.sendFile(__dirname + '/index.html');
});


// io.on : 현재 접속되어 있는 클라이언트로부터 메시지를 수신한다.
// connection은 socket.io의 기본 이벤트, 사용자가 웹 사이트에 접속하면 자동으로 발생
io.on('connection', function(socket){
    console.log('connected');

    // socket.emit : 서버쪽에서 event를 발생시키는 함수
    // 이벤트 발생 시 클라이언트 페이지의 해당 이벤트 리스너에서 처리
    // 클라이언트 페이지에서  정의 된 이벤트 메서드 one의 콜백함수(data)에 데이터가 담긴다.
    socket.emit('one', '어렵다 소켓');

    // 이벤트를 작성 할 땐 socket.on('이벤트', 콜백함수 또는 값 또는 변수) 형식으로 작성
    // socket.on : 해당 클라이언트에서 메세지를 보낸다.
    socket.on('click', function(data){
        console.log('client click');
        socket.emit('clickButton', '성공!');
    })
});





http.listen(9000, function(){
    console.log('Server Port : ', 9000);
})