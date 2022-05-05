import React,{useEffect,useState} from 'react'
import {Link} from"react-router-dom";

import {useDispatch, useSelector,} from 'react-redux'
import { getorders ,deleteOrder} from '../actions/orderAction'
import axios from 'axios';

function AdminOrder() {

      const [statuss , setStatus] = useState([]);
      const initialRommState = {
        status: "",
     
      };
      const [updatestatus , setupdataStatus] = useState(initialRommState);
      console.log("🚀 ~ file: AdminOrder.js ~ line 11 ~ AdminOrder ~ xsxus", updatestatus.status)
     
    
      const handleDelete = (orderID) => {
    
        dispatch(deleteOrder(orderID));
        window.location="/adminorder";
    
      
     
      
      };
      
      


      const getstatus = ()=>{
        axios.get(`http://localhost:5000/api/orders/admin/stt`).
        then((res)=>{
         let statuss =  res.data.status
         setStatus(statuss)
   
        })
     
        
      }
      const updateorderstatus = async  (orderId )=>{
      let data =   updatestatus.status
      await  axios.patch(`http://localhost:5000/api/orders/admin/order/${orderId}`,{
        status : updatestatus.status
        })
       .then((res)=>{
             console.log("🚀 ~ file: AdminOrder.js ~ line 33 ~ then ~ data", res.data.status)
             return res.status
   
        })
     
        
      }
      const handelstatus = (e,order)=>{
        const status = {...updatestatus}
 status[e.target.name] = e.target.value
        const orderId = order._id
        
        setupdataStatus(status)

        updateorderstatus(orderId);

      }

      const showStatus=(order)=>{
        
  return (
    <>
  

       
    
      <select onChange={e=>handelstatus(e,order)}  name="status" id="">
    
    
        <option value="" selected>select status</option>
       
      {statuss.map((s)=>(
        <option key={s} value={s}>{s}</option>
        ))}
      </select>
           
  
    
    </>
  )
   
     
      }
      
      const showProduct=(order,id )=>{
    
        
        return (
          <>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        {order.orderItems.map((items)=>(
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">  
             
       
    
           
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <h1> {items.name}
              <h3>Price : {items.price} DH</h3>
              <h4> Qty :{items.count}</h4>
         <td > <img   style={{"height" : "80px", "width" : "140px"}} src={"https://www.docteurclic.com/galerie-photos/image_3328_400.jpg"} alt="BigCo Inc. logo"/></td>

              </h1>
          
         
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
           
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
              ))}
      </div>
      
             
     
            
          
         
      
                 
        
          
          </>
        )
         
           
            }

  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
  const dispatch = useDispatch();
  const {loading, orders , error} = useSelector(state=>state.orders)
  useEffect (()=>{
    getstatus();
 
      
    // axios.get('http://localhost:5000/api/categories').then((res)=>{
    //  const data = res.data.data
    //     setcategries(data)
    //         })


  dispatch(getorders())

} , [dispatch,orders])

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
      <th scope="col">address</th>
      <th scope="col">Total</th>
      <th scope="col">user</th>
      <th scope="col">Livreur</th>

      <th scope="col">Status </th>
      <th scope="col">Product </th>

  

     
     

    </tr>
  </thead>
  <tbody>

  {orders && orders.map(order=>(
    <tr>
   
         
         <td>{order.address}</td>
         <td>{order.total} DH</td>
         <td>{order.user_id.name}</td>
         <td>

       
         <div>
      {(() => {
        if (order.liv_id !== null) {
       
          return (
            <div> accepter By : <span className='text-info'> {  order.liv_id.name}</span>
            </div>

          )
        } else if (order.liv_id == null) {
          return (
            <div className='text-danger'>encore...</div>
          )
        } else {
          return (
            <div> </div>
          )
        }
      })()}
    </div>
    
         {/* <td>{order.liv_id !== null && (
         <span>delivred</span>
   )}</td>
    <td>{order.liv_id == null && (
         <span>encore</span>
   )}</td>
         {}
       */}
         

        
 

         

       
      


       
</td>

<td>

{showStatus(order)} 

</td>


<td>
<Link to={'/listfood/'+order._id}  >
  Show Product {showProduct( order , order._id )}
  <i className="fa-solid fa-eye"></i>
</Link>

</td>

         <td>
         
            
              
            
       
         </td>
         <button className='btn  text-danger' onClick={() => handleDelete(order._id)}>
               <i class="fa fa-trash"   >  </i>
         {/* onClick={()=>dispatch(deleteFromCart(food))} */}
               </button>
 
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

export default AdminOrder