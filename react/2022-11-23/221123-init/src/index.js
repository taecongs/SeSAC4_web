import React from 'react';
import ReactDOM from 'react-dom/client';

// import UseContext01 from './02.useContext/UseContext01';

import UseMemo01 from './03.useMemo/UseMemo01';
import UseMemo02 from './03.useMemo/UseMemo02';
import UseMemo03 from './03.useMemo/UseMemo03';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <UseContext01 /> */}
    {/* <UseMemo01 /> */}
    {/* <UseMemo02 /> */}
    <UseMemo03 />
  </>
);