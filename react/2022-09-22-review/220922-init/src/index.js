// React를 불러온다.
import React from 'react';

// 화면에 출력하기 위해 정의한다.
import ReactDOM from 'react-dom/client';


// App.js 컴포넌트를 불러온다.
// import App from './App';


// Test1.js 컴포넌트를 불러온다.
// import Test1 from './Test1';


// Test2.js 컴포넌트를 불러온다.
// import Test2 from './Test2';


// Test3.js 컴포넌트를 불러온다.
// import Test3 from './Test3';



// Test4.js 컴포넌트를 불러온다.
// import Test4 from './Test4';
import App2 from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test1 /> */}
    {/* <Test2 /> */}
    {/* <Test3 food ='스테이크' /> */}
    {/* <Test3 title='김유진' price='13,500원' order='자기계발서' /> */}
    {/* <App2 /> */}
    {/* <Test4 /> */}
    <App2 />
  </React.StrictMode>
);



