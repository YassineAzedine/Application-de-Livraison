import {useParams} from 'react-router-dom'
import React,{useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import {useDispatch, useSelector,} from 'react-redux'
import {  getOneCategories} from '../actions/categoryAction'
import axios from 'axios';

function AdminEditCategory() {
  

    const categoryid = useParams()
  const categoryidd = categoryid.categoryid

    const  [name , setName] = useState({})
    console.log("🚀 ~ file: AdminEditCategory.js ~ line 16 ~ AdminEditCategory ~ name", name)
  const {loading, categorie , error} = useSelector(state=>state.categories)
  console.log("🚀 ~ file: AdminEditCategory.js ~ line 13 ~ AdminEditCategory ~ categories", name)
    const dispatch = useDispatch();
    
    ///
    const handleEditCategoryChange = (e)=>{
    
      
   
  
      setName(e.target.value)
      
    }
    const submit = async  (e)=>{
    
      
   e.preventDefault();
 
   
  const namecategory = {
    name
  }
  //  const config = {
  //   headers:{

  //     'Content-Type':'application/json'

  // }
  //  }
  await  axios.patch(' http://localhost:5000/api/categories/'+ categoryidd , namecategory )
  
  .then((res)=>{

     console.log(res);
     window.location="/admincategory";
  }).catch((error)=>{
    console.log(error);
  })

  
    }
    
  

  useEffect (()=>{

      
    // axios.get('http://localhost:5000/api/categories').then((res)=>{
    //  const data = res.data.data
    //     setcategries(data)
    //         })


    
  // dispatch(createGategories())
  console.log('welcome');
if(!categorie){
  dispatch(getOneCategories(categoryidd))
}else{
  setName(categorie.name)
}
  

  
  


} , [dispatch,categorie])
    
  return (
    <div>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-warning">
        <h5 className="modal-title" id="exampleModalLabel">Edit Category</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form >
      <div className="form-group">
       
    <input type="texte" value={ name} className="form-control" id="exampleInputCategory1" aria-describedby="Category" placeholder="Enter Category"  name="name"  onChange={(event)=>{handleEditCategoryChange(event)}} />
   
  </div>
  <button type="button" className="btn btn-success" onClick={submit} >Edit Catgorey </button>
  </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
  
      

  )
}

export default AdminEditCategory