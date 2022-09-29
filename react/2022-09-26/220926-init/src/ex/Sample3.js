import React, { useState } from 'react';

const Sample3 = () => {
    const [names, setNames] = useState([
        { id: 1, text: '청바지' },
        { id: 2, text: '패딩' },
        { id: 3, text: '반팔' },
        { id: 4, text: '운동화' }
    ]);

    // 새로운 항목을 추가할 때 사용할 input
    const [inputText, setInputText] = useState('');

    //새로운 항목을 추가할 때 사용할 id
    const [nextId, setNextId] = useState(5); 



    const onChange = (e) => setInputText(e.target.value);


    const onClick = () => {

        // concat : 새로운 항목을 추가한 배열을 만든다. 
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        // Nextid : 버튼 클릭 시 1씩 증가한다. (새로운 항목이 추가 되기 때문) 
        setNextId(nextId + 1);

        // setNames : 추가 된 배열을 보일 수 있게 업데이트 한다.
        setNames(nextNames);
        setInputText('');
    }


    // onRemove : filter 함수를 사용하여 해당 id를 없앤다.
    const onRemove = id => {
        //name.id 가 id 인 것을 제거 한다.
        const nextNames = names.filter(name => name.id !== id);

        // setNames를 통해 상태를 업데이트 한다.
        setNames(nextNames);
    }



    // onDoubleClick : html 요소를 더블클릭 할 때 사용하는 이벤트
    // <li> 태그에 onDoubleClick 이벤트를 등록한다.
    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    
    return (
        <div>
            <h1>컴포넌트 응용 - 044 ~ 048</h1>

            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>

            <ul>
                {namesList}
            </ul>
        </div>
    );
};

export default Sample3;