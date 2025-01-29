// let a= 10;
// let b=20;

// console.log(a+b);


// function prerequiste
//function statement
function greet(){
console.log("manu hi");
}
greet();//invoke a function
//funnction are first class
function loggreet(fn){
    fn();
}
loggreet(greet);//invoke a function using another function
//function expression
const fn =function(){
    console.log("manu");
}
fn();//invoke a function
//use the expression on the fly
loggreet(function(){
    console.log("manu2");
});