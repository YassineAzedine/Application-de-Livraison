const User = require("../models/User");
const {findOneAndUpdate} = require("../models/User")

exports.addProductToHistory = (req,res,next)=>{
console.log("🚀 ~ file: user.js ~ line 5 ~ req", req.user._id)
console.log("🚀 ~ file: user.js ~ line 5 ~ req", req.body)

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

      
        User.findOneAndUpdate({_id:req.user._id},
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