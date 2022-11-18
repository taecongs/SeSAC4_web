import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import UseState01 from './01.useState/UseState01';
import UseState02 from './01.useState/UseState02';

import UseEffect01 from './02.useEffect/UseEffect01';
import UseEffect02 from './02.useEffect/UseEffect02';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <UseState01 /> */}
    {/* <UseState02 /> */}

    {/* <UseEffect01 /> */}
    <UseEffect02 />
  </>
);


