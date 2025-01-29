// function changetext(event){
//     console.log(event);
// let fpara= document.getElementById('fpara');
// fpara.textContent="hellooo";
// }
// let fpara= document.getElementById('fpara');
// fpara.addEventListener('click',changetext);
// // fpara.removeEventListener('click',changetext);
//change default behvaiour
// 
// let paras= document.querySelectorAll('p');
function paralistener(event){
    if(event.target.nodeName==='SPAN'){
        alert("you selected para: "+event.target.textContent);
    }
}
// for(let i=0;i<=paras.length;i++){
//     let para= paras[i];
//     para.addEventListener('click',paralistener);

// }

let mydiv =document.getElementById('wrapper');
document.addEventListener('click',paralistener);
