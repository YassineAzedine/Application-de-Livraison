const router = require("express").Router();
const {addProductToHistory} = require('../middlewares/user')
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");


const {
    createOrder,

    getSingleOrder,
    getorders,
    getSingleOrderAdmin,
    allOrders,
    deleteorder,
    AdminUpdateOrderStatus,
    sendEmail
  } = require("../controllers/OrdersController");


  

  router.post('/add',[userAuth,addProductToHistory], (req,res)=> createOrder(req,res));
  router.post('/add',[userAuth,addProductToHistory], (req,res)=> sendEmail(req,res));



router.get('/', async(req,res)=>{
  await   getorders(req,res);   
});
router.get('/:id', async(req,res)=>{
  await   getSingleOrder(req,res);
});
router.delete('/:id', async(req,res)=>{
  await   deleteorder(req,res);
});




router.get('/admin/allOrders',userAuth,checkRole(['admin']), async(req,res)=>{
  await   allOrders(req,res);   
});
router.get('/admin/allOrders/:id',userAuth,checkRole(['admin']), async(req,res)=>{
  await   getSingleOrderAdmin(req,res);   
});


router.patch('/admin/allOrders/:orderId',[userAuth] ,async(req,res)=>{
  await   AdminUpdateOrderStatus(req,res);
});








module.exports = router;
