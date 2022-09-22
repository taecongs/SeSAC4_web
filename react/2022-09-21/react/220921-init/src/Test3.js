import React, {Component} from 'react';
import './Test3.css';
import PropTypes from 'prop-types';

class Test3 extends Component{
    render(){
        return(
            <div className='food_box'>
                내가 좋아하는 음식은 <span className='food_red'>{this.props.food}</span>입니다.
            </div>
        );
    }

    static defaultProps = {
        food : '기본값'
    }

    static propTypes = {
        food : PropTypes.string
    }
}



export default Test3;