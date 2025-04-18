import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

//when we use middleware or config setting we use app.use 
app.use(cors({
     origin:process.env.CORS_ORIGIN,
     credentials:true

}))


app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))//files stored in public file and eveyone should have access 

app.use(cookieParser()) 


//Routes import
import  userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter);




// it work like that =>  http://localhost:8000//api/v1/users/register






export { app }