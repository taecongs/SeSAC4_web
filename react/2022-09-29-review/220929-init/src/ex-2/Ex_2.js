import React, {useState} from 'react';

import '../ex-2/Ex_2.css'

const Ex_2 = () => {
    // 번호 : 1  제목 : ~~~  작성자 : ~~~ 담기는 배열
    const [list, setList] = useState([]);

    const [num, setNum] = useState(1);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');



    // 검색한 결과를 답고 있는 배열
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');


    
    const change1 = (e) => setTitle(e.target.value);
    const change2 = (e) => setUser(e.target.value);
    const change3 = (e) => setSearch(e.target.value);



    const writeBtn = () => {
        const newMember = list.concat({
            id : num,
            title : title,
            user : user
        });

        // 새로 추가 될 때마다 번호 + 1
        setNum(num + 1);

        // list(초기값)의 변경된 값이 들어가는 setList에 담는다.
        setList(newMember);

        // 초기화
        setTitle('');
        setUser('');
    }


    const enterBtn = (e) => {
        if(e.key === 'Enter'){
            writeBtn();
        }
    }


    // 검색 버튼 클릭 시 작동
    const searchBtn = () => {
        const newResult = list.filter((value) => {
            return value.user.includes(search)
        });

        setResult(newResult);
        setSearch('');
    }



    // 입력한 데이터가 담기는 테이블
    const newList = list.map(count => 
        <tr key={count.id}>
            <td>{count.id}</td>
            <td>{count.title}</td>
            <td>{count.user}</td>
        </tr>
    );


    // 검색 결과 테이블에 담길 데이터
    const shList = result.map((count2) => 
        <tr key={count2.id}>
            <td>{count2.id}</td>
            <td>{count2.title}</td>
            <td>{count2.user}</td>
        </tr>    
    );




    return(
        <div className='container'>
            <h1>실습</h1>
            <div className='first_box'>
                제목 : <input className='input_2' type='text' name='title' value={title} onChange={change1}  />
                작성자 : <input className='input_1' type='text' name='user' value={user} onChange={change2} onKeyPress={enterBtn} />

                <button type='button' onClick={writeBtn}>작성</button>
            </div>


            {/* 검색 */}
            <div className='second_box'>
                <select>
                    <option value='title'>제목</option>
                    <option value='user'>작성자</option>
                </select>
    
                <input className='input_3' type='text' name='search' placeholder='검색어 입력' value={search} onChange={change3} />
                <button type='button' onClick={searchBtn}>검색</button>
            </div>


            {/* 테이블  */}
            <div className='third_box'>
                <table className='table_row'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>

                    <tbody>
                        {newList}
                    </tbody>
                </table>
            </div>  

            
            {/* 검색 결과에 따른 테이블 */}
            <div className='third_box'>
            {
                    // 검색한 text가 배열에 있다면 값이 있기 때문에 0보다 크다. 
                    // true 라면? 일치하는 값을 테이블에 출력 
                    // false 라면? 검색 결과가 없습니다. 출력
                    result.length > 0 ? (
                <div>
                    <h4>검색 결과</h4>
                    <table className='table_row'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>

                    <tbody>
                        {shList}
                    </tbody>
                </table>
                </div>
                    ) : (
                        <div>
                            <h4>검색 결과가 없습니다.</h4>
                        </div>
                    )}            
            </div>
        </div>
    );
}

export default Ex_2;