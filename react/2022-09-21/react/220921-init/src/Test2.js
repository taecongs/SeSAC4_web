import React, {Component} from 'react';
import './Test2.css';
import addImg from './image/char.png';


class Test2 extends Component{
    render(){
        return(
            <div className = 'my_style2'>
                <h2>안녕하세요</h2>
                <img className='my_img' src={addImg}/>
            </div>
        );
    }
}


export default Test2;