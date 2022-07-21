const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function(req, res){
    try{
        const data = await fs.readFile('../larva.html');
        res.writeHead(200);
        res.end(data);
    } catch(err){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8080, function(){
    console.log('8080번');
})
