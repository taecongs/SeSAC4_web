const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');
const fs = require('fs');

// view 폴더에서 ejs 파일을 사용하겠다.
app.set('view engine', 'ejs');

// 퍼블릭 폴더에서 정적인 파일(css, javascript)을 사용하겠다.
app.use(express.static('public'));


app.use(express.urlencoded({extended : true}));

app.use(bodyParser.json());

app.get('/', function(req,res){
    res.render('index3.ejs');
});



app.post('/contact', function(req, res){
    let $id = req.body.userid;
    let $name = req.body.name;
    let $pw = req.body.pass;

    fs.writeFile('./info.txt', $id + '/' + $name + '/' + $pw, (err) => {
        if(err){
            console.log(err);
        } else{
            console.log('작성완료');
        }
    })
});



app.listen(port, () => {
    console.log('Server port : ', port);
});

