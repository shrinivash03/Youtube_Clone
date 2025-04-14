import multer from "multer";

 


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {

      cb(null,  file.originalname )
    }
  })
  
  export const upload = multer({ 
    storage,
})




 //==>Multer is a middleware for Node.js that simplifies the process of handling file uploads. 
//==> Multer:It extracts files from the request and stores them in memory or on the local file system.
//==> Disk Storage: Files are saved directly to a specified directory on the server.
//==>File Validation and Restrictions like Set limits on file size., Filter files based on type
//==> Support for Single and Multiple File Uploads