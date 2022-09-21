import './App2.css';
import PropTypes from 'prop-types';



function App2(props){
    console.log( props );
    // console.log( props.valid );
    return(
        <div>
            <h1>{props.text}</h1>
            
            <button type="button" onClick={props.vaild}>콘솔메시지</button>
        </div>
    );
}


App2.defaultProps = {
    text : '이건 기본 text props입니다.'
}

// text에 문자를 필수 props로 지정해주세요
App2.propTypes = {
    text : PropTypes.string.isRequired
}


export default App2;