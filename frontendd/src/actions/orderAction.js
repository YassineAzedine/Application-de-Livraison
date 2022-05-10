import {GET_ORDER ,DELETE_ORDER ,GET_ONE_ORDER} from '../constants/orderConstant'
import axios from 'axios';
export const getorders = () => async dispatch=>{
   
    try{
 
        const response = await axios.get('http://localhost:5000/api/orders/admin/allOrders');
       

        const orders = response.data.orders
      
  dispatch({type:GET_ORDER , payload:orders})

    }catch(err){
console.log('this is error');

    }
}
export const getOneorder =  (orderid) => async dispatch=>{
console.log("🚀 ~ file: orderAction.js ~ line 20 ~ orderid", orderid)
   
    try{
        
        const response = await axios.get('http://localhost:5000/api/orders/admin/allOrders/'+orderid);
       

        const order = response.data.oneorder
      
  dispatch({type:GET_ONE_ORDER , payload:order})

    }catch(err){
console.log('this is err    or');

    }
}
export const deleteOrder = (orderID) => async dispatch=>{
   
    try{
        
 
        const response = await axios.delete('http://localhost:5000/api/orders/'+ orderID);
       
  dispatch({type:DELETE_ORDER,payload:response})

    }catch(err){
console.log('this is error');

    }
}
