import axios from "axios";
import { ALL_FOODS_FAIL, ALL_FOODS_REQUEST, ALL_FOODS_SUCCESS, CLEAR_ERRORS,
    DETAILS_FOODS_REQUEST,
DETAILS_FOODS_SUCCESS,
DETAILS_FOODS_FAIL,
ADD_FOOD,
DELETE_FOOD,
ONE_FOOD

}
from '../constants/foodConstants'

export const getFoods = (category) =>async (dispatch)=>{
    try{

        dispatch({type : ALL_FOODS_REQUEST})
        let link = 'http://localhost:5000/api/foods'
      

        if(category === "All"){
            link = `http://localhost:5000/api/foods` 

        }else if(category){
            console.log("🚀 ~ file: foodsAction.js ~ line 17 ~ getFoods ~ category", category)
            link = `http://localhost:5000/api/foods?category=${category}` 
        }else{
            link = `http://localhost:5000/api/foods` 
        }
        const {data} = await axios.get(link)


        dispatch({
          
            type:ALL_FOODS_SUCCESS,
            payload : data
         
        })

    }catch(error){
   dispatch({
    type : ALL_FOODS_FAIL,
    payload : error.response.data.message

   })
        
}
}
export const getOneFood = (id) =>async (dispatch)=>{
    try{

        dispatch({type : DETAILS_FOODS_REQUEST})
 
        const url = `http://localhost:5000/api/foods/${id}`
        const {data} = await axios.get(url)
        dispatch({
          
            type:DETAILS_FOODS_SUCCESS,
            payload : data.food
         
        })

    }catch(error){
   dispatch({
    type : DETAILS_FOODS_FAIL,
    payload : error.response.data.message

   })
        
}
}


//
export const createFood = (formData) => async dispatch=>{
console.log("🚀 ~ file: foodsAction.js ~ line 71 ~ formData", formData)
   

    try{
  
        const config = {
            headers:{
               
                'Content-Type': 'multipart/form-data',
            }   
        }
      
        const response = await axios.post('http://localhost:5000/api/foods/add',formData,config);
        
        const data = response.data
        console.log("🚀 ~ file: foodsAction.js ~ line 83 ~ data", data)
  dispatch({type:ADD_FOOD,payload:data})

    }catch(err){
console.log('this is error');

    }
}

//clear errors
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
export const deleteFoods = (id) => async dispatch=>{
   
    try{
        
 
        const response = await axios.delete('http://localhost:5000/api/foods/'+id);
        console.log("🚀 ~ file: categoryAction.js ~ line 9 ~ responsecategory", response)
        
        let data = response.data.category
  dispatch({type:DELETE_FOOD,payload:data})

    }catch(err){
console.log('this is error');

    }
}
export const getFood = (foodid) => async dispatch=>{
   
    try{
      
   
        const response = await axios.get('http://localhost:5000/api/foods/'+foodid);
        
        
        let data = response.data.food
        console.log("🚀 ~ file: categoryAction.js ~ line 29 ~ data", data)
  dispatch({type:ONE_FOOD,payload:data})

    }catch(err){
console.log('this is error');

    }
}