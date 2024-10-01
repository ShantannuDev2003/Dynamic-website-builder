console.log("script.js insitializing")
let boxes=document.getElementsByClassName("box")
console.log(boxes)
function getRandomColor(){
    let val1=0+Math.random()*255;
    let val2=0+Math.random()*255;
    let val3=0+Math.random()*255;
    return `rgb(${val1},${val2},${val3})`

}
setInterval(() => {
    Array.from(boxes).forEach(e=>{

   
        e.style.backgroundColor=getRandomColor();
    e.style.color=getRandomColor();
   
}
)
}, 3000);
