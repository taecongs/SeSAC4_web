const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const fs = require('fs');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.render('index2.ejs');
});



// Post 방식
app.post('/contactus', function(req,res){
    let userId = req.body.userId;
    let userPw = req.body.userPw;

    fs.readFile('./info.txt', (err,data) => {
        if(err){
            console.log(err);
        } else{
            let userInfo = data.toString().split('/');
            let infoOne = userInfo[0];
            let infoTwo = userInfo[2];

            if(userId == infoOne && userPw == infoTwo){
                res.send('로그인 되었습니다.');
            } else{
                res.send(' 아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
            }
        }
    });
});




app.listen(port, () => {
    console.log('Server port : ', port);
})