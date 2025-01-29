const greet= require("./greet.js").default;

// require("./greet.js"); //commonjs
// const greet = require("./greet.js").greet;
// console.log(greet.greet(2,3)); //commonjs
// greet(4,5);

console.log(greet.sub(2,3));
greet.greet();