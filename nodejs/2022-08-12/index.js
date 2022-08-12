const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;


app.set('view engine', 'ejs');


/* -------------- 쿠키 -------------- */



// 사용할 키('1234');
app.use(cookieParser('1234'));


// 옵션을 딕셔너리 형태로 보낸다.
const cookieConfig = {
    //만료기간 : 30초
    maxAge : 30000,

    // 쿠키에 접근 하는 경로
    // '/get' 으로 설정 시 /get, /get/a/ /get/a/b 이런식으로 접근한다는 것이다.
    path : '/',

    // 기본값은 false
    // 자바스크립트의 document.cookie를 이용해서 쿠키에 접속하는 것을 막는 옵션
    // 웹 서버를 통해서만 접속이 가능하다.
    httpOnly : true,

    // 값을 암호화 시킨다.
    signed : true
};


app.get('/', (req, res) => {
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render('index.ejs');
});


// 어떤 쿠키가 있는지 보여만 주는 방법
// 브라우저를 껏다가 켜도 그대로 확인 가능 
app.get('/get', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});



app.get('/cookie', (req, res) => {
    res.render('cookie.ejs');
});




app.listen(port, () => {
    console.log('Server Port : ', port);
});