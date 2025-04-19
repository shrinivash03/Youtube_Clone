import {ApiError} from "../utils/ApiError.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"


    
       export const verifyJWT = asyncHandler(async(req,res,next)=>{

        try {
        
        //fetching token from user cookie or header file

        const token= req.cookies?.refreshToken || req.headers
        ["Authorization"]?.replace("Bearer ", "")
        
// console.log("Headers:", req.headers); 
//console.log("Token:",token)
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }
       
       //console.log("Loaded secret:", process.env.ACCESS_TOKEN_SECRET)
    
        const decodedToken= jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
// console.log("Decoded token",decodedToken)
        const user= await User.findById(decodedToken?._id).select
         ("-password -refreshToken")
     
         
        if(!user){
            //discuss about frontend 
            throw new ApiError(401, "Invalid Access Token")
         }
    
         req.user=user;
         next()
}

 catch (error) {
    
    throw new ApiError(401,error?.message ||
        "Invalid access token"
    )
}
       })


