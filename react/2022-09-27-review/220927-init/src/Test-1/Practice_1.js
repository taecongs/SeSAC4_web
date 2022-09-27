import React, {Component} from 'react';

class Practice_1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            num : 0
        }
    }

    render(){
        return(
            <div>
                <h1>state 복습</h1>

                <p>{this.state.num}</p>

                <button onClick={() => {
                    this.setState(defaultNum => {
                        return {num : defaultNum.num + 2}
                    })
                }} style={{marginRight : '10px'}}>+2</button>


                <button onClick={() => {
                    this.setState(defaultNum => {
                        return {num : defaultNum.num - 1}
                    })
                }}>-1</button>
            </div>
        );
    }
}

export default Practice_1;