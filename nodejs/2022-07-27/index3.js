const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded( {extended : true} ));
app.use( bodyParser.json());


app.get("/",function(req,res){
    res.render("index3.ejs");
})

app.get("/test",function(req,res){
    res.send( { msg2: 2, msg1: 1 } );
});

app.get("/test2",function(req,res){
    res.send({name: "test", message: 123});
})

app.post("/receive", function(req,res){
    console.log( req.body );
    let name = req.body.name;
    let msg = req.body.name + "안녕";
    res.send( { name: name, message: msg });
})


app.get("/receive", function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "GET";
    res.send({ name: name, message: msg });
})


app.listen(port, ()=>{
    console.log(" Sever port : ", port);
});