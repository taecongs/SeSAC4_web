import React, {Component} from 'react';


class Handler_ex extends Component{
    state = {
        msg : 'Hello World!'
    }


    changeBtn = () => {
        this.setState({msg : this.state.msg === 'Hello World!' ? 'Goodbye World!' : 'Hello World!'});
    }

    render(){
        return(
            <div>
                <h1>이벤트 핸들링 실습</h1>
                <p>{this.state.msg}</p>
                <button onClick={this.changeBtn}>클릭</button>
            </div>
        );
    }
}

export default Handler_ex;