const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
    getUsers,
    getOneuser,
    deletuser

} = require("../controllers/UserController");







router.get('/', async(req,res)=>{
  await getUsers(req,res,"user");
});
// router.post("/add" ,  creatCategory);
router.get('/:Id', async(req,res)=>{
  await getOneuser(req,res);
});

// router.patch("/:categoryId",   updateCategory);
router.delete("/:Id",  deletuser);



module.exports = router;