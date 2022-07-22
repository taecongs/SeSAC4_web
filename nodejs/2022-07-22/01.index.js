const express = require('express');
const app = express();
const port = 8000;

// view 폴더에 있는 ejs 파일을 가져오겠다.
app.set('view engine', 'ejs');


// public은 정적 파일을 관리하겠다 라는 의미다.
// public 생성 후 폴더에 있는 이미지를 가져오기 위해 작성
// http://localhost:8000/char.png
// app.use(express.static('public'));

// '/abc'를 앞에 하나 붙이면 가상 경로를 만들어 접속하겠다라는 의미
// http://localhost:8000/abc/char.png
app.use('/abc/aa', express.static('public'));

//  '/' 
app.get('/', (req,res) => {
    // res.send('Hello Express!');

    // 파일을 불러와서 보여준다.
    // res.render('test');

    // 파일명에 한글이나 특수문자가 존재한다면  확장자까지 작성해야한다.
    // res.render('02.test.ejs');
    res.render('server.ejs', {a: 'aaa', b: 'bbb'});
});


app.listen(port, () => {
    console.log('Server port : ', port);
});