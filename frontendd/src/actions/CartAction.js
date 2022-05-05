import {
    ADD_TO_CART , DELETE_FROM_CART
    } from '../constants/cartContants'
     
 

    export const addToCart = (food) =>async (dispatch) =>{
        //if cart already existe in local storage , Otherwise set to empty array 

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
         : [] ;
         //check of duplicate
         const duplicate = cart.filter(cartItem => cartItem._id === food._id);
       //If no duplicates.proceed
       if(duplicate.length === 0){
//prep food data
        const foodToAdd =  {
            ...food,
            count :1 
        }
        //add food data to cart
        cart.push(foodToAdd)
       }
       //add cart to local sotarge
       localStorage.setItem('cart', JSON.stringify(cart))
       //add cart to local redux
       
       dispatch({
          
        type:ADD_TO_CART,
        payload:cart
     
    })




    }
    export const DeleteFromCart = (food) =>async (dispatch) =>{

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
        :[];
        const updateCart = cart.filter(cartItem =>cartItem._id !==food._id)
        localStorage.setItem('cart',JSON.stringify(updateCart))
        dispatch({
            type:DELETE_FROM_CART,
            payload:updateCart
        })
    }