const router = require("express").Router();
const {

    userAuth,
  
    checkRole
  } = require("../controllers/Auth");
  const {
    generateToken,
    processPayment
    


} = require("../controllers/braintreeController");

router.get("/getToken/:userid",userAuth, generateToken);
router.post("/purchase/:userid",userAuth, processPayment);

module.exports = router;
