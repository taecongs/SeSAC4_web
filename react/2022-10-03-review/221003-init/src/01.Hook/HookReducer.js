import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT' : {
            return {value : state.value + 1};
        }

        case 'DECREMENT' : {
            return {value : state.value - 1};
        }

        default : {
            return state;
        }
    }
}


const HookReducer = () => {
    // state : 초기 값  dispatch : action을 발생하게 하는 함수
    // useReducer의 파라미터는? : 함수, 초기값
    const [state, dispatch] = useReducer(reducer, {value:0});
    return(
        <div>
            <h1>Hook - useReducer</h1>

            <p>{state.value}</p>

            <button onClick={() => {dispatch({type : 'DECREMENT'})}} type='button'>-1</button>
            <button onClick={() => {dispatch({type : 'INCREMENT'})}} type='button'>+1</button>
        </div>
    );
}

export default HookReducer;