import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Practice_1 from './Test-1/Practice_1';
import Practice_2 from './Test-1/Practice_2';


import Event_1 from './Test-2/Event_1';
import Event_2 from './Test-2/Event_2';
import Handler_ex from './Test-2/Handler_ex';


import Sample_1 from './Test-3/Sample_1';
import Sample_2 from './Test-3/Sample_2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice_1 />
    <Practice_2 />

    <Event_1 />
    <Event_2 />
    <Handler_ex />

    <Sample_1 />
    <Sample_2 />
  </React.StrictMode>
);


