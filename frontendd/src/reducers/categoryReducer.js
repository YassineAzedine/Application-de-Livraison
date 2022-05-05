import {GET_CATEGORIS , CREATE_CATEGORIS , DELETE_CATEGORIS , GET_ONE_CATEGORIS} from '../constants/categoryConstant'

const INITAI_STATE = {
    categories : [] ,
   
}
const categoryReducers = (state=INITAI_STATE,action)=>{
    switch(action.type){

        case GET_CATEGORIS:
            return {
                ...state,       
                  categories:action.payload,
                       
            };
            case CREATE_CATEGORIS:
                return {
                    ...state,       
                      categories:[...state.categories, action.payload],
                           
                };
                case DELETE_CATEGORIS:
                    return {
                        ...state,       
                          categories:[...state.categories, action.payload],
                               
                    };
                    case GET_ONE_CATEGORIS:
                        return {
                            ...state,       
                              categorie :action.payload,
                                   
                        };
    

            default :
            return state;

    }
   
}
export default categoryReducers