

import {SET_AUTHED_USER,SET_LOGUT_USER} from '../Type'


export const userAuth = (userId) => {
    return{
       type: SET_AUTHED_USER,
       userId
   }
 

}


export const userLogout = () => {
    return{
       type: SET_LOGUT_USER
   }
 

}

