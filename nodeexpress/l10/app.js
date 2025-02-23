const express = require("express");
//1st step to create web server
const app = express();
//2nd step to create web server
// app.get
// app.post
// app.put
// app.delete
// app.patch
app.get("/home",(req,res)=>{
    res.send("<h1>welcome to my page</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>welcome to my about</h1>");
})
app.get("/api/v1/user/profile",(req,res)=>{
    // const user={
    //     name:"Rahul",
    //     age:25,
    //     email:"duamanu2003@gmail.com"
        
    // }
    res.status(200).json({
        name:"Rahul",
        success:
        {age:25,
        email:"duamanu2003@gmail.com"}
    })
    // res.send("<h1>heloo i am coming from express</h1>");
    res.send(user)
})
app.get("/api/v1/product/:productID/comment/:commentID",(req,res)=>{
    const productID = req.params.productID;
    const commentID = req.params.commentID;
    // const {productID,commentID}=req.params;//destructuring
    console.log(productID,commentID);
    const product={
        id:1,
        name:"Rahul",
        success:
        {age:25,
        email:"duamanu2003@gmail.com"}
    }

    res.status(200).json({
success:true,
product,
    })
    
})
app.listen(8000,()=>{
    console.log("server is running on port 8000");
}
)