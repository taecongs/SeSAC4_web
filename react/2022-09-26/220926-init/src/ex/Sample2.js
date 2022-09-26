import React, {useState} from 'react';


const Sample2 = () => {
    const [names, setNames] = useState([
        // 객체 형태로 이루어진 배열 생성(고유 id 값, 문자열로 구성) 
        {id : 1, text : '청바지'},
        {id : 2, text : '패딩'},
        {id : 3, text : '반팔'},
        {id : 4, text : '운동화'},
    ]);


    // 텍스트를 입력할 수 있는 input 상태
    const [inputText, setInputText] = useState('');

    // 새로운 항목을 추가할 때 사용할 id
    const [nextId, setNextId] = useState(5);


    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {

        // concat : 새로운 항목을 추가한 배열을 만든다.
        // setNames : 추가 된 배열 보일 수 있게 업데이트 한다. 
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });

        // Nextid : 버튼 클릭 시 1씩 증가한다. (새로운 항목이 추가 되기 때문) 
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    // 이전에 사용한 index 대신 키 값으로 name.id 지정
    const namesList = names.map(name => <li key={name.id}>{name.text}</li>)

    return(
        <div>
            <h1>컴포넌트 응용 - 029 ~ 038</h1>

            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>

            <ul>
                {namesList}
            </ul>
        </div>
    );
}


export default Sample2;