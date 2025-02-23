const express =require("express");
const app =express();
const port = process.env.port||3000;
app.get("/",(req,res,next)=>{
    res.send(`<div>
        <h1>mehak kumar dua</h1>
        </div>`)
        next();
});
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
    
})