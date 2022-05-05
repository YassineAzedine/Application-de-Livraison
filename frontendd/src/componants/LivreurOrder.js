import React,{useEffect,useState} from 'react'
import {Link} from"react-router-dom";
import Axios from 'axios';
import {useDispatch, useSelector,} from 'react-redux'
import { getorders} from '../actions/orderAction'
import jwtdecode from "jwt-decode";
import toaster from 'toastr'

import "toastr/build/toastr.css"
function LivreurOrder() {
  // const jwt =  localStorage.getItem('token');
  // console.log("🚀 ~ file: LivreurOrder.js ~ line 9 ~ LivreurOrder ~ jwt", jwt)
  // const JWT1 =jwtdecode(jwt);
  // console.log("🚀 ~ file: LivreurOrder.js ~ line 11 ~ LivreurOrder ~ JWT1", JWT1)
  // const user = JWT1;
  // console.log("🚀 ~ file: LivreurOrder.js ~ line 13 ~ LivreurOrder ~ user", user)


  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
  const jwt =  localStorage.getItem('token');
  console.log("🚀 ~ file: LivreurOrder.js ~ line 9 ~ LivreurOrder ~ jwt", jwt)
  const JWT1 =jwtdecode(jwt);
  console.log("🚀 ~ file: LivreurOrder.js ~ line 11 ~ LivreurOrder ~ JWT1", JWT1)
  const user = JWT1;

  let auth = user.user_id
  console.log("🚀 ~ file: LivreurOrder.js ~ line 35 ~ LivreurOrder ~ auth", auth)
  
  const ok = (id)=>{
  
 
    const jwt =  localStorage.getItem('token');
    console.log("🚀 ~ file: LivreurOrder.js ~ line 36 ~ ok ~ tokenennenenen", jwt)

    // const JWT1 =jwtdecode(jwt);
    // console.log("🚀 ~ file: LivreurOrder.js ~ line 30 ~ ok ~ JWT1 vs ssk", JWT1)
    
        const url =`http://localhost:5000/api/liverur/livreur/${id}`;


    Axios.post(url,user,{
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'Authorization':jwt , // notice the Bearer before your token
      },
    
    }).then((res) => {
  if(res.data.message){

    toaster.success('Order Accepted')
  }
       

      
        })

  }
  const dispatch = useDispatch();
  const {loading, orders , error} = useSelector(state=>state.orders)
  console.log("🚀 ~ file: LivreurOrder.js ~ line 69 ~ LivreurOrder ~ orders", orders)
  useEffect (()=>{

      
    // axios.get('http://localhost:5000/api/categories').then((res)=>{
    //  const data = res.data.data
    //     setcategries(data)
    //         })


  dispatch(getorders())

} , [dispatch])
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
               <Link to={'/livreurOrder'} className="la la-cart-arrow-down" >
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
                <h4>Livreur </h4>
                
                <small>   <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>
              </div>
            </div>
          </header>
        
          <main>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">address</th>
      <th scope="col">Total</th>
      <th scope="col">user</th>
      <th scope="col">delivred</th>
   



    </tr>
  </thead>
  <tbody>
  {orders && orders.map(order=>(
    
    <tr>
   
         
         <td>{order.address}</td>
         <td>{order.total} DH</td>
         <td>{order.user_id.name}</td>
         {(() => {
        if (order.liv_id !== null && order.liv_id._id == auth ) {
       
          return (
            <div className='text-info'>Accepted by you 
            </div>

          )
        } else if (order.liv_id == null) {
          return (
           
                 <button className='btn  text-success' onClick={()=>ok(order._id)}>
              <i class="fa-solid fa-check-double">Accepter</i>
         {/* onClick={()=>dispatch(deleteFromCart(food))} */}
               </button>
              
          
          )
        } else if (order.liv_id !== null){
          return(
          
            <div className='text-danger'>
              No Disponible

            </div>
          )
        }else{
          return (
            <div>  </div>
          )
        }
      })()}
       
      





         <td>
         
           
            
       
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

export default LivreurOrder
