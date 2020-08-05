import {SET_AUTHED_USER,SET_LOGUT_USER} from '../Type'

 const initState={
    islogin:false,
    userId:'',
    
 }


 const AuthReducer=(state=initState,action)=>{

    switch(action.type)
    {

        case SET_AUTHED_USER:return{
            ...state,
            islogin:true,
            userId:action.userId,
           
        }

        case SET_LOGUT_USER:return{
            ...state,
            islogin:false,
            userId:'',
           
        }

        
        default:return state

    }

 }
 
 export default AuthReducer