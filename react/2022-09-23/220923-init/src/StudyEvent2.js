import React, {Component} from 'react';


class StudyEvent2 extends Component{
    // 2.함수 안에서도 this를 사용하고 싶다면? constritor 사용
    constructor(props){
        super(props);
        // bind는 this가 현재 컴포넌트 즉, 컴포넌트 자신을 제대로 가리키기 위해 사용한다.
        this.printConsole = this.printConsole.bind(this);
    }

    printConsole(msg){
        console.log('printConsole');
        console.log(msg);
        console.log(this);
    }

    // 3.화살표 함수로 정의하면 bind를 굳이 정의하지 않아도 된다.
    printConsole2 = () => {
        console.log('printConsole2');
        console.log(this);        
    }

    sendParameter = () => {
        this.printConsole('4');
    }

    render(){
        return(
            <div>
                <h1>클래스형</h1>
                {/* 클래스형에서는 this를 붙여야 정상적으로 함수를 찾는다. */}
                {/* <button onClick={() => {this.printConsole('2')}}>printConsole</button> */}
                <button onClick={this.printConsole2}>printConsole2</button>
                <button onClick={this.sendParameter}>printConsole3</button>
            </div>
        );
    }
}

export default StudyEvent2;