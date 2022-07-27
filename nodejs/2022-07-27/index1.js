const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function(req,res){
    // re.render => 랜더링 하여  ejs 파일을 보여준다.
    res.render('index1.ejs');
});


app.get('/test', function(req,res){
    // res.send => 데이터를 보내주는 역할(요청이 들어왔을 때 데이터를 그대로 보낸다.)
    res.send('test');
});


app.get('/test2', function(req,res){
    // 결과 => {"name":"test2","message":123}
    res.send({name : 'test2', message : 123});
})



// Post 방식
app.post('/receive', function(req,res){
    console.log(req.body);

    let name = req.body.name;
    let msg = req.body.name + ' 안녕';

    res.send({name : name, message : msg});
    // res.send(req.body.name + req.body.age + ' 안녕');
})




app.listen(port, () => {
    console.log('Server port : ', port);
})