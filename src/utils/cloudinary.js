import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

//Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });



    const uploadOnCloudinary= async (localFilePath)=>{
        try{
           // console.log("Upload function called with:", localFilePath);
            if(!localFilePath) return null
            //upload the file on cloudinary
            const response =await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
             
            fs.unlinkSync(localFilePath)
        /*   ==>The fs.unlinkSync() method is part of Node.js's fs (File System) module.
             ==> It is used to synchronously delete a file from the file system.
             The "sync" in its name indicates that it operates synchronously, meaning it 
             blocks the execution of subsequent code
             ==> delete the local file after it has been successfully uploaded to Cloudinary.
         */
            //resource type means file types eg:pdf,mp4,jpg etc...
            //file is uploaded successfully
            
             console.log("file is uploaded on cloudinary",response.url);
            return response;

        }

        catch(error){
            fs.unlinkSync(localFilePath)//remove thelocally saved temporary file as the operation got failed
            return null;
        }
    }



    //If there’s an error
   //The locally saved temporary file is deleted using fs.unlink().

    export {uploadOnCloudinary}