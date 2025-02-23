const http = require("http")
const path =require("path")
const fs= require("fs");
// const { Console } = require("console");
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    const filepath =path.join("index.html")
    // const htmlcontent=fs.readFileSync(__dirname+"/index.html")   //yaad rkhna path ese hoga
    const htmlcontent=fs.readFileSync(filepath) 
    res.end(htmlcontent);
})
server.listen(3000);