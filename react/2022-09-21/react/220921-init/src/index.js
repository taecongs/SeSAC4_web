import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

// ClassComponent.js 불러오기
import ClassComponent  from './ClassComponent';


// Test1.js 불러오기
import Test1 from './Test1';

// Test2.js 불러오기
import Test2 from './Test2';


// Test3.js 불러오기
import Test3 from './Test3';


// Test4.js 불러오기
import Test4 from './Test4';


// Test5.js 불러오기
import Test5 from './Test5';


// App.js 불러오기
import App from './App';


// import reportWebVitals from './reportWebVitals';



// name : PropTypes.string으로 타입을 지정했다면? 
// name = {1} 숫자를 사용할 때는 감싸줘야 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Test1 name = 'Bang' />
    <Test2 />
    <Test3 food = '스테이크' />
    <Test4 name = '김유진' price ='13,500원' list ='자기계발서' />
    <Test5 />

    {/* <ClassComponent name = {1} location='문래' /> */}
    {/* <ClassComponent name = {1} location='문래'>문자</ClassComponent> */}

    <App />
  </>
);



























// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 성능 측정
// reportWebVitals();
