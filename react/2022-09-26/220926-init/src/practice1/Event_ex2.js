import React, {useState} from 'react';

const Event_ex2 = () => {
    const [names, setNames] = useState([
        {user : '코디2', email : 'codi@gmail.com'},
        {user : '윤소희2', email : 'yoonsohee@gmail.com'},
    ]);

    // 새로운 항목을 추가 할 때 사용한다.
    const [nextUser, setInputUser] = useState('');
    const [nextEmail, setInputEmail] = useState('');

    
    // input에 입력 한 값이 작성
    const onChange1 = (e) => setInputUser(e.target.value);
    const onChange2 = (e) => setInputEmail(e.target.value);


    // concat : 새로운 항목을 추가한 배열을 만든다.
    const addBtn = () => {
        const nextNames = names.concat({
            user : nextUser,
            email : nextEmail
        });

        // 추가 된 배열을 보일 수 있게 업데이트 한다.
        setNames(nextNames);

        //등록 버튼을 누르면 input 값을 비운다.
        setInputUser('');
        setInputEmail('');
    }


    // 두 번째 input에서 Enter를 눌렀을 대 아래에 정보가 추가되도록 하기
    const onKeyPress = (e) => {
        console.log(e);
        if(e.key === 'Enter'){
            addBtn();
        }
    };


    // 정보를 더블 클릭 했을 때 해당 정보가 삭제되도록 하기
    const onRemove = user => {
        const nextNames = names.filter(name => name.user !== user);

        setNames(nextNames);
    }



    const userList = names.map(list => <h1 key={list.user} onDoubleClick={() => onRemove(list.user)}>{list.user} : {list.email}</h1>);

    return(
        <div>
            <h1 style={{background : 'lightblue', padding : '5px', marginTop : '5%'}}>컴포넌트 응용 실습 - 02</h1>

            <input type='text' placeholder='이름' value={nextUser} onChange={onChange1}></input>
            <input type='text' placeholder='이메일' value={nextEmail} onChange={onChange2} onKeyPress={onKeyPress} />

            <button onClick={addBtn}>등록</button>

            <div>
                {userList}
            </div>
        </div>
    );
}

export default Event_ex2;