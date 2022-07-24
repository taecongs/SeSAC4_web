// Promise를 콜백 방식으로 서버 작업한 방식
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    fs.readFile('../larva.html', function(err, data){
        if(err){
            // promise 에서의 catch와 같다.
            console.error(err);
            res.writeHead(404);
            res.end(err.message);            
        } else{
            // promise 에서의 try와 같다.
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(8080, function(){
    console.log('8080번');
});