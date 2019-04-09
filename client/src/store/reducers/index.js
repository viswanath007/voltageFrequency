import {combineReducers} from 'redux';
import voltageReducer from './voltage';

export default combineReducers({
  power: voltageReducer
})
