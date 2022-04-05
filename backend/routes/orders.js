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
   
    allOrders,
    deleteorder,
    AdminUpdateOrderStatus,
  } = require("../controllers/OrdersController");


  

  router.post('/add',[userAuth,addProductToHistory], (req,res)=> createOrder(req,res));

router.get('/', async(req,res)=>{
  await   getorders(req,res);   
});
router.get('/:id', async(req,res)=>{
  await   getSingleOrder(req,res);
});
router.delete('/:id', async(req,res)=>{
  await   deleteorder(req,res);
});



router.get('/admin/allOrders', async(req,res)=>{
  await   allOrders(req,res);   
});


router.patch('/admin/allOrders/:orderId', async(req,res)=>{
  await   AdminUpdateOrderStatus(req,res);
});








module.exports = router;
