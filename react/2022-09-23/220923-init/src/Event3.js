import React, { Component } from 'react';

class Event3 extends Component {
    state = {
        username: "",
        message: ""
    }

    eventChange = (e) => {
        this.setState({
            // key를 []로 감싸면 그 안에 얺은 실제 값이 key 값으로 사용된다.
            [e.target.name]: e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    eventKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.eventClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 핸들링 - 3(클래스형)</h1>

                <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름"
                    value={this.state.username}
                    onChange={this.eventChange}
                />

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value={this.state.message}
                    onChange={this.eventChange}
                    onKeyPress={this.eventKeyPress}
                />

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default Event3;