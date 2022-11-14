import React, { useState } from 'react';
import './App.css';

import { createStore } from 'redux';

// Provider : 컴포넌트
// useSelector : 어떤 state 값을 사용하고 싶은지 선택
// useDispatch : state 값을 변경할 때 사용
import { Provider, useSelector, useDispatch, connect } from 'react-redux';



// store 안에 있는 state를 어떻게 바꿀 것인가 결정한다.
// currentState : 현재 state 값 | action : 어떻게 바꿀지에 대한 요청을 받는 값
function reducer(currentState, action) {
    if (currentState === undefined) {
        return {
            number: 1,
        };
    }

    // 새로운 state를 만들어 과거의 state를 복제하여 불변성을 유지한다.
    const newState = { ...currentState }
    // 새로운 state 값을 리턴한다.
    return newState;
}

const store = createStore(reducer);

function App() {
    return (
        <div id="container">
            <h1>Root</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1></Right1>
                </Provider>
            </div>
        </div>
    );
}

export default App;


function Left1(props) {
    return (
        <div>
            <h1>Left1 </h1>
            <Left2></Left2>
        </div>
    );
}


function Left2(props) {
    return (
        <div>
            <h1>Left2 : </h1>
            <Left3></Left3>
        </div>
    );
}


function Left3(props) {
    return (
        <div>
            <h1>Left3 : </h1>
        </div>
    );
}


function Right1(props) {
    return (
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    );
}


function Right2(props) {
    return (
        <div>
            <h1>Right2</h1>
            <Right3></Right3>
        </div>
    );
}

function Right3(props) {
    return (
        <div>
            <h1>Right3</h1>
            <input type="button" value="+" onClick={() => { }}></input>
        </div>
    );
}