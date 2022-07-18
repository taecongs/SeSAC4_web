// 주어진 밀리초(1000 - 1초) 이후에 콜백함수를 실행
const func1 = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);


// 주어진 밀리초(1000 - 1) 마다 콜백 함수를 실행
const func2 = setInterval(() => {
    console.log('1초마다 반복');
}, 1000);


//
const func3 = setTimeout(() => {
    console.log('func3 실행');
}, 3000);



setTimeout(() => {
    // setTimeout을 종료한다.
    clearTimeout(func3);

    // setInterval을 종료한다.
    clearInterval(func2);
}, 2500);


// 콜백 함수를 즉시 실행 한다.
const func4 = setImmediate(() => {
    console.log('func4 즉시 실행');
});


// 콜백 함수를 즉시 실행 한다.
const func5 = setImmediate(() => {
    console.log('func5 즉시 실행');
});

// 콜백 함수를 즉시 종료 한다.
clearImmediate(func5);


// 현재 실행중인 파일 경로
console.log(__filename);

// 현재 실행 중인 폴더 경로
console.log(__dirname);