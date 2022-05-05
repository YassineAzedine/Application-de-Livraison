const Category = require("../models/Category")

const getCategories = async (req, res) => {
  try {
    const category = await Category.find()
    res.status(200).json({ success: true, category })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getCategory = async (req, res) => {
  const categoryId = req.params.categoryId
  try {
    const category = await Category.findById({ _id: categoryId })
    res.status(200).json({ success: true,  category })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const creatCategory = async (req, res) => {
 
  try {
    const name = req.body.name
 
  


    const newCategory = new Category({
      name: name,
  
   
    


    })
  
    const saveCategory = await newCategory.save()
    console.log("🚀 ~ file: FoodsController.js ~ line 44 ~ creatFood ~ saveFood", saveCategory)
    res.status(201).json({ success: true, category: saveCategory })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const updateCategory = async (req, res) => {
console.log("🚀 ~ file: CategoriesController.js ~ line 47 ~ updateCategory ~ req", req.body)
  const categoryId = req.params.categoryId
  const { name } = req.body


 

  try {
    const updatedcategoryData = await Category.updateOne({ _id: categoryId }, {
      $set: {
        name: name,
       
      }
      
    })

  
      
    res.status(201).json({ success: true, data: updatedcategoryData })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const deletcategory = async (req, res) => {
  const categoryId = req.params.categoryId
  try {
  const data =   await Category.remove({ _id: categoryId })

    res.status(200).json({ success: true, data: data })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}







module.exports = {
  getCategories,
  getCategory,
  creatCategory,
  updateCategory,
  deletcategory,

};