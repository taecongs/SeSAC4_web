const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('public'));

// 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용
app.use(express.urlencoded({extended : true}));

// json 형태로 데이터를 받겠다. (서버와 클라이언트 간의 교류를 할 때 많이 사용되는 데이터 형식)
app.use(bodyParser.json());




app.get('/', function(req, res){
    res.render('index1.ejs');
});



// get 방식
app.get('/overview', function(req, res){
    res.render('./overview.ejs', req.query);
});


// post 방식




app.listen(port, () => {
    console.log('Server port : ', port);
})