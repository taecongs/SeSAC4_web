const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('training2.ejs');
});


app.post('/contactus', function(req,res){
    let id = req.body.id;
    let pw = req.body.pw;

    fs.readFile('./info.txt', (err, data) => {
        if(err){
            console.log(err);
        } else{
            let $contact = data.toString().split('/');

            let a = $contact[0];
            let b = $contact[2];

            if(id == a && pw == b){
                res.send('로그인 되었습니다.');
            } else if(id != a && pw == b){
                res.send('아이디가 틀렸습니다.');
            } else if(pw != b && id == a){
                res.send('비밀번호가 틀렸습니다.');
            } else{
                res.send(' 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
            }    
        }
    });     
});


app.listen(port, () => {
    console.log('Server port : ', port);
})