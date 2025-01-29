function sum(a,b){
    return a+b;
}
function greetwithsum(text,a,b,sum){
    const result =sum(a,b);
    console.log(text , result);
}
greetwithsum("Hello",5,7,sum);