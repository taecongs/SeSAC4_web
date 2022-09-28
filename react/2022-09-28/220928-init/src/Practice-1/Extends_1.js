import React, {Component} from 'react';


class Extends_1 extends Component{
    render(){
        return(
            <div className='Extends_1'>

            </div>
        );
    }
}

export default Extends_1;



// 부모 요소인 Student
class Student {
    constructor(name, school, age, num){
        this.name = name;
        this.school = school;
        this.age = age;
        this.num = num;
    }

    getInfo(){
        return '저의 이름은 ' + this.name + ' 입니다. ' + "현재 " +  this.school + ' 재학중이며 ' + '학번은 ' + this.num + ' 나이는 ' + this.age + '살 입니다.';
    }
}


// 자식 요소인 Kim은 부모 요소인 Student를 상속(extends) 받는다.
class Kim extends Student{
}

// 자식 요소인 Lee는 부모 요소인 Student를 상속(extends) 받는다.
class Lee extends Student{
    constructor(name, school, age, num){

        // 자식 컨스트럭쳐 안에있는 super는 부모의 컨스트럭쳐를 사용한다는 뜻 이다.
        super(name, school, age, num);
    }

    getInfo(){
        return '이름' + ':' + this.name + '\n' + '나이' + ':' + this.age + '\n' + '학교' + ':' + this.school + '\n' + '학번' + ':' + this.num;
    }
}



let user_1 = new Kim('홍창기', '홍익대학교', 29, '21학번');
console.log(user_1.getInfo());


let user_2 = new Lee('박용택', '고려대학교', 38, '09학번');
console.log(user_2.getInfo());


