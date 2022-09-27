import React, {useState} from 'react';

const Event_2 = () => {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeMsg = (e) => {
        setMsg(e.target.value);
    }

    const clickBtn = () => {
        alert(name +  ' : ' + msg);

        setName('');
        setMsg('');
    }

    const enterKey = (e) => {
        if(e.key === 'Enter'){
            clickBtn();
        }
    }

    return(
        <div>
            <h1>이벤트 핸들링 함수형</h1>

            <input type='text' name='username' placeholder='이름' value={name} onChange={changeName} />
            <input type='text' name='message' placeholder='메세지' value={msg} onChange={changeMsg} onKeyPress={enterKey} />

            <button onClick={clickBtn}>클릭</button>
        </div>
    );
}

export default Event_2;