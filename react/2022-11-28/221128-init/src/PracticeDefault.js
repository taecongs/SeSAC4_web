import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createRef} from 'react';

const initState = {
    money : 0
};

function reducer(state = initState, action){
    const newState = {...state};

    if(action.type === 'ADD'){
        newState.money += parseInt(action.money);
    } else if(action.type === 'DELETE'){
        newState.money -= parseInt(action.money);
    }

    return newState;
}



const store = createStore(reducer);



function PracticeDefault() {
    return (
        <Provider store={store}>
            <Balance />
            <Button />
        </Provider>
    );
}

const Balance = () => {
    const money = useSelector((state) => state.money);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
        </div>
    )
}

const Button = () => {
    const input = createRef();
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="text" ref={input} />
            <button onClick={() => { dispatch({type : 'ADD', money : input.current.value}) }}>입금</button>
            <button onClick={() => { dispatch({type : 'DELETE', money : input.current.value}) }}>출금</button>
        </div>
    )
}

export default PracticeDefault;