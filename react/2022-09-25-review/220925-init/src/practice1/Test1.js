import React, {Component} from 'react';


class Test1 extends Component{
    state = {
        num : 0
    }

    render(){
        return(
            <div>
                <h1>state, useState 실습1</h1>
                <p>{this.state.num}</p>
                <button onClick={() => {
                    this.setState(prevState => {
                        return {num : prevState.num + 2}
                    });
                }} style={{marginRight : '10px'}}>+2</button>

                <button onClick={() => {
                    this.setState(prevState => {
                        return {num : prevState.num - 1}
                    });
                }}>-1</button>
            </div>
        );
    }
}

export default Test1;