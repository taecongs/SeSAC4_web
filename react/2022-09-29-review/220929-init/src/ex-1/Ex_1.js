import React, {useState} from 'react';


const Ex_1 = () => {
    const [name, setName] = useState([
        {user : '코디', email : 'codi@gmail.com'},
        {user : '윤소희', email : 'yoonsohee@gamil.com'}
    ]);

    const [newUser, setInputUser] = useState('');
    const [newEmail, setInputEmail] = useState('');

    
    const onChange1 = (e) => {
        setInputUser(e.target.value);
    }

    const onChange2 = (e) => {
        setInputEmail(e.target.value);
    }

    const clickBtn = () => {
        const addUser = name.concat({
            user : newUser,
            email : newEmail
        });

        setName(addUser);
        setInputUser('');
        setInputEmail('');
    }


    const enterBtn = (e) => {
        if(e.key === 'Enter'){
            clickBtn();
        }
    }

    const onRemove = user => {
        const addUser = name.filter(num => num.user !== user);

        setName(addUser);
    }

    

    const userList = name.map(num => <h1 key={num.user} onDoubleClick={() => onRemove(num.user)}>{num.user} : {num.email}</h1>);

    return(
        <div>
            <div>
                <input type='text' name='user' placeholder='이름' value={newUser} onChange={onChange1} />
                <input type='text' name='email' placeholder='이메일' value={newEmail} onChange={onChange2} onKeyPress={enterBtn}  />
                <button type='button' onClick={clickBtn}>등록</button>
            </div>

            <div>
                {userList}
            </div>
        </div>
    );
}

export default Ex_1;