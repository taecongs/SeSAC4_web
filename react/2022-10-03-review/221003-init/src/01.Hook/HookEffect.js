import React, { useEffect, useState } from 'react';


const HookEffect = () => {
    const [name, setName] = useState('');
    const [num, setNum] = useState(0);

    // e : 합성 이벤트(모든 브라우저에서 이벤트를 동일하게 처리하기 위한 래퍼 객체)
    const changeName = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        return () => {
            console.log('업데이트 직전에 실행 : ', name);
        }
    }, [name]);

    // [] : 빈 배열 일 시 최초로 렌더링 되었을 때만 실행한다.
    // [name] : 특정 값이 업데이트 될 때마다 실행한다.


    const clickBtn = () => {
        setNum(num + 1);
    }

    return(
        <div>
            <h1>Hook - useEffect</h1>
            
            <div>
                <h2>이름 : {name}</h2>
                <h2>횟수 : {num}</h2>
            </div>

            <div>
                <input type='text' value={name} onChange={changeName} />
                <button type='button' onClick={clickBtn}>클릭</button>
            </div>
        </div>
    );
}

export default HookEffect;