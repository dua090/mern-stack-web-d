// // global scope
// var age = 15;

// console.log(age);


// {
//     console.log(age);

// }
// if (true) {
//     console.log(age);
// }

// for (let i = 0; i < 2; i++) {
//     console.log(age);
// }

// function sayhello() {
//     console.log("hello", age);
// }
// sayhello(55);


// function scope refer to notes
// function sayhello() {
//     var age = 20;
//     console.log("my age", age);
// }
// console.log(age);
// sayhello();
//  block scope nhi hota var
// {
//     var height = 180;

// }
// console.log(height);

//  let and const block scope hota h to isse khi aur access ni kr skte
{
    const age = 66;
}
console.log(age); // give error
// temporel dead zone
// let and const var declare ho jata h lekin assign ni ho sakta h
// console.log(marks); give error
console.log("mnn");
// console.log("hibd") ne 46 to 48 temporal dead zone with let and const
let marks = 44;
console.log(marks);





//we can access anywhere