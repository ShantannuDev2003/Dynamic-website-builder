console.log("I am a tutorial on loops")

let a=1;
console.log(a)
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
  
    
// }
let obj={
    name:"Harry",
    role:"Programmer",
    company:"CodeWithHarry AI"
}
for (const key in obj)
 {
        const element = obj[key];
        console.log(key,element)
        
}

// for (const c of "Harry") {
//     console.log(c)
    
// }

// let i=0;
// while(i<6){
//     console.log(i)
//     i++;
// }

let i=0;
do{
   console.log(i)
   i++;
}while(i<6);

