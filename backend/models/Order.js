
const { Schema,model } = require('mongoose');
const OrderSchema = new Schema   (
    {
     
        address: {
            type: String,
            required: true,
        },
        status:{
            type:String,
            default:"new",
            enum:["new","inprogress", "inliv","delivred","done"]
        },
     
     
        total: {
            type: Number,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId, ref:'users' ,
            required: false
        },
        paidAt : {

            type:Date
        },


        liv_id: {
            default:null,
            type: Schema.Types.ObjectId, ref:'users' ,
            
        },
        orderItems : [
            {
                name : {
                    type: String,
                    required:true
                },
                count : {
                    type: Number,
                    required:true
                },
                price : {
                    type: Number,
                    required:true
                },
                food: 
                { 
                    type: Schema.Types.ObjectId, ref:'food' 
                },
                
            }
        ],
        createdAt : {
            type: Date,
            default: Date.now
        }

        
      
   
      
    },

);
module.exports = model("order", OrderSchema);