import React, {useState} from 'react';


function Test2(){
    const [num, setNum] = useState(0);

    function increaseNum(){
        setNum(num + 1); 
    }

    function decreaseNum(){
        setNum(num - 2);
    }

    return(
        <div>
            <h1>state, useState 실습2</h1>
            <p>{num}</p>

            <button onClick={increaseNum} style={{marginRight : '10px'}}>+1</button>

            <button onClick={decreaseNum}>-2</button>
        </div>
    );
}

export default Test2;