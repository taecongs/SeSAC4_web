// 클래스형 컴포넌트를 정의 할 때 필요하다.
import React, {Component} from 'react';

// Test1.css를 연결한다.
import './Test1.css';


// 클래스형 컴포넌트
class Test1 extends Component{
    render(){
        let $name = 'Bang';

        return(
            <div className='my_style'>
                <h3>My name is {$name}!</h3>
            </div>
        );
    }
}

// 클래스형 컴포넌트(style 내부에 정의하기)
// class Test1 extends Component{
//     render(){
//         let $name = 'Bang';
//         let my_style = {
//             backgroundColor : 'lightblue',
//             color : 'orange',
//             fontSize : '40px',
//             padding : 12
//         }

//         return(
//             <div style={my_style}>
//                 <h3>My name is {$name}!</h3>
//             </div>
//         );
//     }
// }


export default Test1;