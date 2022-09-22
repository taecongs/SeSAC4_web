// React를 불러온다.
import React from 'react';

// 화면에 출력하기 위해 정의한다.
import ReactDOM from 'react-dom/client';


// App.js 컴포넌트를 불러온다.
import App from './App';


// Test1.js 컴포넌트를 불러온다.
import Test1 from './Test1';


// Test2.js 컴포넌트를 불러온다.
import Test2 from './Test2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />


    <Test1 />
    <Test2 />
  </React.StrictMode>
);



