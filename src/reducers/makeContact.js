import {MAKE_CONTACT,REMOVE_CONTACT} from '../actions/types';

const initialState= []

export default function(state=initialState,action){
  switch(action.type){
       case MAKE_CONTACT:
       return [...state,action.payload]
       case REMOVE_CONTACT:
           console.log(action.payload.id)
           return state.filter(x => x.id!==action.payload.id)
        default:
        return state

    }
}