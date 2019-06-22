import {REMOVE_CONTACT} from './types'

export const removeContact =(id)=> dispatch=>{     

    dispatch({
              type:REMOVE_CONTACT,
              payload:{id}
         })
}