//import { Next } from "react-bootstrap/esm/PageItem"
//we are using promise here
const asyncHandler=(requestHandler)=>{ 
 return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((err)=> next(err))
 }
}

export {asyncHandler}

//next – a callback function to pass control to the next middleware, or to pass errors.
//next(err) passes the error to Express's built-in error handler.





// const asyncHandler=()=>{}
// const asyncHandler=(func) => () => {}

// const asyncHandler=(func) => async() => {}

// //we uses try catches
// const asyncHandler=(fn)=>async(req,res,next)=>{

//     try{
//         await func(req,res,next)

//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }