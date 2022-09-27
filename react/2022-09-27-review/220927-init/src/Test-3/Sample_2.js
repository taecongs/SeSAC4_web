import React, {useState} from 'react';

const Sample2 = () => {
    const [names, setNames] = useState([
        {id : 1, text : '운동화'},
        {id : 2, text : '반팔'},
        {id : 3, text : '패딩'},
        {id : 4, text : '청바지'},
    ]);

    const [userText, setText] = useState('');
    const [userId, setId] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id : userId,
            text : userText
        });

        setId(userId + 1);
        setNames(nextNames);
        setText('');
    }


    const namesList = names.map(name => <li key={name.id}>{name.text}</li>)


    return(
        <div>
            <h1>map() 복습2</h1>

            <input type='text' placeholder='추가' value={userText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>

            <ul>
                {namesList}
            </ul>
        </div>
    );
}

export default Sample2;