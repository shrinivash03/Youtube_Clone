import { Router } from "express";
import {
    getCurrentUser,
    loggedOut,
    loginUser,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    refreshAccessToken,
    changeCurrentPasword,
    getWatchHistory,
    getUserChannelProfile } from "../controllers/user.controller.js";

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

router.route("/refresh-token").post(refreshAccessToken)


router.route("/changepassword").post(verifyJWT,changeCurrentPasword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)

router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)

router.route("/cover- image").patch(verifyJWT,upload.single("coverImage"),updateUserAvatar)

router.route("/c/:username").get(verifyJWT,getUserChannelProfile)


router.route("/history").get(verifyJWT,getWatchHistory)




export default router


