import React, { useReducer } from 'react';

function reducer(){
    
}


const HookReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value:0});
    return(
        <div>
            <h1>Hook - useReducer</h1>

            <button type='button'>-1</button>
            <button type='button'>+1</button>
        </div>
    );
}

export default HookReducer;