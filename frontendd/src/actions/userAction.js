import {GET_USER , DELETE_USER} from '../constants/userConstant'

import axios from 'axios';
export const getUsers = () => async dispatch=>{
   
    try{
 
        const response = await axios.get('http://localhost:5000/api/listusers');
        console.log("🚀 ~ file: users.js ~ line 9 ~ userrrrrrr", response)
        
        let users = response.data.users
  dispatch({type:GET_USER,payload:users})

    }catch(err){
console.log('this is error');

    }
}
export const deleteusers = (id) => async dispatch=>{
   
    try{
        
 
        const response = await axios.delete('http://localhost:5000/api/listusers/'+id);
        console.log("🚀 ~ file: categoryAction.js ~ line 9 ~ responsecategory", response)
        
        let data = response.data.category
  dispatch({type:DELETE_USER,payload:data})

    }catch(err){
console.log('this is error');

    }
}
