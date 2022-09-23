import React, {Component} from 'react';


class Event1 extends Component{
    state = {
        message : ''
    }

    render(){
        return(
            <div>
                <h1>이벤트 핸들링 - 1</h1>

                <input type='text' name='message' placeholder='이곳에 입력해보세요' value={this.state.message} onChange={(e) => {
                        // e => e 객체는 SyntheticEvent(합성 이벤트)
                        // 웹 브라우저의 nativeEvent가 아닌 nativeEvent를 감싼 SyntheticEvent(합성 이벤트) 사용 
                        // onClick, onChange 같은 이벤트들은 브라우저의 기본 이벤트가 아니다.
                        // 브라우저의 이벤트들을 포함하고 있는 리엑트의 고유한 이벤트 객체
                        
                        // console.log(e.target.value);
                        this.setState({
                            message : e.target.value
                        })
                    }}
                />


                {/* 버튼을 클릭하면 alert 함수가 실행되면서 input에 들어가 있는 값이 메세지로 뜬다.
                    그리고 this.setState메서드를 이용해 message를 다시 공백으로 만들었다. */}
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