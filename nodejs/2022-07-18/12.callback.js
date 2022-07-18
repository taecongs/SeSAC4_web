// console.log('start');

// function login(id, pw){
//     setTimeout(() => {
//         console.log('정보 없음');
//         return {userId : id};
//     }, 3000);
// }

// const user = login('kim', '1234');
// console.log(user + '님 반갑습니다.');

// console.log('finish');



console.log('start');

// id = kim , pw : 1234, cd : user 함수
function login(id, pw, cb){
    setTimeout(() => {
        console.log('정보 없음');
        cb(id);
    }, 3000);
}

const user = login('kim', '1234', user => {
    console.log(user + '님 반갑습니다.');
});

console.log('finish');