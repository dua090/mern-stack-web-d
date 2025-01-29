// //function as default parameter
// function fname(){
//     console.log("Hello, I am a function");
// }
// function greet(name=fname() ) {
//     console.log(name);
// }
// greet();
// greet('John'); // John
// // function solve(value={ age:15,wt:70,ht:66}){
// function solve(value=["helo","kya ","haal"]){
//     console.log("hello ji",value);
// }
// solve ("manu");
// solve(null); //prints null 
// solve(undefined);// prints default value
// default parameter
// function sayname(name="manu",lastname=name.toUpperCase()){
//     console.log("default parameter",name);
//     console.log("default parameter",lastname);
// }
// sayname("manu dua");
// class human {
//     age = 21; // public
//     #wt = 80; //private
//     ht = 180;
//     name;
//     constructor(newname,newheight,newweight){
//         this.name = newname;
//         this.ht=newheight;
//         this.#wt= newweight;

//     }
//     walking() {
//         console.log("I am walking", this.#wt);
//     }
//     running() {
//         console.log("I am running");
//     }
//     get fetchweight(){
//         return this.#wt;
//     }
//     set modify(val){
// this.#wt= val;
//     }
// }
// let a = new human("dua",190,90);
// a.walking();
// console.log(a.age);
// console.log(a.ht);
// console.log(a.fetchweight);

//     // console.log(a.#wt);// error