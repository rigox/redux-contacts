import {REMOVE_CONTACT} from './types'

export const removeContact =(data)=> dispatch=>{     
    dispatch({
              type:REMOVE_CONTACT,
              payload:{data}
         })
}