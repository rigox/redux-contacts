import {combineReducers} from 'redux'
import makeContact from './makeContact';
import getID from './getID';
import { GET_ID } from '../actions/types';
export default combineReducers({
  contacts:makeContact,
  id:getID
});