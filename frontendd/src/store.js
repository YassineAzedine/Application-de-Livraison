import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {foodReducer,foodDetailsReducer} from './reducers/foodReducer'
import {cartReducer} from './reducers/cartReducer'
import categoryReducers from './reducers/categoryReducer'
import orderReducer from './reducers/orderReducer'
import userReducer from './reducers/userReducer'



let category = categoryReducers
const reducer = combineReducers({

    foods : foodReducer,
    foodDetails:foodDetailsReducer,
    cart:cartReducer,
    categories:categoryReducers,
    orders:orderReducer,
    users:userReducer

})


let initialState = {}

const middlware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store ; 

