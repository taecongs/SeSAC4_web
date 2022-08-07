const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());


// 모듈로 내보내진 routes2.js를 가져와서 연결한다.
const router = require('./routes/routes2.js');

// localhost:8081/user 로 접속 할 시 router를 실행하겠다.
app.use('/user', router);


app.listen(port, () => {
    console.log('Server Port : ', port);
})