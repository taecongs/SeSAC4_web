import React from 'react';
import ReactDOM from 'react-dom/client';


// StateClass.js 컴포넌트를 불러온다.
import StateClass from './StateClass';


import StateFunction from './StateFunction';


// 실습
import TestClass from './TestClass';
import TestFunction from './TestFunction';


import StudyEvent1 from './StudyEvent1';
import StudyEvent2 from './StudyEvent2';

//
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';


import Handler_ex from './ex/Handler_ex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateClass />
    <StateFunction />

    {/* <TestClass /> */}
    {/* <TestFunction /> */}


    {/* <StudyEvent1 /> */}
    {/* <StudyEvent2 /> */}


    {/* <Event1 /> */}
    {/* <Event2 /> */}
    {/* <Event3 /> */}
    {/* <Event4 /> */}


    <Handler_ex />
  </>
);
