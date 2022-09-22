// React를 불러온다.
import React from 'react';

// 화면에 출력하기 위해 정의한다.
import ReactDOM from 'react-dom/client';


// App.js 컴포넌트를 불러온다.
import App from './App';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



