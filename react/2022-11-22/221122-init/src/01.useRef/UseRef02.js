import React, {useState, useRef} from 'react';


// useState로 렌더링을 하게 되면 함수가 다시 불리우기 때문에 불릴 때마다 함수 내부에 있는 변수들이 초기화 된다.
const UseRef02 = () => {
    const [renderer, setRenderer] = useState(0);

    // Ref는 렌더링 되어도 계속해서 값을 유지한다.
    // 마운팅 되었을때부터 언마운팅 될 때 까지 값을 유지한다.
    const countRef = useRef(0);

    // 기존에 Var의 값이 몇이라도 렌더링되면 변수들이 초기화 되기 때문에 0으로 나온다.
    let countVar = 0;


    const doRendering = () => {
        setRenderer(renderer + 1);
    }


    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref : ', countRef.current);
    }


    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('var : ', countVar);
    }

    
    const printResults = () => {
        console.log(`ref : ${countRef.current}, var : ${countVar}`);
    }


    return(
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>

            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    );
}

export default UseRef02;