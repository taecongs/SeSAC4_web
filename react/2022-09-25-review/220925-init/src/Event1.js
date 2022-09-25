import React, {Component} from 'react';

class Event1 extends Component{
    state = {
        message : ''
    }
    
    render(){
        return(
            <div>
                <h1>이벤트 핸들링(클래스형 컴포넌트) - 1</h1> 

                <input type='text' name='message' placeholder='이곳에 입력해보세요' value={this.state.message} onChange={(e) => {
                    // onChange 이벤트 발생 시 => input 값의 변화를 보고 싶다면? e.target.value
                    console.log(e.target.value);

                    // setState : state를 바꾸는 함수
                    // this.setState 메서드로 state 값 업데이트 => input의 value 값을 state에 있는 값으로 설정
                    this.setState({
                        message : e.target.value
                    });
                }} />


                <button onClick={() => {
                    alert(this.state.message);

                    this.setState({
                        message : ''
                    });
                }}>클릭</button>
            </div>
        );
    }
}

export default Event1;