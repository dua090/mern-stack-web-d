const http = require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req,res)=>{
    // if(req.url ==='/'){

    //    res.writeHead(200,{'Content-Type':'text/plain'});
    // res.end("home") 
    // }else if (req.url==="/api/user"){
    //     const user ={
    //         "name":"manu",
    //         "age":30,
    //         "email":"duamanu2003@gmail.com"
    //     }
    //     const data = JSON.stringify(user);
    //     console.log(JSON.parse(data));
    //     res.writeHead(200,{'Content-Type':'application/json'});
    // res.end(JSON.stringify(user))
    // }else if(req.url ==="/login"){
    //     res.writeHead(200,{'Content-Type':'text/plain'});
    //     res.end("login page")

    // }else if(req.url==="/signup"){
    //     res.writeHead(200,{'Content-Type':'text/plain'});
    //     res.end("signup page")
    // }else{
    //     res.writeHead(404,{'Content-Type':'text/html'});
    //     res.end("<h1>404 not found</h1>")
    // }

// handling post method
//get post patch delete put
if (req.method === 'POST'&&req.url ==='/submit') {
    let body = '';
    req.on('data', (chunk) => {
        body +=chunk.toString();//convert buffer to chunks
    })
    //end event triggered when all data sent
    req.on('end', () => {
    console.log(JSON.parse(body))
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({success:true,message:"account created succesfully"}))
    })
}else{
    res.writeHead(404,{'Content-Type':'application/json'});
    res.end(JSON.stringify({success:false,message:"not found"}))

    }
})
server.listen(8000, () => {
    console.log("sever  losten att port 8000")
})
