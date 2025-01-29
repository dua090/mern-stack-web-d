// //code 1
// const t1= performance.now();
// for(let i = 1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "hello manu"+i;
//     document.body.appendChild(para);
// }
// const t2= performance.now();
// console.log("total time taken"+(t2-t1));
// // //code 2
// const t3 = performance.now();

// let mydiv = document.createElement('div');
// for(let i = 1;i<=100;i++){
//     let para = document.createElement('p')
//     para.textContent = "hello manu "+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4= performance.now();
// console.log("iska time kitna liya"+(t4-t3));
//BEST CODE 
let fragement = document.createDocumentFragment();
for(let i = 1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "hello manu "+i;
    fragement.appendChild(para);
}
document.body.appendChild(fragement);