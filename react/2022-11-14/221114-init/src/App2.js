import './App.css';
import { useSelector, useDispatch} from 'react-redux';

function App2() {
    const weight2 = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className='app'>
            <p>님의 몸무게는? : {weight2}</p>
            <button onClick={() => { dispatch({type : '증가'}) }}>더하기</button>
            <button onClick={() => { dispatch({type : '감소'}) }}>감소</button>
        </div>
    );
}

export default App2;
