import React,{useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import {useDispatch, useSelector,} from 'react-redux'
import { getCategories , createGategories,deleteCategories ,getOneCategories} from '../actions/categoryAction'

function AdminCategory() {
  const [category,setCategory] = useState({
    name: ''
  })
  console.log("🚀 ~ file: AdminCategory.js ~ line 9 ~ AdminCategory ~ category", category)
  const handleDelete = (id) => {
    
    dispatch(deleteCategories(id))
    window.location="/admincategory";

  
 
  
  };
  
  const submit =(e) =>{
    console.log('hello');
  
   e.preventDefault();
 
   
    const data = {
      name : category.name
    }
    dispatch(createGategories(data))
    return  ()=>{
      setCategory('')
    }
   

   
   
  }
  const handleCategoryChange = (event)  => {

    const newCategory = { ...category };

    newCategory[event.target.name] = event.target.value;

    setCategory(newCategory)


  }
  const signout = () => {
    const jwt = localStorage.removeItem('token');

    window.location = "/";
    return jwt;


  }
  const dispatch = useDispatch();
  const {loading, categories , error} = useSelector(state=>state.categories)
  console.log("🚀 ~ file: AdminCategory.js ~ line 18 ~ AdminCategory ~ categories", categories.length)
  useEffect (()=>{

      
    // axios.get('http://localhost:5000/api/categories').then((res)=>{
    //  const data = res.data.data
    //     setcategries(data)
    //         })


    
  // dispatch(createGategories())
  dispatch(getCategories())
  dispatch(getOneCategories())

  
  


} , [dispatch])
  return (
    <div>

      {/* //dashboard DashboradAdmin */}

      <div>
        <input type="checkbox" id="nav-toggle" />

        <div className="sidebar bg-warning">
          <div className="sidebar-brand">
            <h2>
              <span className="las la-store" /> <span>MARHBA </span>
              <span className="la la-cutlery" />

            </h2>
          </div>
          {/*Secciones-del-tablero*/}
          <div className="sidebar-menu">
            <ul>
              <li>
               
              <Link to={'/dashboardadmin'} className="active"><span className="las la-home" />
                      <span>
                        </span></Link>

              </li>
              <li>


                <Link to={'/admincategory'}>
                  <span className="la la-list-alt " />
                  <span>Categorie</span>


                </Link>

              </li>
              <li>
                <Link to={'/adminfood'} className="la la-cutlery" >
                  <span>Foods</span>
                </Link>
              </li>
              <li>
                <Link to={'/adminlistuser'} className="las la-user" >
                  <span>users</span>
                </Link>

              </li>
              <li>
                <Link to={'/adminorder'} className="la la-cart-arrow-down" >
                  <span>Commande</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <header>
            <h2>
              <label htmlFor="nav-toggle">
                <span className="las la-bars" />
              </label> Marhba
              <span className="la la-cutlery" />
            </h2>
            {/* <div className="search-wrapper">
                  <span className="las la-search" />
                  <input type="search" placeholder="Buscar aquí" />
                </div> */}
            <div className="user-wrapper">
              <img src="img/Avatar.png" width="40px" height="40px" alt="" />
              <div>
                <h4>Admin</h4>

                <small>   <span className="nav-link" style={{ cursor: 'pointer' }} onClick={signout} > Logout </span> </small>
              </div>
            </div>
          </header>

          {/* main */}

          <main>
            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">  <i class="fa-solid fa-plus"></i></button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-warning">
        <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form >
      <div className="form-group">
       
    <input type="texte" className="form-control" id="exampleInputCategory1" aria-describedby="Category" placeholder="Enter Category" onChange={(event)=>{handleCategoryChange(event)}} name="name"/>
   
  </div>
  <button type="button" className="btn btn-success" onClick={submit}>Add Catgoey </button>

  </form>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            <table class="table">
              <thead>
                <tr>
                
                  <th scope="col">Name</th>
              
              
                  <th scope="col">Action</th>
               


                  
                  

                 
                </tr>
              </thead>
              <tbody>
              {categories && categories.map(caegory=>(
              <tr>
                 
      
       
  <td   key={caegory.id}>{caegory.name}</td>

  <td>
       <button className='btn  text-danger' onClick={() => handleDelete(caegory._id)}>
        <i class="fa fa-trash" ></i>
  {/* onClick={()=>dispatch(deleteFromCart(food))} */}
        </button>
       
       <Link to={`/admineditcategory/${caegory._id}`} className='btn  text-warning'>
        <i class="fa fa-edit" ></i>
  {/* onClick={()=>dispatch(deleteFromCart(food))} */}
        </Link>
        


  </td>

 
      
           
     
              
               
               
                </tr>
                   ))}
             
              </tbody>

            </table>

            {/*Tabla*/}
          </main>
          





        </div>
      </div>


    </div>


  )
}

export default AdminCategory