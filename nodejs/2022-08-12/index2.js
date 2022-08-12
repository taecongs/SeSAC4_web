const e = require('express');
const express = require('express');
const app = express();
const session = require('express-session');
const port = 8000;


app.set('view engine', 'ejs');


/* -------------- 세션 -------------- */


app.use(session({
    secret : 'secret key',

    // 세션을 덮어쓸지 말지 정한다.
    // resave : false,

    // 세션이 초기값이 지정되지 않아도 미리 세션을 만들어 놓는다.
    // saveUninitialized : true
}));



app.get('/', (req, res) => {
    req.session.key = 'value',
    req.session.name = '홍길동'
    res.render('index.ejs');
});



app.get('/get', (req, res) => {
    console.log(req.session.name);

});



app.get('/cookie', (req, res) => {
    res.render('cookie.ejs');
})


app.get('/destroy', (req, res) => {
    // destroy => 연결되어 있는 세션을 삭제한다.
    req.session.destroy(function(err){
        res.send('삭제');
    })

    // 특정 세션만 바꾸려면 빈 값으로 줘라
    // req.session.name = "";
});


app.get('/login', (req, res) => {
    res.render('login.ejs');
})


// 로그인 정보를 받는다. 아이디, 비밀번호
app.post('/login', (req, res) => {
    let flag = true;
    if(flag){
        // true라면 로그인이 성공! 성공 했다면 redirect(이동)하겠다.
        req.session.id = req.body.id;
        res.redirect('/profile');
    } else{
        // 로그인에 실패한다면 login 창이 다시 나온다.
        res.redirect('/login');
    }
});


app.get('/profile', (req, res) => {
    // 세션에 아이디가 없거나 비어있다면 로그인이 성공한 사람이 아니다.
    // 다시 로그인으로 보낸다.
    if(req.session.id == undefined || req.session.id == ""){
        res.redirect('/login');
        return false;
    }

    // 정상적으로 로그인이 성공했다면? 프로필 창으로 이동한다.
    req.session.id
    res.render('profile.ejs');
})


app.listen(port, () => {
    console.log('Server Port : ', port);
});