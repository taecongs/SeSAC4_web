import React, {useState} from 'react';



function StateFunction(){
    // useState의 ()에는 초기값이 들어간다.
    // 초기값은 숫자일 수도, 문자일 수도, 배열일 수 도 있다. 값의 형태가 자유롭다.
    
    // msg는 초기값 => Class에서는 this.state{msg : ''}
    // setMsg는 msg를 변경하기 위해 사용하는 함수
    // 필요에 따라 개별적으로 선언해야 한다.
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);

    function changeMsg(){
        // setState({msg : 메세지}) 와 같다.
        setMsg('메세지');
    }

    return(
        <div>
            <div>
                StateFunction
                <p>{msg}</p>
            </div>

            <button onClick={changeMsg}>클릭</button>
        </div>
    );
}


export default StateFunction;