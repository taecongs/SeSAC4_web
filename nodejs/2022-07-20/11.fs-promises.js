// 파일 읽어오기
const fs = require('fs').promises;

/*
// 방식 1
fs.readFile('./test.txt')
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
});




// 파일 만들기
fs.writeFile('./wirte.txt', '안녕')
.then(() => {
    console.log('작성 완료');
})
.catch((err) => {
    console.log(err);
});



// 파일 복사하기(복사할때 파일 만들기 코드를 주석 처리해야 정상적으로 복사되고 안의 내용도 작성된다.)
fs.copyFile('./wirte.txt', './new.txt')   // 내가 복사할 파일, 복사해서 만들 파일
.then(() => {
    console.log('복사완료');
})
.catch((err) => {
    console.log(err);
});



// 파일 이어서 작성하기
fs.appendFile('./new.txt', '새로 만들었으니 글씨를 써봐야지?')
.then(() => {
    console.log('복사한 파일에 작성 완료');
})
.catch((err) => {
    console.log(err);
});
*/




// 비동기 => 동기 처리(사용하려면 위의 내용 다 주석 처리해야 정상적으로 나온다.)
async function exec(){
    await fs.writeFile('./wirte.txt', '안녕');
    await fs.copyFile('./wirte.txt', './new2.txt');
}

exec();