const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({
    dest : 'uploads/'  // 파일이 업로드 된 뒤 저장 경로 설정(폴더가 없다면 에러 발생)
    
});


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', test, test2, function(req,res){
    res.render('index1.ejs');
});


// upload.single('input의 name 값') : 하나의 파일만 받겠다.
app.post('/upload', upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);  // 업로드 된 파일의 정보 확인 (fiedlname ~ size 등 정보를 보여준다.)
    res.send('Upload');
});


// upload.array('input의 name 값') : 
app.post('/upload/array', upload.array('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.files);  // 업로드 된 파일의 정보 확인 (fiedlname ~ size 등 정보를 보여준다.)
    res.send('Upload Array');
});


// upload.array([{}]) : 가져올 파일들의 name 값들을 하나하나 작성해줘야 한다. 
app.post('/upload/fields', upload.fields([{name : 'userfile'}, {name : 'userfile2'}, {name : 'userfile3'}]), function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload Array');
});




function test(req, res, next){
    console.log('test 함수 ');
    // console.log(req.path);
    req.aaa = '.....';
    next();
}

function test2(req, res, next){
    console.log('test2 함수 ');
    console.log(req.aaa);
    next();
}


app.listen(port, () => {
    console.log('Server port : ', port);
});