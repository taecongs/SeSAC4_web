import React, {Component} from 'react';


class TestClass extends Component{
    state = {
        num : 0
    }

    render(){
        return(
            <div>
                <h1>첫 번째 실습(클래스형)</h1>
                <div>{this.state.num}</div>
                <button onClick={() =>{
                    this.setState(prevState => {
                        return {num : prevState.num + 2}
                    });
                }}>+2
                </button>

                
                <button onClick={() => {
                    this.setState(prevState => {
                        return {num : prevState.num - 1}
                    });
                }}>-1
                </button>
            </div>
        );
    }
}


export default TestClass;