import React, {Component} from 'react';

import './Test2.css';
import backImg from './image/back_img.jpg';

class Test2 extends Component{
    render(){
        return(
            <div className='my_style_two'>
                <h2>안녕하세요</h2>
                <img src={backImg} alt='배경이미지'/>
            </div>
        );
    }
}


export default Test2;