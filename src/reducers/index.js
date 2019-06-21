import {combineReducers} from 'redux'
import makeContact from './makeContact';

export default combineReducers({
  contacts:makeContact
});