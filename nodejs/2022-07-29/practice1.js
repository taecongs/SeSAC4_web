const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');


const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },

        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.userid + ext);
        },
    })
});



app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', function(req,res){
    console.log( req.query );
    res.render('practice1.ejs');
});




// upload.single('input의 name 값') : 하나의 파일만 받겠다.
app.post('/contactform', upload.single('uploadfile'), function(req,res){
    // 업로드 된 파일의 정보 확인 (fiedlname ~ size 등 정보를 보여준다.)
    res.render('practice2.ejs', {one : req.file.filename});
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.filename);
});



app.listen(port, () => {
    console.log('Server port : ', port);
});