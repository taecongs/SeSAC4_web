import React, {Component} from 'react';


class Event2 extends Component{
    state = {
        message : ''
    }

    // constructor(props){
    //     // constructor 안에서 this를 사용하기 위해 정의
    //     super(props);

    //     // bind : 컴포넌트 자신을 제대로 가리키기 위해 사용(this와 연결을 위해)
    //     this.eventChange = this.eventChange.bind(this);
    //     this.eventClick = this.eventClick.bind(this);
    // }


    // 화살표 함수로 정의한다면? constructor를 작성하지 않아도 된다.
    eventChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.message);

        this.setState({
            message : ''
        });
    }

    render(){
        return(
            <div>
                <h1>이벤트 핸들링(클래스형 컴포넌트) - 2</h1> 

                <input type='text' name='message' placeholder='이곳에 입력해보세요' value={this.state.message} onChange={this.eventChange} />

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default Event2;