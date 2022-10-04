import React from 'react';
import ReactDOM from 'react-dom/client';

import HookEffect from './01.Hook/HookEffect';
import HookReducer from './01.Hook/HookReducer';
import HookMemo from './01.Hook/HookMemo';
import HookCallbackRef from './01.Hook/HookCallbackRef';


import Practice1 from './02.Sass/Practice1';

import Map1 from './03.Map&Filter/Map1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookEffect />
    <HookReducer />
    <HookMemo />
    <HookCallbackRef />

    <br />
    <br />

    <Practice1 />

    <br />
    <br />

    <Map1 />
  </React.StrictMode>
);

