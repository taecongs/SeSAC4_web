// import React, {Component} from 'react';

import React from 'react';

import './Test3.css';


import bookImg from './image/book.jpg';


// (1)번 실습
// class Test3 extends Component{
//     render(){
//         return(
//             <div className='container'>
//                 <div className='one_box'>
//                     <h5>제가 가장 좋아하는 음식은 <span className='food_txt'>{this.props.food}</span> 입니다.</h5>
//                     <h5>제가 가장 싫어하는 음식은 <span className='food_txt'>{this.props.food2}</span> 입니다.</h5>
//                 </div>
//             </div>
//         );
//     }
// }



function Test3(props){
    return(
        <div className='container'>
            <div className='two_box'>
                <h1>이번주 베스트셀러</h1>
                <img className='book_img' src={bookImg} alt='책'/>
                <h3>어몽어스 우주의 배신자</h3>
                <div className='detail'>
                    <h3>저자 : {props.title}</h3>
                    <h3>판매가 : {props.price}</h3>
                    <h3>구분 : {props.order}</h3>
                </div>
            </div>
        </div>
    );
}


Test3.defaultProps = {
    food2 : '기본값'
}


export default Test3;