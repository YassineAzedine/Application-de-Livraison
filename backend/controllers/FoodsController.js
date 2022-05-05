const Food = require("../models/Food")
const Category = require("../models/Category")

const APIFeatures = require('../utils/apiFeatures')
const getFoods = async (req, res) => {
console.log("🚀 ~ file: FoodsController.js ~ line 6 ~ getFoods ~ req", req.query)

  try {
    const apiFeatures = new APIFeatures(Food.find().populate('category'),req.query)
    .filter()
    
        const foods = await apiFeatures.query;
  
    res.status(200).json({ success: true,  foods })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getfood = async (req, res) => {
  const foodId = req.params.foodId

  console.log("🚀 ~ file: FoodsController.js ~ line 13 ~ getfood ~ foodId", foodId)
  try {
    const food = await Food.findById({ _id: foodId })
    res.status(200).json({ success: true,  food })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const creatFood = async (req, res) => {
console.log("🚀 ~ file: FoodsController.js ~ line 32 ~ creatFood ~ req", req.file)
console.log("🚀 ~ file: FoodsController.js ~ line 32 ~ creatFood ~ req", req.body)

 
  try {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const category = req.body.category


  


    const newFood = new Food({
      name: name,
      description: description,
      price:price,
      category:category

      
   
    


    })
  
    if (req.file) {
      newFood.image_cover = req.file.originalname
    }
    const saveFood = await newFood.save()
    console.log("🚀 ~ file: FoodsController.js ~ line 44 ~ creatFood ~ saveFood", saveFood)
    res.status(201).json({ success: true, data: saveFood })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const updateFood = async (req, res) => {
console.log("🚀 ~ file: FoodsController.js ~ line 71 ~ updateFood ~ req", req.body)
  const foodId = req.params.foodId
  const { name } = req.body
  const { description } = req.body
  const { price } = req.body

 

  try {
    const updatedfoodData = await Food.updateOne({ _id: foodId }, {
      $set: {
        name: name,
        description: description,
        price:price
      }
      
      
    })
    

  
      
    res.status(201).json({ success: true, data: updatedfoodData })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const deletFood = async (req, res) => {
  const foodId = req.params.foodId
  try {
    await Food.remove({ _id: foodId })

    res.status(200).json({ success: true, data: deletFood })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}







module.exports = {
  getFoods,
  getfood,
  creatFood,
  updateFood,
  deletFood,

};