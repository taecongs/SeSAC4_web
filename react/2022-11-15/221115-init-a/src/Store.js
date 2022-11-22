import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import App2 from './App2';

import './Store.css';

const currentNum = {
    leftNum : 0,
    rightNum : 0
};

function reducer(num = currentNum, action){
    if(action.type === '더하기'){
        if(action.mode === 'left'){
            num.leftNum++;
        } else{
            num.rightNum++;
        }

        return {...num};

    } else if(action.type === '빼기'){
        if(action.mode === 'left'){
            num.leftNum--;
        } else{
            num.rightNum--;
        }

        return {...num};
        
    } else{
        return {...num};
    }
}

let store = createStore(reducer);


function Store() {
    return (
        <div className='container'>
            <h1>Store</h1>

            <div className='grid'>
                <Provider store={store}>
                    <App />
                    <App2 />
                </Provider>
            </div>

        </div>
    )
}

export default Store;