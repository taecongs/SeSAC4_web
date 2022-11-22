import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  // 어떤 state 값을 사용하고 싶은지 정의  ((기존값) => 변경될 값)
  const number = useSelector((num) => num);
  const dispatch = useDispatch();;

  return (
    <div className="App1">

      <div className='a_1'>
        <h1>App1</h1>
        <p>{number.leftNum}</p>

        <input type='button' value='더하기' onClick={() => { dispatch({ type: '더하기', mode: 'left' }) }}></input>
        <input type='button' value='빼기' onClick={() => { dispatch({ type: '빼기', mode: 'left' }) }}></input>
      </div>

    </div>
  );
}

export default App;
