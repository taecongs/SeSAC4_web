import React from 'react';


const Sample1 = () => {
    // 문자열로 구성된 배열을 선언하였다.
    const fashion = ['청바지', '패딩', '반팔', '운동화'];

    // 고유한 값이 없을 때만 key를 사용한다. key를 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못하기 때문이다.

    // 배열 값을 사용하여 JSX 코드로 된 배열을 새로 생성하였다.
    // key={} 사용하는 이유는? 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용한다.
    const fashionList = fashion.map((fashion, index) => <li key={index}>{fashion}</li>);

    return(
        <div>
            <h1>컴포넌트 응용 - 013 ~ 026</h1>
            <ul>
                {fashionList}
            </ul>
        </div>
    );
}

export default Sample1;