import {GET_USER ,DELETE_USER } from '../constants/userConstant'

const INITAI_STATE = {
    users : []
}
const userReducer = (state=INITAI_STATE,action)=>{
    switch(action.type){

        case GET_USER:
            return {
                ...state,       
                  users:action.payload,
                       
            };
            
        case DELETE_USER:
            return {
                ...state,       
                  users:action.payload,
                       
            };
           

            default :
            return state;

    }
   
}
export default userReducer