import React, {Component} from 'react';

import '../Practice-2/ScrollBox.css';


class ScrollBox extends Component{
    clickDown = () => {
        console.log('스크롤 전체 길이 : ', this.div.scrollHeight);
        console.log('현재 보이는 길이 : ', this.div.clientHeight);

        // this.div.scrollTop = this.div.scrollHeight;

        this.div.scrollTop === 0 ? this.div.scrollTop = this.div.scrollHeight : this.div.scrollTop = 0;

    }


    clickUp = () => {
        this.div.scrollTop = 0;
    }



    render(){
        return(
            <div>
                <h1>실습 58. ref 실습</h1>


                <div className='div1' ref={(ref) => {this.div = ref}}>
                    <div className='div2'></div>
                </div>

                <button type='button' onClick={this.clickDown}>맨 밑으로</button>
                <button type='button' onClick={this.clickUp}>맨 위로</button>
            </div>
        );
    }
}

export default ScrollBox;