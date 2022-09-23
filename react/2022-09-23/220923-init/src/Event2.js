import React, { Component } from 'react';

class Event2 extends Component {
    state = {
        message: ""
    }

    constructor(props) {
        super(props);
        // bind는 this가 현재 컴포넌트 즉, 컴포넌트 자신을 제대로 가리키기 위해 사용
        // 임의 메서드가 특정 html 요소의 이벤트로 등록되면서 메서드와 this의 관계가 끊어진다.
        // 따라서 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 작업이 필요하다.
        // 바인딩 하지 않는다면 this는 undefined를 가르키게 되며, 이 constructor 함수에서는 함수를 바인딩하는 작업을 하는 것
        this.eventChange = this.eventChange.bind(this);
        this.eventClick = this.eventClick.bind(this);
    }


    
    eventChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    eventClick() {
        alert(this.state.message);
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 핸들링 - 2</h1>

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value={this.state.message}
                    onChange={this.eventChange}
                />

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}


export default Event2;