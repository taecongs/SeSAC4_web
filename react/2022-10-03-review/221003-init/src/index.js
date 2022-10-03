import React from 'react';
import ReactDOM from 'react-dom/client';

import HookEffect from './01.Hook/HookEffect';
import HookReducer from './01.Hook/HookReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookEffect />
    <HookReducer />
  </React.StrictMode>
);

