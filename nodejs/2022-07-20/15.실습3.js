const http = require('http');
const fs = require('fs').promises;



const server = http.createServer(async function(req, res){
    try{
        const data = await fs.readFile('./larva.html');
        res.writeHead(200);
        res.end(data);
    } catch(arr){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

const hostname = '127.0.0.1';
const port = 8080;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
