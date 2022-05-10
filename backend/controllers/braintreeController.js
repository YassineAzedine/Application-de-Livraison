const braintree = require("braintree");
require("dotenv").config();

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId:'vyj2pzyz66pkwn39' ,
  publicKey:'ndhnhq6v4mg23nbd' ,
  privateKey:'5f59d50891b10d85addb1553a8e7d471'
});

exports.generateToken = (req,res)=>{
console.log("🚀 ~ file: braintreeController.js ~ line 12 ~ req", req)
    gateway.clientToken.generate({}, (err, response) => {
        if(err){
            return res.status(500).json({Error:err })
        }
        res.json({token:response.clientToken});
      }); 

}

exports.processPayment = (req,res)=>{
console.log("🚀 ~ file: braintreeController.js ~ line 23 ~ req", req.body)
// let amount = req.body.body.amount
  //  console.log("🚀 ~ file: braintreeController.js ~ line 24 ~ amount", amount)
  // let paymentMethodNone =req.body.body.paymentMethodNonce
  
  let  {amount , paymentMethodNonce} = req.body
  console.log("🚀 ~ file: braintreeController.js ~ line 29 ~ paymentMethodNone", paymentMethodNonce)
  console.log("🚀 ~ file: braintreeController.js ~ line 29 ~ amount", amount)
  
  gateway.transaction.sale({
    amount,
    paymentMethodNonce,
    options : {
      submitForSettlement:true
    }
  },(err,result)=>{
    if(err){
    return  res.status(500).send(err)
    }
    res.send(result)
  })
}