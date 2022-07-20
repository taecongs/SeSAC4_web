const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function(req, res){
    try{
        const data = await fs.readFile('./test.html');
        res.writeHead(200);
        res.end(data);
    } catch(arr){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
    
});

server.listen(9000, function(){
    console.log('9000번 포트');  
    // http://localhost:9000/
})

