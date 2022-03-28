const cors = require("cors");
const bp = require("body-parser");
const exp = require("express");
const {success,error} = require('consola')
const {connect} = require("mongoose");
const passport= require("passport");
const app  = exp();
//views

app.use(bp.urlencoded({ extended: false }));


// parse application/json
app.use(bp.json());
app.get('/', (req, res) => {
    res.render('home');
});
//Bring in the app constants
const {DB, PORT}= require("./config");

//Initialize the application 


//Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());
require('./middlewares/passport')(passport);



//User Router Middleware
app.use("/api/users",require("./routes/users"));
app.use("/api/foods",require("./routes/foods"));



const startApp = async ()=>{
try{
    //connection with DB
    await connect(DB,{
       
        useNewUrlParser: true
      })
      success({message: `Successfully connected with the Database \n${DB}`,
      badge : true} ); 
      //Start Listenting for the serevr 
       app.listen(PORT, ()=>
        success({message: `Server started o PORT ${PORT}` , badge: true}));

}catch(err){

    error({message: `Unable to connect with Database connected with the Database \n${err}`,
    badge : true} );
    startApp();
}
}
startApp();
