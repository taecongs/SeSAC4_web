import React, {useState} from 'react';


const Practice_2 = () => {
    const [num, setNum] = useState(0);

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreaseNum = () => {
        setNum(num - 2);
    }

    return(
        <div>
            <h1>useState 복습</h1>

            <p>{num}</p>

            <button onClick={increaseNum}>+1</button>

            <button onClick={decreaseNum}>-2</button>
        </div>
    );
}

export default Practice_2;