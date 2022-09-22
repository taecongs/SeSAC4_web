// App.css를 연결한다.
import './App.css';

// ClassCompoent 컴포넌트를 불러온다.
import ClassComponent from './ClassComponent'

// img를 불러온다.
// import dogImg from './image/dog.jpg';

function App() {
  // let $name = '마루';
  // let $animal = '강아지';

  // let $a = 88;
  // let $b = 33;


  // JSX 실습 
  // return (
  //   <div className="App_1">
  //       <div className='first_box'>
  //           이것은 div 입니다.
  //           <h3>이것은 div 안에 있는 h3태그 입니다.</h3>
  //       </div>
  
  //       <div className='second_box'>
  //           <h3>제 반려 동물의 이름은 <u>{$name}</u>입니다.</h3>
  //           <h3><u>{$name}</u>는 <u>{$animal}</u>입니다.</h3>
  //           <img className='dog_img' src={dogImg} alt='dog' />
  //       </div>
  
  //       <div className='thrid_box'>
  //           {3 + 5 == 8 ? <h2>정답입니다.</h2> : <h2>오답입니다.</h2>}
  //       </div>
  
  //       <div className='four_box'>
  //           {$a > $b && <h2>a가 b보다 크다</h2>}
  //       </div>
  
  //       <div className='five_box'>
  //           <h1>Hello World</h1>
  //       </div>
  
  //       <div className='five_box2'>
  //           아이디 : <input type='text' /><br/><br/>
  //           비밀번호 : <input type='password' />
  //       </div>

  //       <div className='six_box'>
  //         <div className='red'></div>
  //         <div className='orange'></div>
  //         <div className='yellow'></div>
  //         <div className='green'></div>
  //         <div className='blue'></div>
  //         <div className='navy'></div>
  //         <div className='purple'></div>
  //       </div>
  //   </div>
  // );


  // 생성한 컴포넌트를 App.js 컴포넌트에서 호출해보기
  return(
    <div>
      <ClassComponent name='Bang' />
      <ClassComponent>Children으로 추가한 텍스트</ClassComponent>
    </div>
  )

}

export default App;
