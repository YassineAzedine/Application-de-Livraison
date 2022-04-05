const User = require("../models/User")

const getUsers = async (req, res, role) => {
  try {
    const users = await User.find({role:role})
    res.status(200).json({ success: true, data: users })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getOneuser = async (req, res) => {
  const Id = req.params.Id
  console.log("🚀 ~ file: UserController.js ~ line 13 ~ getOneuser ~ Id", Id)
  try {
    const users = await User.find({ _id: Id })
    res.status(200).json({ success: true, data: users })
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
    res.status(201).json({ success: true, data: saveCategory })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const updateCategory = async (req, res) => {
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

const deletuser = async (req, res) => {
  const Id = req.params.Id
  try {
  const data =   await User.remove({ _id: Id })

    res.status(200).json({ success: true, data: data })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}







module.exports = {
    getUsers,
    getOneuser,
    deletuser

};