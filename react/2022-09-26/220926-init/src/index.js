import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';


import Sample1 from './ex/Sample1';
import Sample2 from './ex/Sample2';
import Sample3 from './ex/Sample3';


import Event_ex1 from './practice1/Event_ex1';
import Event_ex2 from './practice1/Event_ex2';

import Event_ex3 from './practice2/Event_ex3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <Sample1 />
    <Sample2 />
    <Sample3 />

    <Event_ex1 />
    <Event_ex2 />

    <Event_ex3 />
  </React.StrictMode>
);
