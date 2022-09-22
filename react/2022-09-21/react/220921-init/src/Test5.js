import React, {Component} from 'react';
// import './Test5.css';

import App2 from './App2';


function functionvalid(){
    console.log("콘솔 띄우기 성공!");
}

// console.log( functionvalid );


// 클래스 방식
class Test5 extends Component{
    render(){
        return(
            <div>
                <App2 text='App 컴포넌트에서 넘겨준 text props 입니다.' vaild={functionvalid} />
            </div>
        );
    }
}


// function Test5(props) {
//     return( 
//         <div>
//             <App2 text='App 컴포넌트에서 넘겨준 text props 입니다.' vaild={functionvalid} />
//             <button onClick={functionvalid}>sdsd</button>

//         </div>
//     );
// }

export default Test5;