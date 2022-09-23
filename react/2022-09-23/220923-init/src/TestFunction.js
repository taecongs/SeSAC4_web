import React, {useState} from 'react';

function TestFunction(){


    let [$num, setNum1] = useState(0);

    function Increase(){
        setNum1($num + 1);
    }

    function Decrease(){
        setNum1($num - 2);
    }

    return(
        <div>
            <h1>두번째 실습(함수형)</h1>
            <div>{$num}</div>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-2</button>
        </div>
    );
}


export default TestFunction;