import React, {useEffect, useMemo, useState} from 'react';

const UseMemo03 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = {
    //     country : isKorea ? '한국' : '미국',
    // };

    const location = useMemo(() => {
        return {
            country : isKorea ? '한국' : '미국',
        }
    }, [isKorea]);


    // 맨 처음 컴포넌트가 화면에 렌더링 되었을 때 호출된다.
    // location이 변경 되었을 때 호출 된다.
    useEffect(() => {
        console.log('useEffect 호출');
    }, [location]);

    return(
        <div>
            <h2>하루에 몇끼 먹어요?</h2>

            <input type='number' value={number} onChange={(e) => {
                setNumber(e.target.value);
            }} />

            <hr />

            <h2>어느 나라에 있어요?</h2>
            <p>나라 : {location.country}</p>
            
            <button onClick={() => {
                setIsKorea(!isKorea)
            }}> 비행기타자
            </button>
        </div>
    );
}

export default UseMemo03;