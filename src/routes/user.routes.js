import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middeleware.js";  
const router=Router()

router.route("/register").post(
    
    upload.fields([
        {   
            name:"avatar",
            maxCount: 1
        },
//'avatars' is the key name, allowing up to 1 files
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    
    //fields is used to upload multiples files
    
    registerUser
)


export default router


