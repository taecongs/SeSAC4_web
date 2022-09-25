import React, {Component} from 'react';


class StateClass2 extends Component{
    state = {
        name : 'SeSAC 4기',
        num  : 0,
        list : ['b', 'a', 'n', 'g'],
        text  : '2022년 9월 25일입니다.'
    }

    render(){
        return(
            <div>
                <h1>클래스형 State 현재버전</h1>

                <div>{this.state.name} ★★★ State - Class 현재 버전 ★★★ {this.state.num}</div>


                <button onClick={() => {
                    this.setState(prevState => {
                        return {num : prevState.num + 1}
                    });
                }}  style={{marginRight : '10px'}}>첫 번째 버튼</button>


                <button onClick={() => {
                    this.setState({list :['p', 'a', 'r', 'k']})
                }}>두 번째 버튼</button>

                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>

                <div>{this.state.text}</div>

                <button onClick={() => {
                    this.setState({text : this.state.text == '2022년 9월 25일입니다.' ? '2022년 9월 26일입니다.' : '2022년 9월 25일입니다.'})
                }}>세 번째 버튼</button>
            </div>
        );
    }
}


export default StateClass2;