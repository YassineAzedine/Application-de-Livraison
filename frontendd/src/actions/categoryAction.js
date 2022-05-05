import {GET_CATEGORIS, CREATE_CATEGORIS,DELETE_CATEGORIS ,GET_ONE_CATEGORIS} from '../constants/categoryConstant'

import axios from 'axios';

export const getCategories = () => async dispatch=>{
   
    try{
 
        const response = await axios.get('http://localhost:5000/api/categories/');
        console.log("🚀 ~ file: categoryAction.js ~ line 9 ~ responsecategory", response)
        
        let data = response.data.category
        console.log("🚀 ~ file: categoryAction.js ~ line 13 ~ data", data)
  dispatch({type:GET_CATEGORIS,payload:data})

    }catch(err){
console.log('this is error');

    }
}
export const getOneCategories = (categoryid) => async dispatch=>{
console.log("🚀 ~ file: categoryAction.js ~ line 22 ~ categoryid", categoryid)
   
    try{
      
   
        const response = await axios.get('http://localhost:5000/api/categories/'+categoryid);
        
        
        let data = response.data.category
        console.log("🚀 ~ file: categoryAction.js ~ line 29 ~ data", data)
  dispatch({type:GET_ONE_CATEGORIS,payload:data})

    }catch(err){
console.log('this is error');

    }
}
export const createGategories = (formData) => async dispatch=>{
   

    try{
  
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const response = await axios.post('http://localhost:5000/api/categories/add',formData,config);
        console.log("🚀 ~ file: categoryAction.js ~ line 9 ~ response", response);
        
        let data = response.data.category
  dispatch({type:CREATE_CATEGORIS,payload:data})

    }catch(err){
console.log('this is error');

    }
}

export const deleteCategories = (id) => async dispatch=>{
   
    try{
        
 
        const response = await axios.delete('http://localhost:5000/api/categories/'+id);
        console.log("🚀 ~ file: categoryAction.js ~ line 9 ~ responsecategory", response)
        
        let data = response.data.category
  dispatch({type:DELETE_CATEGORIS,payload:data})

    }catch(err){
console.log('this is error');

    }
}