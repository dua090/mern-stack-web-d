// let obj = {
//     name: "manu",
//     "full name": "manu dua",
//     age: 21,
//     weight: "5ft 10inch",
//     greet: function manubhai() {
//         console.log("manu");
//     }
// };
// // for (let key in obj) {
// //     console.log(key, ' ', obj[key]);
// // }
// for (let value of "full name") {
//     console.log(value);
// }

// // };
// // console.log(obj);
// // obj.greet();
// // console.log(typeof(obj.greet()));
// let arr = [1, 3, 5, 6, 8];
// console.log(arr);
// // by using constructor
// let manu = new Array('manu', "bhai");
// // console.log(manu);
// // console.log(typeof(manu));
// // console.log(manu[2]);
// // manu.push('mnauu');
// // console.log(manu[2]);
// // manu.pop[2];
// // manu.shift();
// // manu.unshift('manuuuu');
// // //slice
// // console.log(manu);
// // console.log(manu.slice(1, 2));
// arr.splice(1, 0, 'manu', 'bhai', 'kya ', 'chalra ', 'h');
// console.log(arr);
//map function 
// let manu = new Array(10, 20, 30);
// console.log(manu);
// let aswer = manu.map((num) => {
//     return num * num;

// })
// console.log(aswer);
// manu.map((num) => {
//     console.log(num);
// })
// let arr = [19, 67, 88, 45, 88];
// let answer = arr.filter((num) => {
//     return num % 2 === 0;
//     // if (num % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// })
// console.log(answer);
// let array = ["1grubhfjvc", 3, 8769, "566uhfb", 77];

// let answerr = array.filter((Stringg) => {
//     if (typeof(Stringg) === "string") {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(answerr);
// let arr = [2, 23, 55, 66];
// let answer = arr.reduce((acc, curr) => {
//     return acc + curr;

// }, 0);
// console.log(answer);
// let arr = [10, 77, 44, 55, 2, 6, 0];
// arr.sort();
// let answerr = arr.find((nums) => {
//     if (nums % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(answerr);
// let arr = [10, 20, 30];
// let length = arr.length;
// console.log(length);
// arr.forEach((value, index) => {
//     console.log("number", value, "type", typeof(value));
// })
// let arr = [77, 33, 45, 89];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let index = 0; index < len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }
// let totalsum = getSum(arr);
// // console.log(totalsum); // Output: 244
// let arr = [77, 44, 65, 89];

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;

//     });
//     return sum;

// }
// let totalsum = getSum(arr);
// console.log(totalsum); // Output: 275