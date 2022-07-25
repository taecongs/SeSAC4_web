const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// json 형태로 데이터를 받겠다라고 선언
// json => 서버와 클라리언트 간의 교류를 할 때 많이  사용되는 데이터 형식
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.render('index4.ejs');
});

// post 방식
app.post('/receive', function (req, res) {
    console.log(req.body);

    // req.body = const {name, year, sport, gender} = req.body;
    res.render('receive4.ejs', req.body);

    let userId = req.body.userid;
    let username = req.body.name;
    let pass = req.body.pass;

    fs.writeFile('./info.txt', userId + '/' + username + '/' + pass)
        .then(() => {
            console.log('작성 완료');
        })
        .catch((err) => {
            console.log(err);
        });




        
        
});


app.listen(port, () => {
    console.log('Server Port : ', port);
});