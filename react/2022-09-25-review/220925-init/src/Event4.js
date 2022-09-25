import React, {useState} from 'react';

import './Event4.css';

const Event4 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // e.target.name을 대신 onChange~~~ 함수를 두개 만들었다. 
    // input의 갯수가 적다면 이 방법도 괜찮다.
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return(
        <div>
            <h1>이벤트 핸들링(함수형 컴포넌트) - 4</h1> 

            <input type='text' name='username' placeholder='사용자 이름' value={username} onChange={onChangeUsername} />

            <input type='text' name='message' placeholder='내용 입력' value={message} onChange={onChangeMessage} onKeyPress={onKeyPress} />

            <button onClick={onClick}>입력</button>
        </div>
    );
}

export default Event4;