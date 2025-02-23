import express from "express";
const app =express();
app.use(function(req,res,next){//jb tk call ni krte next ko tbtk chlta rhega 
    console.log("middleware 1");
    
    next();
})
app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");


})

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})