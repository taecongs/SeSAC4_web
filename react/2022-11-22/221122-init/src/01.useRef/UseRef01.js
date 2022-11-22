import React, {useState, useRef} from 'react';


const UseRef01 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    // State가 변경 될 때마다 UseRef01 컴포넌트가 렌더링 된다.
    console.log('렌더링');

    const increaseCountState = () => {
        setCount(count + 1);
    };



    // Ref 는 하나의 Object 이다.
    // Ref의 값이 계속 변경되지만 렌더링 되지 않기 떄문에 화면에 보이지는 않는다.
    const increaseCountRef = () => {
        // current 값에 접근하려면? countRef.current
        // current : 0  형태로 출력 
        countRef.current = countRef.current + 1;

        console.log('Ref : ', countRef.current);
    };


    return(
        <div>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
        </div>
    );
}

export default UseRef01;