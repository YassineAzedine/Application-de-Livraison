import {
    ALL_FOODS_REQUEST,
    ALL_FOODS_SUCCESS,
    ALL_FOODS_FAIL,
    CLEAR_ERRORS,
    DETAILS_FOODS_REQUEST,
DETAILS_FOODS_SUCCESS,
DETAILS_FOODS_FAIL, 
ADD_FOOD   ,
DELETE_FOOD   ,
ONE_FOOD  

    
} from '../constants/foodConstants'




export const foodReducer = (state = {foods : [] }, action) => {
    switch(action.type) {
   
            
         case ALL_FOODS_REQUEST:
            console.log(state);
            return {
              
                loading:true,
                foods : []

             }
             case ALL_FOODS_SUCCESS:
                return {

                    loading:false,
                    foods : action.payload.foods
    
                 }
                 case ALL_FOODS_FAIL:
                     return{
                         loading:false,
                         error:action.payload
                     }
                     case CLEAR_ERRORS : 
                     return {
                         ...state,
                         error : null
                     }
                     case ADD_FOOD:
                        return{
                            loading:false,
                            error:action.payload
                        }
                        case DELETE_FOOD:
                            return{
                                loading:false,
                                error:action.payload
                            }
                            case ONE_FOOD:
                                return {
                                    ...state,       
                                      food :action.payload,
                                           
                                };
    

        default :   
        return state; 

    
}

}
export const foodDetailsReducer = (state = {food : {} } ,action)=>{
    switch (action.type){
        case DETAILS_FOODS_REQUEST:
            return {
                ...state,
                loading:true
            }
            case DETAILS_FOODS_SUCCESS:
                return {
                   
                    loading:false,
                    food : action.payload
                }
                case DETAILS_FOODS_FAIL:
                    return {
                       
                       ...state,
                    error:action.payload.error
                    }
       default :
       return state 
    }
}