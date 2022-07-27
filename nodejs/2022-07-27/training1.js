const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

// json 형태로 데이터를 받겠다라고 선언
// json => 서버와 클라리언트 간의 교류를 할 때 많이  사용되는 데이터 형식
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.render('training1.ejs');
});


app.get('/receive', function(req, res){
    let user = req.query.name;
    let txt = req.query.name + '님 환영합니다.';
    res.send({userId: user, alertTxt : txt});    
});


app.listen(port, () => {
    console.log('Server Port : ', port);
});