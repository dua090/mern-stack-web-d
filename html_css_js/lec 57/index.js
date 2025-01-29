// async function getdata() {
//     setTimeout(function() {
//         console.log("vhfch g");
        
//     }, 3000);
    
// }
// let output =getdata();
// //await-?

// //fetch api-?
// // we need to mark function as async
// async function getdata() {
//     //get request -asynch
// let response= await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
// //parse json -async
// let data=await response.json();
// console.log(data);
    

// }
// getdata();
//scenario;
//prepare url /api endpoint->sync
//await //fetch data->network call->asnc data
//prrocess data->sync

//fetch api post
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url ="https://jsonplaceholder.typicode.com/comments?postId=1"
const options={
  method: "POST",
  body: JSON.stringify({ username: "manu dua" }),
  headers: myHeaders,
};
async function getdata() {
    const url ="https://jsonplaceholder.typicode.com/"
    const response = await fetch(url);
    let data =await response.json();
    console.log("get data",data);
    
}
async function postdata() {
const response = await fetch(url,options);    
let data = await response.json();
console.log("my data",data); 
    
}
async function processdata() {
    await postdata();
await getdata();
}
processdata();
