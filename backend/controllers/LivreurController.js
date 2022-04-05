const liv_id = require("../models/User")
const Order = require('../models/Order');

 

const getSingleOrderlivr = async (req, res) => {
    
  // let food = order.orderItems[0].food
  // create a new booking
  const order = await Order.findById(req.params.orderId).populate('user_id')
  .populate('orderItems.food')


   res.status(200).json({
     success:true,
     order
   })


  

};





const order_delivery = async (req, res) => {
  const order_id = req.params.orderId;
  const id_livreur = req.body.liv_id;
  const id_order = await Order.find({ _id: order_id });
  console.log("🚀 ~ file: LivreurController.js ~ line 43 ~ constorder_delivery= ~ id_order", id_order[0].liv_id)
  if (id_order[0].liv_id === null) {
    try {
      await Order.updateOne(
        { _id: order_id },
        {
          $set: {
            liv_id: id_livreur,
          },
        }
      );

      res.status(200).json({ success: true, data: id_order });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false, data: [], error: error });
    }
  } else {
    res
      .status(404)
      .json({
        success: false,
        data: [],
        error: "c'est command deja reserv par autre livreur",
      });
  }
};
const LivreurUpdateOrderStatus = async (req,res) =>{
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
  getSingleOrderlivr,
  order_delivery,
  LivreurUpdateOrderStatus,

};