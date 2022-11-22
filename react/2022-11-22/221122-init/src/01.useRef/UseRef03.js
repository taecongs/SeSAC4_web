import React, {useState, useRef, useEffect} from 'react';


// 변화는 감지하지만 그 변화가 렌더링을 발생시키지 않을 때 사용하는 것이 좋다!
const UseRef03 = () => {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수 : ', renderCount.current);
    })

    return(
        <div>
            <p>Count : {count}</p>

            <button onClick={() => {setCount(count + 1)} }>Count 올려!</button>
        </div>
    );
}

export default UseRef03;