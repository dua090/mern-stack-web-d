// let firstpromise = new Promise((resolve, reject) => {
//     console.log("manu");
//     reject(new Error("internal error"));
// });
//  function saymyname(){
//     console.log("myname is manu");
//  }
//  setTimeout(saymyname,5000);
//  // u can write like this also 
//  let firstpromise = new Promise((resolve, reject)=>{
//     setTimeout(function saymyname() {
//         console.log("myname is manu");
//         }, 5000);
//         resolve (1);

//  });
// let Promise1 = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve(10);

//         // resolve("promise fullfilled");
//         }
//         else{
//             // reject("promise rejected");
//             reject(-1);
//         }
// });
// promise1. then ((message)=> {
//     console. log("first msg:" + message);
//     return "Promise fulfilled second message";
//     }). then ((message)=> {
//     console. log ("second msg: " + message);
//     return "Promise fulfilled third message";
//     }). then ((message)=> {
//     console. log("third msg: " + message);
//     }).catch ((error)=>{
//         console. log("error: " + error);
//     }).finally((message)=>{
//         console.log("finally message: " + message);
//     })
//     ;
// Promise1.then((message)=>{
//     console.log("the message is"+message);
// }).catch((Error)=>{
//     console.log("error is "+Error);
// });
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first")
});
let Promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first")
});
let Promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first")
});
Promise.all([promise1,Promise2,Promise3])
.then((values)=>{
console.log(values);
}).catch((Error )=>{
    console.log("error");
})
;