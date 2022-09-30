import React, { useState, useEffect } from 'react';


const HookEffect_1 = () => {
    const [name, setName] = useState('');
    const [cnt, setCnt] = useState(0);



    const changeName = e => {
        setName(e.target.value);
    }

    // 첫번째 인자 : 진행할 작업  두번째 인자 : 업데이트 관리
    useEffect(() => {
        console.log('name : ', name);

        // 뒷정리 함수란? 컴포넌트가 업데이트 되기 직전 실행한다.
        return () => {
            console.log('name2 : ', name);
        }
    }, [name]);

    // [] : 빈 배열은 가장 처음 렌더링 될 때 한 번만 실행한다.
    // [name] : 특정값이 업데이트 될 때마다 실행 한다.


    // Class형에서는 이렇게 작성 한다.
    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.name != this.state.name){
    //         // 실행
    //     }
    // }


    const clickBtn = () => {
        setCnt(cnt + 1);
    }



    return (
        <div>
            <h1>수업1) Hook - useEffect</h1>

            <div>
                <input value={name} onChange={changeName} />
                <button type='button' onClick={clickBtn}>클릭</button>
            </div>

            <div>
                <h2>이름 : {name}</h2>
                <h2>횟수 : {cnt}</h2>


            </div>
        </div>
    );
}

export default HookEffect_1;