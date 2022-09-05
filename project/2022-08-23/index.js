const express = require('express');
const app = express();
const port = 8087;
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('main.ejs');
});


app.get('/membership', (req,res) => {
    res.render('membership.ejs');
});

app.get('/login', (req,res) => {
    res.render('login.ejs');
});

app.get('/common', (req,res) => {
    res.render('common.ejs');
});


app.get('/ootd-notice', (req,res) => {
    res.render('ootd-notice.ejs');
});


app.get('/mypage', (req,res) => {
    res.render('mypage.ejs');
});



app.listen(port, () => {
    console.log('Server port : ', port);
});