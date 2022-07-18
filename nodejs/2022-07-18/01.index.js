// 한개의 모듈을 불러오는 방식
const returnString = require('./02.func.js');
console.log(returnString());


// 여러개 모듈을 불러오는 방식
const {a, b} = require('./03.variable.js');
