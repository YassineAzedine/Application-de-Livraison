
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
            type: String,
            required: true
        },
        image_cover: {
            type: String,
            required: true
        },
   
      
    },

);
module.exports = model("food", FoodSchema);