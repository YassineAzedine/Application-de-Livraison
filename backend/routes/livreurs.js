const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {


    getSingleOrderlivr,

    getstatus,
    order_delivery,
    LivreurUpdateOrderStatus,



} = require("../controllers/LivreurController");

router.get('/livreur/stt', async(req,res)=>{
  await   getstatus(req,res);   
});

router.get("/livreur/:orderId",  getSingleOrderlivr);
router.post("/livreur/:orderId",userAuth,checkRole(['livreur']),  order_delivery);
router.patch("/livreur/:orderId",  LivreurUpdateOrderStatus);






module.exports = router;