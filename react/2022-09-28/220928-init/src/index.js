import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import Extends_1 from './Practice-1/Extends_1';

import Ref from './Ref';

import ScrollBox from './Practice-2/ScrollBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <Extends_1 />

    <Ref />
    <Ref />

    <ScrollBox />
  </React.StrictMode>
);


