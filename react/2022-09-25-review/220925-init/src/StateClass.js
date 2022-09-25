import React, {Component} from 'react';


class StateClass extends Component{
    constructor(props){
        // super()를 선언해야 constructor 안에 this 키워드를 사용 할 수 있다.
        super(props);

        this.state = {
            name : 'SeSAC 4기',
            num  : 0,
            list : ['s', 'e', 's', 'a', 'c']
        }
    }

    render(){
        return(
            <div>
                <h1>클래스형 State 기존버전</h1>

                {/* 클래스 컴포넌트는 props를 가지고 올때 반드시 this를 정의하여아 한다. */}
                <div>{this.state.name} ★★★ State - Class 기존 버전 ★★★ {this.state.num}</div>

                <button onClick={() => {
                    // setState  : state의 값을 바꾸는 함수
                    // prevState : 기존 상태 
                    this.setState(prevState => {
                        return {num : prevState.num + 1}
                    });
                }} style={{marginRight:'10px'}}>첫번째 버튼</button>

                <button onClick={() =>  {
                    this.setState({list : ['c', 'l', 'i', 'c', 'k']})
                }}>두번째 버튼</button>

                <ul>
                    {/* map : 반복문을 사용하기 위해 정의한다. */}
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default StateClass;