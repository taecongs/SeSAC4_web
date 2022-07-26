const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용
app.use(express.urlencoded({extended : true}));


// json 형태로 데이터를 받겠다라고 선언
// json => 서버와 클라이언트 간의 교류를 할 때 많이 사용되는 데이터 형식
app.use(bodyParser.json());



app.get('/', function(req,res){
    res.render('index.ejs');
});


// get 방식
app.get('/receive', function(req,res){
    console.log(req);
    // query => ? 뒤에 있는 값
    console.log(req.query);
    res.render('receive.ejs', req.query);
});



// post 방식
app.post('/receive', function(req,res){
    console.log(req.body);
    
    // req.body = const {name, year, sport, gender} = req.body;
    res.render('receive.ejs', req.body);
});


app.listen(port, () => {
    console.log('Server Port : ', port);
});