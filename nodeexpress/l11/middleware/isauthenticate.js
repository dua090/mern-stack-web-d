export const isuathenticate=
(req,res,next)=>{//jb tk call ni krte next ko tbtk chlta rhega 
    console.log("middleware 1");
    next();
}