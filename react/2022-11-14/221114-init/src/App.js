import './App.css';
import {useSelector} from 'react-redux';


// Redux를 사용하는 이유는?
// 모든 컴포넌트가 props 없이 state를 직접 꺼내서 사용 할 수 있다. 

function App() {
  // 컴포넌트에서 store에 있던 state 쓰려면?
  const 꺼내온거 = useSelector((state) => state);

  return (
    <div className='app'>
      <p>님의 처참한 몸무게 : {꺼내온거}</p>
    </div>
  );
}

export default App;
