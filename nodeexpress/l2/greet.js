function greet(){
    console.log("Hello, World!");
}
function sub(a,b){
   const res = a>b? a-b: b-a
   return res;

}
// module.exports =greet;
module.exports={
    greet,
    sub
}
// greet();