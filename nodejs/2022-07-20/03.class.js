// 교육 1
class Cat {
    // constructor는 속성을 받기 위해 정의
    constructor(name){
        // this : class Cat{} 자체를 의미한다.
        this.name = name;
    }

    mew(){
        console.log(this.name + ' 야옹');
    }
}


let user1 = new Cat('나비');
let user2 = new Cat('고양이');


console.log(user1);

user1.mew();
user2.mew();




// 교육 2
class Car {
    constructor(color){
        this.color = color;
        this.isWheel = true;
        this.isDoor = true;
    }

    go(){
        console.log('전진');
    }

    back(){
        console.log('후진');
    }

    returnColor(){
        return this.color;
    }
}


module.exports = {Car};