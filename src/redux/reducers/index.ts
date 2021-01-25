import { combineReducers } from 'redux';
import coinReducer from './coinReducer';
import converterReducer from './converterReducer';
import calculateReducer from './calculateReducer';

const rootReducer = combineReducers({
  coinReducer,
  converterReducer,
  calculateReducer
})

export default rootReducer;