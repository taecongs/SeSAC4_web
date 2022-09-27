import React, {Component} from 'react';


class Event_1 extends Component{
    state = {
        username : '',
        message : ''
    }

    changeTxt = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    clickBtn = () => {
        alert(this.state.username + ' : ' + this.state.message);

        this.setState({
            username : '',
            message : ''
        });
    }

    render(){
        return(
            <div>
                <h1>이벤트 핸들링 클래스형</h1>
                <input type='text' name='username' placeholder='이름' value={this.state.username} onChange={this.changeTxt} />
                <input type='text' name='message' placeholder='메세지' value={this.state.message} onChange={this.changeTxt} />

                <button onClick={this.clickBtn}>클릭</button>
            </div>
        );
    }
}

export default Event_1;