import React, { useState } from 'react';

import '../practice2/Event_ex3.css';



const Event_ex3 = () => {
    const [user, setUser] = useState([]);

    // 검색 결과 관련
    // const [result, setResult] = useState([]);



    const addWrite = () => {
        let form = document.querySelector('#form_write');
        let newList = {
            writer : form.writer.value,
            title  : form.title.value
        };

        // user = [{writer : ~~, title : ~~}, {writer : ~~, title : ~~}]
        setUser([...user, newList]);

        form.reset();

    }




    return (
        <div>
            <h1 style={{ background: 'lightyellow', padding: '5px', marginTop: '5%' }}>실습 59. React 실습(선생 버전)</h1>


            <div className='first_box'>
                <form id='form_write'>
                    작성자 : <input className='one_ip' type='text' name='writer' />
                    제목   : <input className='two_ip' type='text' name='title' />

                    <button type='button' onClick={addWrite}>작성</button>
                </form>
            </div>



            <div className='second_box'>
                <select name='type'>
                    <option value='writer'>작성자</option>
                    <option value='title'>제목</option>
                </select>

                <input className='three_ip' type='text' name='search' placeholder='검색어' />

                <button type='button' className='search_btn'>검색</button>
                <button className='all_btn'>전체</button>
                <h4>검색 결과</h4>
            </div>



            <div className='third_box'>
                <table className='table_row'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((value, i) => {
                            return(
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Event_ex3;