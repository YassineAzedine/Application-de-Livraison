exports.getstatuss = (req,res,next)=>{
    const stt = Order.schema.path('status').enumValues
     res.json({ status:stt})
      
     if(stt[0] ==="done"){
        next()
     }
    
   }
  