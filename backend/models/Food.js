
const { Schema,model } = require('mongoose');
const FoodSchema = new Schema   (
    {
        name: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },  
        image_cover: {
            type: String,
            required: true
        },
   
        category: 

        { 
            type: String,
             required : [true, 'Please select catrgory for this food'],

            enum:{
             values: ["Takos","Pizza","Plats","Desserts" , ]

            }
            
            

            // type: Schema.Types.ObjectId, ref:'Category' 
        },
    },

);
module.exports = model("food", FoodSchema);