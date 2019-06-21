import {MAKE_CONTACT} from './types';
const uuid =  require("uuid")
export const create_contact = (data) => dispatch=>{
     let id =  uuid.v4()
    dispatch({
         type:MAKE_CONTACT,
         payload:{data,id}
    })

}