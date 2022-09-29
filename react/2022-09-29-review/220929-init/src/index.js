import React from 'react';
import ReactDOM from 'react-dom/client';

// import Ex_1 from './ex-1/Ex_1';
import Ex_2 from './ex-2/Ex_2';


import Ref from './ex-3/Ref';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ex_1 /> */}


    <Ex_2 />


    <Ref />
    <Ref />
  </React.StrictMode>
);


