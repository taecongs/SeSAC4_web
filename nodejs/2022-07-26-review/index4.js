const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const fs = require('fs');
const e = require('express');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('index4.ejs');
});


app.post('/contactus', function(req,res){

    let {username, password} = req.body;

    fs.readFile('./info.txt', (err, data) => {
        if(err){
            console.log(err);
        } else{
            let $contact = data.toString().split('/');

            let a = $contact[0];
            let b = $contact[2];

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
        }
    });
});


app.listen(port, () => {
    console.log('Server port : ', port);
})