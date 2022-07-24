const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/image/', express.static('public'));


app.get('/', (req, res) => {
    res.render('main.ejs');
});


app.listen(port, () => {
    console.log('Server port : ', port);
});