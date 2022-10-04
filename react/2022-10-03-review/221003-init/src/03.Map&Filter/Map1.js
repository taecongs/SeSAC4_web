import React from 'react';


const Map1 = () => {
    const baseball = ['LG트윈스', 'SSG 랜더스', '키움 히어로즈', 'KT 위즈'];

    // map() 첫번째 인자(arrayResult)는 리스트를 순서대로 돌면서 나오는 값
    // map() 두번째 인자(arrayInt)는 방금 나온 값의 인덱스
    const bsTeam = baseball.map((arrayResult, arrayInt) => <li key={arrayInt}>{arrayResult}</li>);
    return(
        <div>
            <h1>Map 복습</h1>

            <ol>
                {bsTeam}
            </ol>
        </div>
    );
}

export default Map1;