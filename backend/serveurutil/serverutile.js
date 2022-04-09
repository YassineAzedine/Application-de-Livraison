//User Router Middleware
const cors = require("cors");
const bp = require("body-parser");
const exp = require("express");
const {success,error} = require('consola')
const {connect} = require("mongoose");
const passport= require("passport");
const app  = exp();
const {DB, PORT}= require("../config");
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

const createServer = () =>{
    app.use("/api/users", require("../routes/users"));
    app.use("/api/listusers",require("../routes/listusers"));
    app.use("/api/liverur",require("../routes/livreurs"));
     app.use("/api/foods",require("../routes/foods"));
    app.use("/api/orders",require("../routes/orders"));
    app.use("/api/categories",require("../routes/categories"));
    return app
}

module.exports = {createServer}