import React from 'react';


const Sample_1 = () => {
    const fashion = ['청바지', '패딩', '반팔', '운동화'];

    // fashion : 순서대로 돌면서 나오는 값 
    // list : 나오는 값의 인덱스
    const fList = fashion.map((fashion, list) => <li key={list}>{fashion} {list}</li>);

    return(
        <div>
            <h1>map() 복습1</h1>
            <ul>
                {fList}
            </ul>
        </div>
    );
}

export default Sample_1;