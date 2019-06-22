import {GET_ID} from '../actions/types';

const intitialState={}

export default function(state=intitialState,action){
      switch(action.type){
           case GET_ID:
              return action.payload
            
            default:
            return state
      }
}