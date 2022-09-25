import React, {useState} from 'react';


function StateFunction (){
    // useState('') : 초기값(초기값은 숫자, 문자, 배열 등 값의 형태가 자유롭다.)
    // msg : 초기값  ||  setMsg : msg를 변경하기 위해 사용하는 함수
    const [msg, setMsg] = useState('기존 메시지');

    function changeMsg(){
        // setState({msg : 변경 된 메세지}) 와 같다.
        setMsg('변경 된 메시지');
    }


    
    return(
        <div>
            <h1>함수형 useState</h1>
            <p>{msg}</p>           

            <button onClick={changeMsg}>네 번째 버튼</button>
        </div>
    );
}

export default StateFunction;