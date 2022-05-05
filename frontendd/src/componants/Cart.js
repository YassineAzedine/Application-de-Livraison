import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_TO_CART } from '../constants/cartContants';
import { isAuthenticated } from '../componants/Header';
import { DeleteFromCart } from '../actions/CartAction';

import jwtdecode from "jwt-decode";
import toaster from 'toastr'

import "toastr/build/toastr.css"

import axios from 'axios'
function Cart({ history }) {
  const [values, setvalues] = useState({

    address: "",
    


  });
  const jwt =  localStorage.getItem('token');
  const JWT1 =jwtdecode(jwt);
  console.log("🚀 ~ file: LivreurOrder.js ~ line 11 ~ LivreurOrder ~ JWT1", JWT1)
  const user = JWT1;
  console.log("🚀 ~ file: Cart.js ~ line 17 ~ Cart ~ jwt", jwt)
  const orderItems = JSON.parse(localStorage.getItem('cart'));
  console.log("🚀 ~ file: Cart.js ~ line 23 ~ Cart ~ orderItems", orderItems)
  const submit = (e) => {

    e.preventDefault();
      const data = {
        address : values.address,
        orderItems
       } 
      axios.post(`http://localhost:5000/api/orders/add/`,
      
      
      data,
      
     {
          
     
       
        // orderItems,
        headers: {
          'Content-type': 'application/json',
          'Authorization':jwt , // notice the Bearer before your token
      },
    
       
      }).then( (res)=>{
      console.log("🚀 ~ file: Cart.js ~ line 50 ~ submit ~ res", )

     

     if('err'){
       console.log(res.err);
     }
     return  toaster.info('la commande passé , la facture est envoyée  par e-mail', {
      positionClass: "toast-bottom-left",
      hideDuration: "1000",
     })

     
    }

    )


  };
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch();


  const addOrder = () => {
    // axios.post(`http:/localhost:5000/api/orders/add`,cart).then( (res)=>{

    //  if('err'){
    //    console.log(res.err);
    //  }
    //  return res
    // }

    // )
  }
  const handle = (event) => {
    

    const newdata = { ...values };


    newdata[event.target.id] = event.target.value;
    setvalues(newdata);


    console.log(newdata);





  };
 


  const handleQtychange = (e, food) => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    cart.forEach(cartItem => {
      if (cartItem._id === food._id) {
        cartItem.count = e.target.value
      }

    })
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart
    })

  };
  return (
    <div>

      <section className='cart-page m-4 '>
        {cart.length <= 0 ? (
          <div class="jumbotron">
            <h1 class="display-3">cart is empty</h1>

          </div>
        ) : (
          <div class="jumbotron desing">
            <h1 class="display-3 text-danger ">shop new</h1>

          </div>
        )}
      </section>
      <div className="row">
        <div className="col-8">
          <table class="table border">
            <thead>
              <tr className='border'>
                <th scope="col"></th>
                <th scope="col">image</th>

                <th scope="col">Food</th>
                <th scope="col">Price</th>
                <th scope="col">QTY</th>
                <th scope="col ">Remove</th>

              </tr>
            </thead>
            <tbody>
              {
                cart.map(food => (



                  <tr key={food._id}>
                    <th scope="row">1</th>
                    {/* <td > <img className='img-fluid' style={{ "height": "80px", "width": "100px" }} src={"https://www.docteurclic.com/galerie-photos/image_3328_400.jpg"} alt="BigCo Inc. logo" /></td> */}

                    <td > <img id='stars-hotel'  style={{"height" : "80px", "width" : "140px"}} src={"http://localhost:3000/"+food.image_cover} alt="BigCo Inc. logo"/></td>

                    <td>
                      <Link to={'/food/' + food._id}>

                        {food.name}

                      </Link>

                    </td>
                    <td>{food.price} DH</td>
                    <td>
                      <input type="number" name="" min="1" max="5" value={food.count}

                        onChange={e => handleQtychange(e, food)}

                      />
                    </td>
                    <td>


                      <button className='btn  text-danger' 
                        onClick={()=>dispatch(DeleteFromCart(food))}
                      
                      >
                        <i class="fa fa-trash" ></i>
                      
                      </button>

                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-4 border-left">
          cart summary goes here : 
          <p>{cart.length === 1 ? `(1) : Item` : `(${cart.length})  Items`}</p>
          <p className='font-weight-bold'> Total :
            {cart.reduce(

              (currentSum, currentCartItem) =>
                currentSum +
                currentCartItem.count *
                currentCartItem.price,
              0
            )}
            DH
          </p>
          <form onSubmit={submit}>
            <div className=" mb-4">
              <label className="form-label">address : </label>

              <div className="form-outline">
   
                <textarea
                  type="text"
                  id="address"
                  rows="3" cols="33"
                  onChange={(event) => handle(event)}
                  name="address"
                  className="form-control form-control-lg"
                />
                {/* {JSON.stringify(values)} */}
              </div>
            </div>
            <button className='btn btn-outline-warning btn-primary' >
              Order new
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart