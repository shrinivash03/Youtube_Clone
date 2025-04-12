import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

//when we use middleware or config setting we use app.use 
app.use(cors({
     origin:process.env.CORS_ORIGIN,
     Credential:true

}))


app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))//files stored in public file and eveyone should have access 

app.use(cookieParser()) 









export { app }