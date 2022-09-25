import React, {Component} from 'react';

class Event3 extends Component{
    state = {
        username : '',
        message : ''
    }

    eventChange = (e) => {
        this.setState({
            // key를 []로 감싸면 그 안에 넣은 실제 값이 key 값으로 사용된다.
            [e.target.name] : e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.username + ' : ' + this.state.message);

        this.setState({
            username : '',
            message : ''
        });
    }

    // input에서 Enter를 눌렀을 때 evnetClick 메서드 호출
    eventKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.eventClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 핸들링(클래스형 컴포넌트) - 3</h1> 

                <input style={{marginRight : '10px'}} type='text' name='username' placeholder='사용자 이름' value={this.state.username} onChange={this.eventChange} />
                <input type='text' name='message' placeholder='텍스트 입력' value={this.state.message} onChange={this.eventChange} onKeyPress={this.eventKeyPress} />

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default Event3;