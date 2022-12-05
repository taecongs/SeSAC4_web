import addMoneyReducer from './addMoney';
import deleteMoneyReducer from './deleteMoney';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    addMoney : addMoneyReducer,
    deleteMoney : deleteMoneyReducer
});

export default rootReducer;