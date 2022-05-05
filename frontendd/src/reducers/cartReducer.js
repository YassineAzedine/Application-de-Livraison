import {
ADD_TO_CART , DELETE_FROM_CART
} from '../constants/cartContants'
 
let INITAI_STATE = {

    cart : []
}
if(localStorage.getItem('cart')){
    INITAI_STATE.cart = JSON.parse(localStorage.getItem('cart'));
}else{
    INITAI_STATE.cart = []
}





export const cartReducer = (state = INITAI_STATE , action) => {
    switch(action.type) {
   
            
         case ADD_TO_CART:
            console.log(state);
            return {
              
              cart:[...action.payload]

             }
             case DELETE_FROM_CART:
                console.log(state);
                return {
                  
                  cart:[...action.payload]
    
                 }
                
            
        default :   
        return state; 

    
}

}