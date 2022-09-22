import React from 'react';
import Test4 from './Test4';

	
const App2 = () => {
    const valid = function viewConsoleLog(){
        console.log('콘솔 띄우기 성공!');
    }
    
    return (
        <div>
            <Test4 text="App 컴포넌트에서 넘겨준 text props입니다." valid={valid} />
        </div>
    );
};
    
export default App2;