// 함수형 컴포넌트 사용 할 때 필요하다.
// import React from 'react';


// 클래스형 컴포넌트를 정의 할 때 필요하다.
import React, {Component} from 'react';




// 함수형 컴포넌트
// const ClassComponent = () => {
//     return(
//         <div>
//             <h1>나의 새롭고 멋진 컴포넌트</h1>
//         </div>
//     );
// }



// 클래스형 컴포넌트
class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>나의 새롭고 멋진 컴포넌트2</h1>
                <h5>나의 이름은 {this.props.name}이다!</h5>
                <h5>작성한 Children : {this.props.children}</h5>
            </div>
        );
    } 
}

ClassComponent.defaultProps = {
    name : '기본값'
}

export default ClassComponent;