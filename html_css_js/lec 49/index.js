// //object cloning and garbage collector in js
// //https://javascript.info/object-cloning
// // important for interview
// //dynamic nature object
// let obj = {
//     age:21,
//     wt:33,
//     ht:180
// };
// console.log(obj);
// obj.age  =77;
// console.log(obj);
// let a= {
//     name:"Rahul",
//     age:21,
//     wt:33,
//     ht:180
// };
// let b={
//     ...a// spread operator
// };
// console.log(b);
// let c ={
//     value: 77,
//     name:"Rahul",
//     age:21, 
//     wt:33,
//     ht:180
// }
// let b= Object.assign({},a,c);
// a.age= 7;
// console.log(b);
// console.log(a);
let iteration= {
    name:"Rahul",
    age:21,
    wt:33
}
let dest= {};
//cloning using iteration
for (let key in iteration) {
    // console.log(key);
    let newKey = key;
     let newValue=iteration[key];
     //insert newkwy and value in dest and create a clone
     dest[newKey]=newValue;

}
console.log(dest); 