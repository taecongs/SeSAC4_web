// : 타입 표기 (Type Annotation)
let str : string = 'hi';
let num : number = 1;
let flag : boolean = true;

// | : 또는
let age : number | string;

age = 10;
age = 'a';

// any : 타입이 어떤 것이든 상관 없다.
let any : any;


// Array
let arr1 : number[] = [1,2,3,4,5];
let arr2 : string[] = ['a','b','c','d'];
let arr3 : Array<number> = [1,2,3,4,5];


// Tuple : 타입을 엄격하게 제한 한다.
let arr4 : [string, number] = ['str', 1];


// Enum : 특정한 값들의 집합을 만든 뒤 선택 할 수 있다.
enum Names {홍길동, 코딩온, 새싹};
let name1 : Names = Names.홍길동;
name1 = Names.코딩온;


// void
// 함수 : 반환값이 없는 친구 
// 변수 : undefined 와 null만 들어갈 수 있다.
let void1 : void = undefined;

function void2():void {
    console.log('11');
}


// never : 함수에 사용하며, 함수의 끝에 절대 도달하지 않는다. (반환을 절대 하지 않기 때문에 무한루프)
// function neverEnd():never {
//     while(true){

//     }
// }



// 모든 타입을 허용 
let test : any;
test : 1;
test = [1,2,3];


// object : 기본타입을 제외한 나머지 모두 (array, tuple 등);
let test2 : object;
// test2 = 1;
test2 = [1,2,3];