import {MAKE_CONTACT,REMOVE_CONTACT} from '../actions/types';

const initialState= []

export default function(state=initialState,action){
  switch(action.type){
       case MAKE_CONTACT:
       return [...state,action.payload]
       case REMOVE_CONTACT:
       return  [...state,action.payload]
        default:
        return state

    }
}