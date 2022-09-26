import React, { useState } from 'react';

import '../practice2/Event_ex4.css';



const Event_ex3 = () => {
    const [user, setUser] = useState([
    
    ]);



    const [nextId, setNextId] = useState(1);
    const [nextUser, setNextUser] = useState('');
    const [nextTitle, setNextTitle] = useState('');


    const onChange1 = (e) => setNextUser(e.target.value);
    const onChange2 = (e) => setNextTitle(e.target.value);


    const addWrite = () => {
        const nextMember = user.concat({
            id    : nextId,
            user  : nextUser,
            title : nextTitle
        });

        setNextId(nextId + 1);

        setUser(nextMember);

        setNextTitle('');
        setNextUser('');
    }


    const memberList = user.map(list => 
        <tr key={list.id}>
            <td>{list.id}</td>
            <td>{list.user}</td> 
            <td>{list.title}</td>
        </tr>
    );


    return (
        <div>
            <h1 style={{ background: 'lightyellow', padding: '5px', marginTop: '5%' }}>실습 59. React 실습</h1>


            <div className='first_box'>
                작성자 : <input className='one_ip' type='text' value={nextUser} onChange={onChange1} />
                제목   : <input className='two_ip' type='text' value={nextTitle} onChange={onChange2} />

                <button onClick={addWrite}>작성</button>
            </div>

            <div className='second_box'>
                <select>
                    <option>작성자</option>
                </select>

                <input className='three_ip' type='text' />

                <button className='search_btn'>검색</button>
                <button className='all_btn'>전체</button>
            </div>

            <div className='third_box'>
                <table className='table_row'>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                    </tr>

                    {memberList}
                </table>
            </div>
        </div>
    );
}

export default Event_ex3;