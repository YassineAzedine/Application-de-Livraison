

// import request from "supertest";
// import app from "../index" ;
// describe('test',()=>{
//   test("create", async ()=>{
// const res = await request(app).post("/api/foods/add").send({
    
//    title:"Create foods"
// })
//     expect(res.body).toHaveProperty("msg");
//     expect(res.body).toHaveProperty("record");

  
//   })

// }) 















// const {
//     getFoods,
//     getfood,
//     creatFood,
//     updateFood,
//     deletFood,
// } = require("../controllers/FoodsController");
// const Food = require("../models/Food")



// describe('get foods', ()=>{
//  it('getFoods' , async ()=>{
//     try {
  
//         const foods = await Food.find()
//         res.status(200).json({ success: true, data: foods })
//         console.log(res);
     
//       } catch (error) {
//         res.status(409).json({ success: false, data: [], error: error })
//       }
//  })
// })   
const request = require('supertest')
const {createServer} = require('../serveurutil/serverutile')
const {DB, PORT}= require("../config");
const  mongoose  = require('mongoose');
const { connect } = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const { response } = require('express');

const db = connect('mongodb://localhost:27017/AppDelivery');

const app = createServer()

describe('foods',  () => {
    jest.setTimeout(10000)
    beforeAll(async () => {
        await MongoMemoryServer            
    });
  

    test('should return get all foods', async () => {

    await request(app)
    .get("/api/foods")
    .expect( 200)
    .then((response)=>{
        expect(Array.isArray(response._body.data)).toBeTruthy()

        expect(response._body.length).toEqual()
    })
    

    }
    );
});