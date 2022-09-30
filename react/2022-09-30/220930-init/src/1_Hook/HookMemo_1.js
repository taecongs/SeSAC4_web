import React, {useState, useMemo, useCallback, useRef, useEffect} from 'react';


function getAverage(list){
    console.log('getAverage');

    let sum = 0;

    if(list.length == 0) return sum;

    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }

    return sum / list.length;
}


const HookMemo_1 = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    // 초기값이 없다면 null 값을 보내줘도 되고 아무것도 안보내줘도 된다.
    const input = useRef(null);

    // const onChange = e => {
    //     setNum(e.target.value);
    // }

    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     setNum(0);
    // }
    


    // 첫 번째 파라미터는? : {} 함수 내용을 반환한다.
    // 두 번째 파라미터는? : [] 빈 배열이라면 처음에 렌더링 할 때 한번만 실행 
    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, []);


    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum('');
        input.current.focus();
    }, [num, list]);





    // useMemo는? 렌더링 하는 과정에서 두번째 인자로 받은 [list] 배열이 바뀔 때만 getAverage(list)함수를 실행한다.
    const avg =  useMemo(() => getAverage(list), [list]); 

    // 위 방식을 아래 방식으로 정의 할 수 있다.
    // const [avg, setAvg] = useState(0);

    // useEffect(() => {
    //     setAvg(getAverage(list));
    // }, [list]);

    return(
        <div>
            <h1>수업3) Hook - useMemo, useCallback, useRef</h1>

            <input value={num} onChange={onChange} ref={input} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    );
}

export default HookMemo_1;