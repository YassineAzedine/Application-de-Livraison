const router = require("express").Router();
const {addProductToHistory} = require('../middlewares/user')

const {

  userAuth,

  checkRole
} = require("../controllers/Auth");


const {
    createOrder,
    getstatus,
    getSingleOrder,
    getorders,
    getSingleOrderAdmin,
    allOrders,
    deleteorder,
    AdminUpdateOrderStatus,
    sendEmail,
    updatestatus
  } = require("../controllers/OrdersController");


  

  router.post('/add',[userAuth],
  function(req,res){
    createOrder(req,res) ,
    sendEmail(req,res)
  })
 

 



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
router.get('/admin/allOrders/:orderId', async(req,res)=>{
  await   getSingleOrderAdmin(req,res);   
});


router.patch('/admin/order/:orderId',async(req,res)=>{
  await   AdminUpdateOrderStatus(req,res);
});


router.get('/admin/stt', async(req,res)=>{  
  await   getstatus(req,res);   
});
router.patch('/admin/stt/:orderId', async(req,res)=>{  
  await   updatestatus(req,res);   
});

router.get('/livreur/stt',  async(req,res)=>{
  await   getstatus(req,res);   
}); 

// router.patch('/livreur/stt/:orderId', async(req,res)=>{
//   await   updatestatus(req,res);   
// });





//less secure app access
//accès aux applications moins sécurisé

module.exports = router;
