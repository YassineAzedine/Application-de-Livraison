const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
    getCategories,
  getCategory,
  creatCategory,
  updateCategory,
  deletcategory,

} = require("../controllers/CategoriesController");



router.post("/add" ,  creatCategory);



router.get("/",/*userAuth,  checkRole(['admin']),*/ getCategories);

router.get("/:categoryId",  getCategory);
router.patch("/:categoryId",   updateCategory);
router.delete("/:categoryId",  deletcategory);



module.exports = router;