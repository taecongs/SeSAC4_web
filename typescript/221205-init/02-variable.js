// : 타입 표기 (Type Annotation)
var str = 'hi';
var num = 1;
var flag = true;
// | : 또는
var age;
age = 10;
age = 'a';
// any : 타입이 어떤 것이든 상관 없다.
var any;
// Array
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['a', 'b', 'c', 'd'];
var arr3 = [1, 2, 3, 4, 5];
// Tuple : 타입을 엄격하게 제한 한다.
var arr4 = ['str', 1];
// Enum : 특정한 값들의 집합을 만든 뒤 선택 할 수 있다.
var Names;
(function (Names) {
    Names[Names["\uD64D\uAE38\uB3D9"] = 0] = "\uD64D\uAE38\uB3D9";
    Names[Names["\uCF54\uB529\uC628"] = 1] = "\uCF54\uB529\uC628";
    Names[Names["\uC0C8\uC2F9"] = 2] = "\uC0C8\uC2F9";
})(Names || (Names = {}));
;
var name1 = Names.홍길동;
name1 = Names.코딩온;
// void
// 함수 : 반환값이 없는 친구 
// 변수 : undefined 와 null만 들어갈 수 있다.
var void1 = undefined;
function void2() {
    console.log('11');
}
// never : 함수에 사용하며, 함수의 끝에 절대 도달하지 않는다. (반환을 절대 하지 않기 때문에 무한루프)
// function neverEnd():never {
//     while(true){
//     }
// }
// 모든 타입을 허용 
var test;
test: 1;
test = [1, 2, 3];
// object : 기본타입을 제외한 나머지 모두 (array, tuple 등);
var test2;
test2 = 1;
test2 = [1, 2, 3];
