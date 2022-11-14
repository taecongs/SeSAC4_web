import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import App2 from './App2';

import { Provider } from 'react-redux';
import { createStore } from 'redux';




// state 보관
const weight = 100;
const weight2 = 100;




// 예제 1 -> App.js
// function reducer(state = weight, action) {
//   return state
// }


// 예제 2 -> App2.js
function reducer(state = weight2, action){
  if(action.type === '증가'){
    state++;
    return state;
  } else if(action.type === '감소'){
    state--;
    return state;
  } else{
    return state;
  }
}


let store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      {/* <App /> */}
      <App2 />
    </Provider>
  </>
);
