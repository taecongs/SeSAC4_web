import React, {useState, useEffect} from 'react';
import Timer from '../component/Timer';


const UseEffect02 = () => {
    const [showTimer, setShowTimer] = useState(false);

    return(
        <div>
            {/* false && <Timer /> */}
            {showTimer && <Timer />}
            <button type='button' onClick={() => {
                setShowTimer(!showTimer)
            }}>Toggle Timer</button>
        </div>
    );
}

export default UseEffect02;