// 항상 오류 처리를 해줘야 한다.
const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
    // throw err는 console.log 없이 에러를 확인 할 수 있도록 해준다.
    if(err) throw err;

    console.log(data);
    console.log(data.toString());
});