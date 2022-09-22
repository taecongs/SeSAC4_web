// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './Test4.css';
import bookImg from './image/book.jpg';



// class Test4 extends Component{
//     render(){
//         return(
//             <div className='best_box'>
//                 <h1 className='h1_text'>이번주 베스트셀러</h1>
//                 <img className='b_img' src={bookImg}/>
//                 <div className='text_box'>
//                 <h2 className='text_h2'>나의 하루는 4시 40분에 시작된다.</h2>
//                 <h5>저자 : {this.props.name}</h5>
//                 <h5>판매가 : {this.props.price}</h5>
//                 <h5>구분 : {this.props.list}</h5>
//                 </div>
//             </div>
//         );
//     }
// }


function Test4(props){
    return(
        <div className='best_box'>
        <h1 className='h1_text'>이번주 베스트셀러</h1>
        <img className='b_img' src={bookImg}/>
        <div className='text_box'>
        <h2 className='text_h2'>나의 하루는 4시 40분에 시작된다.</h2>
        <h5>저자 : {props.name}</h5>
        <h5>판매가 : {props.price}</h5>
        <h5>구분 : {props.list}</h5>
        </div>
    </div>        
    );
}

export default Test4;