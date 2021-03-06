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

app.use(express.static('public'));



app.get('/', function(req,res){
    res.render('index2.ejs');
});


// get 방식
app.get('/receive', function(req,res){
    console.log(req);
    // query => ? 뒤에 있는 값
    console.log(req.query);
    res.render('receive2.ejs', req.query);
});


app.listen(port, () => {
    console.log('Server Port : ', port);
});