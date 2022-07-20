// 교육 1
let list = ['apple', 'banana'];

// 기존 방식
// let item1 = list[0];
// let item2 = list[1];


// 배열 구조 분해 방식
[item1, item2, item3 = 'melon'] = list;

console.log('item1 : ', item1);
console.log('item2 : ', item2);
console.log('item3 : ', item3);



// 교육 2
let x = 1;
let y = 3;

// 가존 방식
// let temp = x;
// x = y;
// y = temp;

// 배열 구조 분해 방식
[y, x] = [x, y];

console.log(x, y);
