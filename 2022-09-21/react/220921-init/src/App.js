// import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  const flag = true;
  let name = '';

  if(flag){
    name = 'SeSAC';
  } else{
    name = '문래';
  }

  let $name = '마루';
  let $animal = '강아지';


  let $num = 3 + 5 == 8;

  let $a = 53;
  let $b = 33;

  // const style = {
  //   backgroundColor : 'yellowgreen',
  //   color : '#fff',
  //   padding : '10px 10px'
  // };

  
  return (
    /* style={style} 로 작성 가능 */
    <div className='test' style={{
      backgroundColor : 'yellowgreen',
      color : '#fff',
      padding : '10px 10px'
      }}>

      {name}
      {flag ? (<h1>True</h1>) : <h2>False</h2>}
      {/* && 사용시 참만 작성해도 된다. */}
      {/* {flag && (<h1>True</h1>)} */}

      <Test />

      <h3>제 반려 동물의 이름은 {$name}입니다.</h3>
      <h3>{$name}은 {$animal}입니다.</h3>

      {$num ? <h2>정답입니다!</h2> : <h2>오답입니다.</h2>}

      {$a > $b && (<h1>a가 b보다 큽니다.</h1>)}
    </div>
  );



  // return(
  //   <div className='test2'>
  //     <h1 className='input'>Hello World</h1><br/>

  //     아이디 : <input type= 'text'></input><br/><br/>
  //     비밀번호 : <input type= 'password'></input>
  //   </div>
  // );


    // return(
    //   <div className='container'>
    //     <div className='red'></div>
    //     <div className='orange'></div>
    //     <div className='yellow'></div>
    //     <div className='green'></div>
    //     <div className='blue'></div>
    //     <div className='navy'></div>
    //     <div className='purple'></div>
    //   </div>
    // );

}

export default App;
