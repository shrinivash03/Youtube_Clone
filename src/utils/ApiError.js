class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors=[], //Stores an array of detailed errors 
        stack=""

    ){
        super(message)  //super() calls the parent class (Error) constructor.
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors 


        if(stack){
            this.stack=stack

        }else{
            Error.captureStackTrace(this, this.con)
        }

       

    }
}  
export {ApiError}