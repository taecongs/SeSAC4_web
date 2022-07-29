const express = require('express');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
    
        filename(req, file, done){
                        // 파일명을 나타낸다. 예시) png 파일이라면 .png
            const ext = path.extname(file.originalname);
                                   //업로드한 파일명 뒤에 현재시간을 나타낸다. 
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            // 12316516516515.png
        },
    }),

    limits : {fileSize : 5*1024*1024},
});


// let a = 123.png
// path.extname( a ) > .png
// path.basename( a, ".png" )   > 123

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', test, test2, function(req,res){
    res.render('index2.ejs');
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
    console.log(req.path);
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