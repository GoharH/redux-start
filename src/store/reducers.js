import { combineReducers } from "redux";
import RandomNumberReducer from './number-reducer';
import UserReducer from './user-reducer'

const rootreducer = combineReducers({
    UserReducer,
    RandomNumberReducer
})
export default rootreducer