import React, {useState} from 'react';

const heavyWork = () => {
    console.log('무거운 작업');
    return ['홍길동', '김민수'];
}

const UseState02 = () => {
    // 무거운 작업을 진행할떄는? 
    // 초기값을 가져올 때 바로 값을 넣어주기보다는 콜백 형식으로 넣어주면 맨 처음 화면에 렌더링 될 때만 함수가 불려진다.
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }



    const uploadBtn = () => {
        // 콜백함수에는 업데이트 전의 상태를 가지고 있다.
        // 현재 prevState 는 이전 ['홍길동', '김민수'] 배열 상태를 가지고 있다.
        setNames((prevState) => {
            console.log('이전 state : ', prevState);
            return[input, ...prevState];
        });
    }

    return(
        <div>
            <h1>useState</h1>
            <input type='text' value={input} onChange={handleInputChange} />
            <button type='button' onClick={uploadBtn}>Upload</button>

            <br />
            <br />

            {names.map((name, user) => {
                return <p key={user}>{name}</p>
            })}
        </div>
    );
}

export default UseState02;