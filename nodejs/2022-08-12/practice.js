const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8001;


app.set('view engine', 'ejs');

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
    res.render('practice.ejs');
});



app.listen(port, () => {
    console.log('Server Port : ', port);
});