import React from 'react';
import ReactDOM from 'react-dom/client';

// Hook
import HookEffect_1 from './1_Hook/HookEffect_1';
import HookReducer_1  from './1_Hook/HookReducer_1';
import HookMemo_1 from './1_Hook/HookMemo_1';


// Sass
import Origin_4 from './2_Sass/Origin_4';
import UseSass_5 from './2_Sass/UseSass_5';
import CssModule_6 from './2_Sass/CssModule_6';
import StyleComponent_7 from './2_Sass/StyleComponent_7';



// 실습
import Practice_1 from './3_practice/Practice_1';
import Practice_2 from './3_practice/Practice_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HookEffect_1 />

    <br/>

    <HookReducer_1 />

    <br/>
    
    <HookMemo_1 />

    <br/>

    <Origin_4 />

    <br/>

    <UseSass_5 />

    <br/>

    <CssModule_6 />

    <br/>

    <StyleComponent_7 />

    <br/>

    <Practice_1 />

    <br/>

    <Practice_2 />
  </React.StrictMode>
);

