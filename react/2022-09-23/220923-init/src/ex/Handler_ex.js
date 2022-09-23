import React, {Component} from 'react';

class Handler_ex extends Component{
    state = {
        msg : 'Hello World!'
    }

    constructor(props){
        super(props);

        this.textChange1 = this.textChange1.bind(this);
        this.textChange2 = this.textChange2.bind(this);
    }

    textChange1(){
        this.setState({
            msg : 'Goodbye World!'
        })
    }

    textChange2(){
        this.setState({
            msg : 'Hello World!'
        })
    }



    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.textChange1}>Goodbye</button>
                <button onClick={this.textChange2}>Hello</button>
            </div>
        );
    }
}


export default Handler_ex;