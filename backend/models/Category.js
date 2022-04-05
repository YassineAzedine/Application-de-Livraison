
const { Schema,model } = require('mongoose');
const CategorySchema = new Schema   (
    {
        name: {
            type: String,
            required: false,
        },
     
      
    
   
      
    },

);
module.exports = model("Category", CategorySchema);