import React,{useEffect } from 'react'
import { Link } from "react-router-dom";

import {useDispatch, useSelector,} from 'react-redux'
import { getUsers ,deleteusers} from '../actions/userAction'


function AdminListeuser() {

  const dispatch = useDispatch();
  const {loading, users , error} = useSelector(state=>state.users)
  console.log("🚀 ~ file: AdminListeuser.js ~ line 11 ~ AdminListeuser ~ sxs", users)
  useEffect (()=>{

      
    // axios.get('http://localhost:5000/api/categories').then((res)=>{
    //  const data = res.data.data
    //     setcategries(data)
    //         })


  dispatch(getUsers())

} , [dispatch])

const handleDelete = (id) => {
    
  dispatch(deleteusers(id))
  window.location="/adminlistuser";




};
  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
  return (
    <div>

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
                
                <small>   <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>
              </div>
            </div>
          </header>
          <main>
             
                <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">username</th>
      <th scope="col">role</th>
      <th scope="col">Action</th>

   

    </tr>
  </thead>
  <tbody>
 
    {users && users.map(user=>(
   <tr>
      <th scope="row">1</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.role}</td>
     
      <td>
              <button className='btn  text-danger' onClick={() => handleDelete(user._id)}>
               <i class="fa fa-trash" ></i>
         {/* onClick={()=>dispatch(deleteFromCart(food))} */}
               </button>
          
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
    </div>
  )
}

export default AdminListeuser