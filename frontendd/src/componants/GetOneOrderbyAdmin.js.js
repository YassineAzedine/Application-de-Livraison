import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
const GetOneOrderbyAdmin = props => {

  let navigate = useNavigate();
  const initialOrderState = {
   
  };
  const [currentOrder, setCurrentOrder] = useState(initialOrderState);
  const [message, setMessage] = useState("");
  const { id }= useParams();
  const getOrder =async (id) => {

  await  axios.get('http://localhost:5000/api/orders/admin/allOrders/'+ id)
      .then(response => {
      console.log("🚀 ~ file: GetOneOrderbyAdmin.js.js ~ line 20 ~ response", response.oneorder)

        setCurrentOrder(response.data.oneorder);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
    getOrder(id);
    
  }, [id]);

    
  return (

    <div>

<div class="jumbotron desing">
            <h1 class="display-3 text-danger "></h1>

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
      <div >
      <div class="modal-body">
   
      </div>
      <div class="modal-body">
     order by :  <strong>{currentOrder.user_id && currentOrder.user_id.name}</strong>  
      </div>
      <div class="modal-body">
     Address :    {currentOrder.address}
      </div>
      </div>
      <div class="modal-body">
     Les repas selectionné  :

      </div>
      <div className="list-group">
          {currentOrder.orderItems &&
            currentOrder.orderItems.map((order, index) => (
            
              <div class="card text-left">
                {/* <img class="card-img-top" src="holder.js/100px180/" alt=""/> */}
                <div class="card-body">
                  <h4 class="card-title">name : {order.name}</h4>
                  <p class="card-text">prix : {order.price}</p>
                  <p class="card-text">count : {order.count}</p>

                </div>
              </div>
          

            ))}
        </div>
 

        <div class="modal-body">
     Total :  <strong> {currentOrder.total} DH</strong> 
      </div>
      <div class="modal-body">
     Status :   <strong className="text-warning">{ currentOrder.status }</strong> 
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

    
  
