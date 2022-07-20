// 교육 1
let obj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : function(){
        console.log('a');
    }
};

// 객체 구조 분해 방식
// 변수 key1으로 값을 가져온뒤 :(콜론)으로 가져온 변수명을 바꿀 수 있다.
const {key1:key00, key2, key3, key4 = 'b'} = obj;

// 객체 안에 있는 메서드를 실행
key3();

console.log(key4);
console.log(key00);


// 교육 2
let obj2 = {a:1, b:2, c:3, d:4};
// ... (전개 연산자)는 ... 뒤에 있는 나머지 객체 전부를 가져오겠다라는 뜻이다.
const {a, b, ...rest} = obj2;

console.log(rest);