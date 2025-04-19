// ***********connecting db through function*******
//import mongoose from "mongoose";
//import express from "express"
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";


// dotenv.config({
//     path: './env' 
// })
//console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET);

//connectDB() //this is wrong practise because this is promise based task 

//const app = express();

(async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 8000}`);
    });

    app.on("error", (error) => {
      console.error("Server Error:", error);
      throw error;
    });

  } catch (error) {
    console.error("MONGO DB connection failed !!!", error);
  }
})();










/* ****ALL CODE IN THIS FILE WE DON HAVE GO SOMEWHERE ELSE TO CONNECT DB******

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";

const app=express()



(async()=> {
     try{
    await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
   }
   catch(error){
    console.log("ERROR:",error)
    throw error

   }



}) ()

*/