const { data } = require('autoprefixer')
const { error } = require('console')
const fs =require('fs')
//!reading file

// //reading file
// // console.log("before reading...")
// // fs.readFile("input.txt", 'utf-8',(err,data)=>{
// //     if(err)  throw err;
// //     console.log(data);

// // })
// // console.log("after reading")
// // const data =fs.readFileSync("input.txt","utf-8");
// // console.log(data);
// //!writing file
// fs.writeFile("input.txt","hello world444",(err)=>{
//     if(err) throw err;
// })
// //!append file
// fs.appendFile("input.txt","\nhello world",(err)=>{
//     if(err) throw err;
// })
// //!unlink file
// // fs.unlink("input.txt",(err)=>{
// //     if(err) throw err;
// // })
//!recommended
// const readstream =fs.createReadStream("input.txt","utf-8")
// //  console.log(readstream);
// readstream.on('data',(chunk)=>{
//     console.log(chunk);
// })
// readstream.on('end',()=>{
//     console.log("end of file");
// })

// const writestream = fs.createWriteStream("input.txt","utf-8");
// writestream.write("hello world");
//pipe 
const readstream = fs.createReadStream("input.txt","utf-8");
const writestream = fs.createWriteStream("output.txt","utf-8");
readstream.pipe(writestream);