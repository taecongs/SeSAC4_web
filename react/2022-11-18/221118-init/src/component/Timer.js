import React, {useEffect} from 'react';

const Timer = (props) => {

    // 타이머 컴포넌트가 맨 처음 브라우저에 렌더링 되었을 때 실행 되는 것이다. 
    // const timer = setInterval(() =>{}, 1000)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중');
        }, 1000);

        // 타이머 컴포넌트가 화면에서 사라질 때 실행한다.
        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        }
    }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;