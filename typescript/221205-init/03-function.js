// function 함수이름 (변수명 : 타입) : 반환타입 {}
// 타입스크립트는 지정한 매개변수 갯수에 맞춰 인자의 값을 보내줘야 한다.
// function sum1(a,b) {
//     return a + b;
// }
// console.log(sum1(1, 'a'));
// console.log(sum1(1, null));
// // ? : number 혹은 undefined를 가질 수 있다.
// function sum2(a : number, b? : number) :number {
//     return a + b;
// }
// console.log(sum2(1,2));




var test10 = function () {
    return 'test';
};
console.log(test10());
