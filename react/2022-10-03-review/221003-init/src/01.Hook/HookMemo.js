import React, { useState, useMemo } from 'react';

function getAverage(list){
    let sum = 0;

    if(list.length == 0){
        return sum;
    }

    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }

    return sum / list.length;
}


const HookMemo = () => {
    const [list, setList] = useState('');
    const [num, setNum] = useState(0);


    const onChange = (e) => {
        setNum(e.target.value);
    }

    const onInsert = () => {
        // ... : 전개 연산자
        // parseInt : 문자열 숫자로 변환하기
        setList([...list, parseInt(num)]);
        setNum(0);
    }

    // useMemo : 첫 번째 인자는 콜백함수 | 두 번째 인자는 의존성 배열
    // 두 번째 인자인 배열의 요소 값이 업데이트 될 때만 콜백 함수를 다시 호출한다.
    const avg = useMemo(() => getAverage(list), [list]);

    return(
        <div>
            <h1>Hook - useMemo</h1>

            <div>
                <b>평균값 : {avg}</b>
            </div>

            <input value={num} onChange={onChange} type='text' />
            <button onClick={onInsert} type='button'>등록</button>
        </div>
    );
}

export default HookMemo;