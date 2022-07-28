const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.render('index1.ejs');
});


// Get 방식
app.get('/contact', function(req,res){
    // req.query.userId => userId는 params에서 설정한 키 값을 가져온다.
    let userId = req.query.userId;
    let userPw = req.query.userPw;
    let userAlert = userId + ' 님 회원가입을 환영합니다.';

    res.send({one : userId, two : userPw, three : userAlert});
});



app.listen(port, () => {
    console.log('Server port : ', port);
})