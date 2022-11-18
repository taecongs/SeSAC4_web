import React, {useState} from 'react';



function useState01(){
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;

        if(time >= 12){
            newTime = 1;
        } else{
            newTime = time + 1;
        }

        setTime(newTime);
    };

    console.log('업데이트');

    return(
        <div>
            <span>현재 시간 : {time}시</span>
            <button type='button' onClick={handleClick}>Update</button>
        </div>
    );
}

export default useState01;