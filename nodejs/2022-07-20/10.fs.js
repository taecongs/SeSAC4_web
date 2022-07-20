// 파일 읽어오기
const fs = require('fs');

// 방식 1
fs.readFile('./test.txt', function(err, data){
    if(err) console.log(err);
    else{
        console.log(data);
    }
});



// 방식 2
fs.readFile('./test.txt', function(err, data){
    // throw 에러가 발생했으니 멈추겠다.
    if(err) throw(err);
    // toString() - 문자열로 변환하여라
    console.log(data.toString());

});