console.log("manu");
//compile time error example
// console.log(1;// syntax error

// rintime error example
// console.log(x);// this is reference error because x is not defined
//hnaling
// try catch block
try {
    console.log("try starts here ");
    console.log(x);
    console.log("try ends here");
    //a
    //b
    //c
} catch (error) {
    //define kr skte error k sath kya krna h 
    //retry logic
    //fallback mechanism
    //logging 
    //custom error
    console.log("error");
}finally{
    console.log("m to aaunga hmaesha");
}//finally will execute every time
//doesnot matter error h ya nhi
//by using throw  we can we can throw our own cutomised error
// lets create custom error
// try{
//     //reference error

//     console.log(x);

// }catch(error)
// {
//     //custom error
//     throw new Error('phle declare krdo ,frr anna merre pas');

// }
let errorcode = 100;
if (errorcode==100) {
    throw new error("invalid json");    
}