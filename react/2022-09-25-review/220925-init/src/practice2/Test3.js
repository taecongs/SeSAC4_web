import React, {Component} from 'react';

class Test3 extends Component{
    state = {
        message : 'Hello World'
    }

    clickBtn = () => {
        // message의 값이 Hello World와 일치한다면 ? Goodbye World로 변경 : 일치하지 않다면 Hello World로 변경 
        this.setState({message : this.state.message == 'Hello World' ? 'Goodbye World' : 'Hello World'});
    }


    render(){
        return(
            <div>
                <h1>이벤트 핸들링 실습1</h1> 
                <h2>{this.state.message}</h2>
                <button onClick={this.clickBtn}>클릭</button>
            </div>
        );
    }
}

export default Test3;