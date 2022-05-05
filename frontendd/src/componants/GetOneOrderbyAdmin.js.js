import  {useParams} from 'react-router-dom'
import React,{useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import {useDispatch, useSelector,} from 'react-redux'
import { getOneorder } from '../actions/orderAction'


function GetOneOrderbyAdmin() {
  
 
  

    const orderid = useParams().foodid
   

    const dispatch = useDispatch();

    dispatch(getOneorder(orderid))
    useEffect (()=>{
      
  

  
    console.log("🚀 ~ file: GetOneOrderbyAdmin.js.js ~ line 26 ~ useEffect ~ orderid", orderid)
    
    dispatch(getOneorder(orderid))
          
    } , [dispatch,orderid])
  const {order} = useSelector(state=>state.orders)

    
  return (

    <div>

      <div className="card text-left">
        <img className="card-img-top" src="holder.js/100px180/" alt=""/>
        <div className="card-body">
          <h4 className="card-title">List des repas</h4>
          <p className="card-text">Body</p>
        </div>
      </div>

<div>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-warning">
        <h5 className="modal-title " id="exampleModalLabel"> Order </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div class="modal-body">
  
      </div>
      <div class="modal-body">
     Address :    {order.address}
      </div>
      <div class="modal-body">
     Total :    {order.total}
      </div>
      <div class="modal-body">
     Les repas selectionné  :
     {order.orderItems.map((items)=>(

       <div class="card text-left">
        {/* <img id='stars-hotel'  style={{"height" : "80px", "width" : "140px"}} src={"http://localhost:3000/"+items.image_cover} alt="BigCo Inc. logo"/> */}
         <div class="card-body">
           <h4 class="card-title">{items.name}</h4>
           <p class="card-text">price : {items.price}</p>
           <p class="card-text">count : {items.count}</p>

         </div>
       </div>

))}

      </div>
      



      <form >
      <div className="form-group">
       
   
  </div>
  </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
  
      
     
             
    
            
          
         
      
               

    </div>
  )
}

export default GetOneOrderbyAdmin