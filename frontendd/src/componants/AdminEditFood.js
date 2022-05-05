
import {useParams} from 'react-router-dom'
import React,{useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


import {useDispatch, useSelector,} from 'react-redux'
import {  getFood} from '../actions/foodsAction'


function AdminEditFood() {
  const { food } = useSelector(state=>state.foods)
  console.log("🚀 ~ file: AdminEditFood.js ~ line 12 ~ AdminEditFood ~ food", food)
  const [file, setFiles] = useState("");

    const [onefood,setFood]=useState({
        name :"",
        description:"",
        price:0,
        category: "",
        image_cover:null ,
   
    })
    console.log("🚀 ~ file: AdminEditFood.js ~ line 13 ~ AdminEditFood ~ food", onefood)
    const dispatch = useDispatch();


          const id = useParams()

          const foodid = id.foodid
          console.log("🚀 ~ file: AdminEditFood.js ~ line 5 ~ AdminEditFood ~ foodid", foodid)

          const handelChange = (e) =>{
            

            const newfood = { ...onefood };
            newfood[e.target.name] = e.target.value;
            setFood(newfood);
            
            const fileupload=e.target.files[0];
            setFiles(fileupload); 
            

        }

          useEffect (()=>{

      
            // axios.get('http://localhost:5000/api/categories').then((res)=>{
            //  const data = res.data.data
            //     setcategries(data)
            //         })
        
        
            
          // dispatch(createGategories())
        if(!food){
          dispatch(getFood(foodid))
        }else{
            setFood(food)
        }
          
        
          
          
        
        
        } , [dispatch,food])



   
        const handleSubmit = async (e) =>{
            e.preventDefault();

            const  formData = new FormData();
            formData.append("name",onefood.name)
           formData.append("description",onefood.description)
           formData.append("price",onefood.price)
           formData.append("category",onefood.category)
           formData.append("image_cover",file)
  await  axios.patch(' http://localhost:5000/api/foods/'+ foodid , formData )
  .then((res)=>{
    window.location="/adminfood";

    console.log(res);
   
 }).catch((error)=>{
   console.log(error);
 })

        }

  return (
    <div>

<div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-warning">
        <h5 className="modal-title" id="exampleModalLabel">Edit Food</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form  onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="exampleInputname">name </label>
    <input type="texte" className="form-control" id="exampleInputname" aria-describedby="Category" placeholder="Enter name" name="name" value={onefood.name} onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputdescription">description </label>
    <input type="texte" className="form-control" id="exampleInputdescription" aria-describedby="description" placeholder="Enter description" name="description" value={onefood.description}  onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputPrice">Price </label>
    <input type="number" className="form-control" id="exampleInputname" aria-describedby="Price" placeholder="Enter Price" name="price" value={onefood.price}  onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputname">category </label>
    <input type="texte" className="form-control" id="exampleInputname" aria-describedby="Category" placeholder="Enter Category" name="category" value={onefood.category}  onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
  <div class="custom-file">
  <input
                          type="file"
                        
                          onChange={(e) => handelChange(e)}
                          name="image_cover"
                          className="form-control form-control-lg"
                        />
  </div>
  </div>
  {JSON.stringify(food)}
  
  <button  value="Submit" type="submit" className="btn btn-success"  >Edit Food </button>

  </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>

    </div>
  )
}

export default AdminEditFood