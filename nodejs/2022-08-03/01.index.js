const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());




const router = require('./routes/02.index.js');


// '/' 경로로 들어오면 router로 이동해라
// 2번을 나눠서 정의 한 것 01 -> 02 -> 03
app.use('/', router);



// 2번
app.get('/register',(req, res) => {
    res.send('Get user');
})


// 3번
app.get('/receive',(req, res) => {
    res.render('index.ejs');
})


// '/user' 경로로 들어오면 router로 이동해라
// app.use('/user', router);





app.listen(port, () => {
    console.log('Server port : ', port);
});