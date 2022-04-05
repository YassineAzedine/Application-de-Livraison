const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
    getFoods,
    
    getfood,
    creatFood,
    updateFood,
    deletFood,
} = require("../controllers/FoodsController");



const upload = require('../middlewares/upload')

router.post("/add" , upload.single('image_cover'),  creatFood);



router.get("/",/*userAuth,  checkRole(['admin']),*/ getFoods);

router.get("/:foodId",  getfood);
router.patch("/:foodId", upload.single('image_cover'),  updateFood);
router.delete("/:foodId",  deletFood);



module.exports = router;