import { Router } from "express";
import { loggedOut, loginUser, registerUser } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";
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

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, loggedOut)

export default router


