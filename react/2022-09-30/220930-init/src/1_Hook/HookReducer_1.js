import React, {useState, useReducer} from 'react';


function reducer(state, action){
    switch (action.type){
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

    // useReducer 첫번째 파라미터는? : 함수  
    // useReducer 두번째 파라미터는? : 초기 값 (state.value : 0)

    // dispatch 함수는? : action을 발생하게 하는 함수
    // state는? : 현재 상태 값
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return(
        <div>
            <h1>수업2) Hook - useReducer</h1>

            <h2>{state.value}</h2>
        

            {/* 1.버튼이 클릭되면 dispatch 함수가 실행
                2.reducer 함수가 실행된다.
                3. action 객체의 type에 어떤 버튼을 클릭하였는지에 따라 출력되는 값이 다르다.
            */}
            <button onClick={() => {dispatch({type : 'DECREMENT'})}}>-1</button>
            <button onClick={() => {dispatch({type : 'INCREMENT'})}}>+1</button>
        </div>
    );
}

export default HookReducer;