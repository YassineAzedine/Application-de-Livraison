import {GET_ORDER ,DELETE_ORDER , GET_ONE_ORDER} from '../constants/orderConstant'

const INITAI_STATE = {
    orders : []
}
const orderReducers = (state=INITAI_STATE,action)=>{
    switch(action.type){

        case GET_ORDER:
            return {
                ...state,       
                  orders:action.payload,
                       
            };
            case DELETE_ORDER:
                return {
                    ...state,       
                      orders:action.payload,
                           
                };
                case GET_ONE_ORDER:
                    return {
                        ...state,       
                          order:action.payload,
                               
                    };
             

            default :
            return state;

    }
   
}
export default orderReducers