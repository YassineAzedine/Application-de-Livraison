const User = require("../models/User");
const {findOneAndUpdate} = require("../models/User")

exports.addProductToHistory = (req,res,next)=>{
    let history = [];

   history = req.body.orderItems.map(orderItem=>{

       return {
     
        qty : orderItem.qty,
        price : orderItem.price,
        food : orderItem.food,
        total : orderItem.price *  orderItem.qty
        
       }


    })
    if(history.length){
      
        User.findOneAndUpdate({_id:req.body.user_id},
            {$push:{history: history}},
            {new:true},
            (err,data)=>{
                if(err){
                    return res.status(400).json({error:'Could Not update user History'})
                }
            return  next();
    
        })
    }
    next()



} 