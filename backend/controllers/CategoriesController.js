const Food = require("../models/Food")

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find()
    res.status(200).json({ success: true, data: foods })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getfood = async (req, res) => {
  const foodId = req.params.foodId
  try {
    const food = await Food.find({ _id: foodId })
    res.status(200).json({ success: true, data: food })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const creatFood = async (req, res) => {
 
  try {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price

  


    const newFood = new Food({
      name: name,
      description: description,
      price:price
   
    


    })
    if (req.file) {
      newFood.image_cover = req.file.path
    }
    const saveFood = await newFood.save()
    console.log("🚀 ~ file: FoodsController.js ~ line 44 ~ creatFood ~ saveFood", saveFood)
    res.status(201).json({ success: true, data: saveFood })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const updateFood = async (req, res) => {
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