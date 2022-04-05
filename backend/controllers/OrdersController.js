const Order = require('../models/Order');




const createOrder =  (req, res) => {
  try {
 
    const address = req.body.address
    const orderItems = req.body.orderItems
   
    const user_id = req.body.user_id
    const food_id = req.body.food_id
    const liv_id = req.body.liv_id
    let total = 0
    orderItems.forEach(orderItme =>{

        total += orderItme.price * orderItme.qty

      })
    const newOrder = new Order({
        address: address,
          total : total,
        user_id: user_id,
        liv_id: liv_id,
        orderItems:orderItems,  
        food_id:food_id

    })
  

  
    const saveOrder =  newOrder.save()
    res.status(201).json({ success: true, order: saveOrder  })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}


const getSingleOrder = async (req, res) => {
    
  // let food = order.orderItems[0].food
  // create a new booking
  const order = await Order.findById(req.params.id).populate('user_id')
  .populate('orderItems.food').populate('liv_id')


   res.status(200).json({
     success:true,
     order
   })


  

};


const getorders = async (req, res) => {

    
    try {
      const orders = await Order.find()
      
   
      res.status(200).json({success: true , order: orders})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }
  const allOrders = async (req, res) => {
      
    try {
      const orders = await Order.find()

         let totalAmount = 0
      orders.forEach(order =>{
        totalAmount += order.total
      })
     
      res.status(200).json({success: true , orders , totalAmount})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }



const deleteorder = async (req,res)=> {

  const id=req.params.id;
 

let orders = await Order.remove();
return res.status(200).json({
    success:true
  })
};
const AdminUpdateOrderStatus = async (req,res) =>{
  try{
    const orderId = req.params.orderId
    // const { status } = req.body.status
    const { status } = req.body

    const updateOrderStatus = await Order.updateOne({ _id: orderId }, {
      $set: {
        status:status
      }
  
      
    })
    console.log("🚀 ~ file: OrdersController.js ~ line 114 ~ updateOrderStatus ~ updateOrderStatus", updateOrderStatus)
  res.status(201).json({ success: true, data: updateOrderStatus })
  
  }catch{
    res.status(404).json({success: false , data: [], error: error})
  }
  



}






module.exports = {

    createOrder,
    getSingleOrder,
   
    getorders,
    AdminUpdateOrderStatus,
    allOrders,
    deleteorder

    };
