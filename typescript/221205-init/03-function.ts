// function 함수이름 (변수명 : 타입) : 반환타입 {}
// 타입스크립트는 지정한 매개변수 갯수에 맞춰 인자의 값을 보내줘야 한다.

// const test10 = () => {
//     return 'test';
// }

// console.log(test10());

function sum1(a:number,b?:number) :number {
    return a + b;
}
console.log(sum1(1, 3));
console.log(sum1(1, null));


// ? : number 혹은 undefined를 가질 수 있다.
function sum2(a : number, b : number) :number {
    return a + b;
}
console.log(sum2(1,2));


function sum3( a : number, b? : number ) {
    return a + b;
}
console.log( "sum3 : ", sum3(1 ) );



const func1 = (a:string):void => {
    console.log('func1');
}

const func2 = function(){
    console.log("func2");
}



function getInfo(obj : {name : string, age :number}){

}

interface PersonDate {
    name : string;
    age : number;
    nickname? : string;
}

function getInfo2(obj : PersonDate){

}

let person = {name : '코딩온', age : 10};
let person2 : PersonDate = {name : '코딩온', age : 10};

person2.age = person2.age + 1;

// getInfo(person2);


interface login{
    (id : string, pw :string):boolean
};

let loginUser:login = (id,pw) => {
    return true;
}


interface Book {
    title : string;
    getInfo():void;
    changeTitle(newTitle:string):void;
}

class MyBook implements Book{
    title = '책';
    date = '2022-12-05';
    getInfo(){
        console.log('정보');
    }

    chageTitle(newTitle:string):void{

    }
}








