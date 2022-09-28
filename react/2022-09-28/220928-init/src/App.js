import React from 'react';


function App(){
    return(
        <div className='App'>

        </div>
    );
}

export default App;



class Shape{
    constructor(w, h){
        this.w = w;
        this.h = h;
    }

    getArea(){
        return this.w * this.h;
    }
}


// 부모(Shape)의 것을 자식(Square)이 상속 받아 사용한다.
class Square extends Shape{
}


// 부모(Shape)의 것을 자식(Triangle)이 상속 받아 사용한다.
class Triangle extends Shape{
    constructor(x, y, name){
        // 자식 컨스트럭쳐 안에있는 super는 부모의 컨스트럭쳐를 사용한다는 뜻 이다.
        super(x, y);
        this.name = name;
    }

    getArea(){
        return this.w * this.h / 2 + this.name;
    }
}


let shape1 = new Shape(5, 4);
console.log(shape1.getArea());


let shape2 = new Shape(2, 3);
console.log(shape2.getArea());


let shape3 = new Square(4, 8);
console.log(shape3.getArea());


let shape4 = new Triangle(5, 6, 'jane');
console.log(shape4.getArea());