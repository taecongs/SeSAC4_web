import React, { useState, useEffect } from 'react';


const UseEffect01 = () => {
    const [count, setCount] = useState(1);
    const [names, setNames] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setNames(e.target.value);
    }

    // 매번 컴포넌트가 렌더링 될 때마다 실행한다.
    useEffect(() => {
        console.log('🌟렌더링🌟');
    });

    // 가장 처음 렌더링 될 때 한 번만 실행한다.
    useEffect(() => {
        console.log('🌟렌더링 한 번만🌟');
    }, []);


    // 마운팅 + dependency array(count)가 변경 될 때 마다 실행
    useEffect(() => {
        console.log('🎰count 변화🎰')
    }, [count]);


    // 마운팅 + dependency array(name)이 변경 될 때마다 실행
    // 첫 번째 인자 : {console.log('✅name 변화✅');} => 함수(진행할 작업)
    // 두 번째 인자 : [names] => 배열(업데이트 관리)
    useEffect(() => {
        console.log('✅name 변화✅');
    }, [names]);

    return (
        <div>
            <h1>useEffect</h1>

            <button onClick={handleCountUpdate}>Update</button>
            <span>count : {count}</span>
            <input type='text' value={names} onChange={handleInputChange} />
            <span>name : {names}</span>
        </div>
    );
}

export default UseEffect01;