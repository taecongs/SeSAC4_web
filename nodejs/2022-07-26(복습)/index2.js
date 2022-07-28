const express = require('express');
const app = express();
const port = 8888;
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.render('index2.ejs');
});


// get 방식
app.get('/intro', function(req, res){
    res.render('intro.ejs', req.query);
})



app.listen(port, () => {
    console.log('Server Port : ', port);
});