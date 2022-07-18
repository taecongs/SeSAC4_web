// 1. os 모듈
const os = require('os');

// 사용 가능한 메모리(RAM) 출력하기
console.log(os.freemem());

// 전체 메모리 용량 출력하기
console.log(os.totalmem());

// 홈 디렉토리 경로 출력하기
console.log(os.homedir());



// 2. path 모듈
const path = require('path');
const string = __filename;

// 경로 구분자 출력하기
console.log(path.sep);

// 현재 파일의 확장자 출력하기
console.log(path.extname(string));


// 현재 파일의 경로를 분리해서 출력하기
console.log(path.parse(string));
