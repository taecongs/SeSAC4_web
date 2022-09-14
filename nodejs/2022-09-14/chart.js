const express = require('express');
const { send } = require('process');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    // console.log('client');
    res.sendFile(__dirname + '/chart.html');
});




let list = {};

// io -> 클라이언트와의 모든 연결을 가지고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
io.on('connection', function(socket){
    console.log('connected : ', socket.id);

    socket.on('info2', function(data){
        list[socket.id] = data.nickname;
        io.emit('welcome', data.nickname + '님이 입장하셨습니다.');
        io.emit('list', list);
    });

    // socket.emit('info', socket.id);
    

    socket.on('send', function(data){
        // data = {msg : ~~~, to : ''};
        console.log('client message : ', data.msg);
        
        // 구분을 위해 
        data['is_dm'] = false;
        
        // list[socket.id] = data.nickname을 찾겠다.
        data['nickname'] = list[socket.id];

        if(data.to == '전체'){
            io.emit('newMessage', data);
        } else{
            data['is_dm'] = true;

            // 선택한 닉네님을 가진 고유 식별자를 선택하는 방법?
            // find(key => list[key] === data.to)로 사용해도 된다.
            let socketID = Object.keys(list).find((key) => {return list[key] === data.to});
            console.log(socketID);
            console.log(data);

            // io.to는 특정한 사람에게만 보내는 방법
            io.to(socketID).emit('newMessage', data);
            
            // 특정한 사람에게 보낸 메시지가 나에게 보이게 하는 방법
            socket.emit('newMessage', data);
        }

    });


    socket.on('disconnect', function(){
        io.emit('welcome', list[socket.id] + '님이 퇴장하셨습니다.' );

        // 나간 사람을 서버에서 삭제하는 방법
        delete list[socket.id];
        io.emit('list', list);

    })
});


http.listen(8002, function(){
    console.log('Server Port : ', 8002);
});