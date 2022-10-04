import React, { useCallback, useState, useMemo, useRef } from 'react';

function getAverage(list){
    console.log('getAverage');

    let sum = 0;

    if(list.length == 0) return sum;

    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }

    return sum / list.length;
}

const HookCallbackRef = () => {
    const [list, setList] = useState([]);
    const [int, setInt] = useState(0);

    // useRef
    const input = useRef();



    // useCallback
    const onChange = useCallback(e => {
        setInt(e.target.value);
    }, []);


    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(int));
        setList(nextList);
        setInt('');
        input.current.focus();
    }, [int, list]);


    // useMemo
    const avg =  useMemo(() => getAverage(list), [list]); 

    return(
        <div>
            <h1>Hook - useCallback & useRef</h1>

            <input value={int} onChange={onChange} ref={input} type='text' />
            <button onClick={onInsert} type='button'>등록</button>

            <div>
                <ul>
                    {list.map((v, i) => {
                        <li key={i}>{v}</li>
                    })}
                </ul>

                <b>평균값 : {avg}</b>
            </div>
        </div>
    );
}

export default HookCallbackRef