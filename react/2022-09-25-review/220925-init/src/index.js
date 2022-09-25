import React from 'react';
import ReactDOM from 'react-dom/client';

// StateClass 컴포넌트를 불러온다,
import StateClass from './StateClass';

import StateClass2 from './StateClass2';

import StateFunction from './StateFunction';


import Test1 from './practice1/Test1';
import Test2 from './practice1/Test2';


import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';

import Test3 from './practice2/Test3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass />
    <StateClass2 />
    <StateFunction />

    <Test1 />
    <Test2 />

    <Event1 />
    <Event2 />
    <Event3 />
    <Event4 />

    <Test3 />
  </React.StrictMode>
);

