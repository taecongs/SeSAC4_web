/*
// 1번 방식으로 진행 할 시  하나하나 진행 할 때마다 주석 처리 해야 한다.
const fs = require('fs').promises;


// 폴더 생성
fs.mkdir('./sesac')
.then(() => {
    console.log('폴더 생성 완료');
})
.catch((err) => {
    console.log(err);
});


// fs 모듈을 이용해 'sesac.txt' 만들고 '반갑습니다.' 적기
fs.writeFile('./sesac/sesac.txt', '반갑습니다.')
.then(() => {
    console.log('파일 만들고 내용 작성완료');
})
.catch((err) => {
    console.log(err);
});



// fs 모듈을 이용해 'sesac.txt'를 복사해 'sesac2.txt' 만들기
fs.copyFile('./sesac/sesac.txt', './sesac/sesac2.txt')
.then(() => {
    console.log('복사 완료');
})
.catch((err) => {
    console.log(err);
});



// sesac 폴더 안의 'sesac2.txt'를 'new.txt'로 이름 바꾸기
fs.rename('./sesac/sesac2.txt', './sesac/new.txt')
.then(() => {
    console.log('이름 바꾸기 완료');
})
.catch((err) => {
    console.log(err);
});
*/



// 위의 내용을 async/await 방식으로 작성
const fs = require("fs").promises;
async function exec(){
    await fs.mkdir("./sesac");
    await fs.writeFile("./sesac/sesac.txt", "코딩너무어려워요");
    await fs.copyFile("./sesac/sesac.txt", "./sesac/sesac2.txt");
    await fs.rename("./sesac/sesac2.txt","./sesac/new.txt");
}

exec();
