// let name="mehak dua"
// function outer() {
//     {
//         let name="mnnnu"//valid here only block scope
//     }
//     let name = "dua"; // name is a local variable created by init
//     function inner() {
//         //let name="manu dua"
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     inner();
//   }
//   outer();
function outerFunction() {
    let name = "dua";
    
    function innerFunction() {
    console. log (name);
    }
    return innerFunction;
    }
    let inner = outerFunction();
    inner();