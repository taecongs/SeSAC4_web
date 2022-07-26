const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// json 형태로 데이터를 받겠다라고 선언
// json => 서버와 클라리언트 간의 교류를 할 때 많이  사용되는 데이터 형식
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.render('index5.ejs');
});

// post 방식
app.post('/receive', function (req, res) {
    // res.render('receive5.ejs', req.body);

    // 아이디, 비밀번호 작성 된 값을 가져온다.
    let {username, userid, password} = req.body;

    // info.txt 파일을 읽어온다 => 문자열로 변환 => /를 기준으로 배열을 나눈다.
    let $data = fs.readFileSync('./info.txt').toString().split('/');

    // 배열로 가져온 값들의 0번째 2번쨰 인덱스를 변수에 담는다.
    let a = $data[0];
    let b = $data[2];

    if(username == a && password == b){
        // console.log('로그인 되었습니다.');
        res.send("<script>alert('로그인 되었습니다.')</script>");
    } else if(username != a && password == b){
        res.send("<script>alert('아이디가 틀렸습니다.')</script>");
    } else if(password != b && username == a){
        res.send("<script>alert('비밀번호가 틀렸습니다.')</script>");
    } else{
        res.send("<script>alert('둘 다 틀렸습니다.')</script>");
    }

});


app.listen(port, () => {
    console.log('Server Port : ', port);
});