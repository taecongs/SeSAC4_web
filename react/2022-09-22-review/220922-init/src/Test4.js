import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Test4 extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.text}</h2><br/>
                <button onClick={this.props.valid}>콘솔메시지</button>
            </div>
        );
    }
}

Test4.defaultProps = {
    text : '이건 기본 text props입니다.'
};

Test4.propTypes = {
    text : PropTypes.string.isRequired
}


export default Test4;