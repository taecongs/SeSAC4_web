import React, { useState } from 'react';


const hardCalculate = (number) => {
    console.log('어려운 계산');

    for (let i = 0; i < 999999999; i++) {
        return number + 10000;
    };
}


const easyCalculate = (number) => {
    console.log('쉬운 계산');

    return number + 1;
}



// 함수형 컴포넌트는 렌더링 될 때마다 험수 안에 정의 되어 있는 변수들이 초기화 된다.
// 그러므로 정의 되어 있는 hardCalculate(hardNumber), easyCalculate(easyNumber) 함수도 계속 호출 되기 때문에 느려진다.
const UseMemo01 = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardSum = hardCalculate(hardNumber);
    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>

            <input type='number' value={hardNumber} onChange={(e) => {
                setHardNumber(parseInt(e.target.value))
            }} />

            <span> + 10000 = {hardSum}</span>

            {/*  */}

            <h3>쉬운 계산기</h3>

            <input type='number' value={easyNumber} onChange={(e) => {
                setEasyNumber(parseInt(e.target.value))
            }} />

            <span> + 1 = {easySum}</span>
        </div>
    );
}

export default UseMemo01;