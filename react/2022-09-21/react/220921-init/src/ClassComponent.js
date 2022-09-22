import React, { Component } from 'react';

import PropTypes from 'prop-types';


// 클래스형 컴포넌트
// extends Component 기능을 사용하겠다 정의
class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </div>
        );
    }

    // 기본값 지정하는 방법
    static defaultProps = {
        name: '기본이름',
        location: '기본위치'
    }

    // 클래스형에서 타입 지정하는 방법
    static propTypes = {
        name: PropTypes.string
    }
}


// 함수형 컴포넌트
// props.name, props.location 부모(index.js)가 준 값은 변경 불가능 그냥 써야한다.
// function ClassComponent(props){
//     return(
//         <div>
//             {props.children}
//             <h2>ClassComponent - Function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     );
// }

// 기본값 지정하는 방법
ClassComponent.defaultProps = {
    name: '기본이름',
    location: '기본위치'
}

// 타입 지정하는 방법
ClassComponent.propTypes = {
    name: PropTypes.string
}

// ClassComponent를 내보낸다.
export default ClassComponent;