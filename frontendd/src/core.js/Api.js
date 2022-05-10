
import axios from 'axios'
import jwtdecode from "jwt-decode";
import toaster from 'toastr'

import "toastr/build/toastr.css"
export const getBraintree = (userid) => {
    const jwt = localStorage.getItem('token');

    return axios.get('http://localhost:5000/api/braintree/getToken/' + userid, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': jwt, // notice the Bearer before your token
        },
    })
        .then((res) => {
            if (res.data.token) {

                return res.data.token
            }



        })

}
export const processpayment =  async (userid,paymentdata,orderItems) => {
console.log("🚀 ~ file: api.js ~ line 27 ~ processpayment ~ orderItems", orderItems)

    const jwt = localStorage.getItem('token');
    console.log("🚀 ~ file: api.js ~ line 28 ~ processpayment ~ jwt", jwt)
    const JWT1 =jwtdecode(jwt);
    const user = JWT1;
    console.log("🚀 ~ file: api.js ~ line 26 ~ processpssssssayment ~ jwtczczczcz", jwt)

    try {
        const braintreeTransaction = await fetch(`http://localhost:5000/api/braintree/purchase/${userid}`,  {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: ` ${jwt}`
            },
            body: JSON.stringify(paymentdata),
          
        })
        return await braintreeTransaction.json();
    } catch (err) {
        console.log(err)
    }

}
export const createorder = (datas) => {
    const jwt = localStorage.getItem('token');
    const orderItems = JSON.parse(localStorage.getItem('cart'));
 
      axios.post(`http://localhost:5000/api/orders/add/`,


      datas,

      {



        // orderItems,
        headers: {
          'Content-type': 'application/json',
          'Authorization': jwt, // notice the Bearer before your token
        },


      }).then((res) => {



        if ('err') {
          console.log(res.err);
        }
        return toaster.info('la commande passé, le payment effectuéé , la facture est envoyée  par e-mail', {
          positionClass: "toast-bottom-left",
          hideDuration: "1000",
        })


      }

      )

}
export const getOneOrder = (idorder) => {
  const jwt = localStorage.getItem('token');

  return axios.get('http://localhost:5000/api/orders/admin/allOrders/'+idorder, {
      method: "GET",
      headers: {
          'Content-type': 'application/json',
          'Authorization': jwt, // notice the Bearer before your token
      },
  })
      .then((res) => {
          if (res) {

              return res.data.oneorder
          }



      })

}
