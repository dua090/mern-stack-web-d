// saymyname("manu");

// function saymyname(finalname) {
//     console.log(finalname);
// }
// console.log(age);
// // if var is writendown after printing only declaration is shifted to top scop from current scope
// // var age = 22;
// console.log(age);
// let age = 25;
// console.log(saymyname);
// not possible in ths case
// let saymyname = function() {
//     console.log("manu");
// }
//class hosting
// const object = new human();

// class human {

//}
// let greet = function() {
//         console.log("hello");
//     }
//     // greet();
// function greetme(greet, fullname) {
//     console.log("hello", fullname);
//     greet();
// }
// greetme(greet, "manu");
//return functions
// function solve(number) {
//     return function(number) {
//         return number * number;
//     }
// }
// let solvee = solve();
// console.log(solvee(3));
// using aray we can define
// const arr = [
//     function(a, b) {
//         return (a + b);
//     },
//     function(a, b) {
//         return (a - b);
//     },
//     function(a, b) {
//         return (a * b);
//     }
// ]
// let first = arr[2];
// let second = first[1, 3];
// console.log(first(2, 3));
// object also
// let obj = {
//     name: "manu",
//     wt: 24,
//     greet: function() {
//         console.log("hello");
//     }
// }
// console.log(obj.wt);
// obj.greet();
//function expression
console.log(greet);
var greet = function() {
    console.log("hello", name);
}