// let obj={
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal ={
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };
// console.log(animal)
// console.log(rabbit)

// rabbit._proto_=animal;
// sets rabbit.[[Prototype]]=animal

class Animal{
    constructor(name){
        this.name=name
        console.log("obejct is created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }

}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("obejct is created and he is lion")
    }
    eats(){
        super.eats()
        console.log("roar kara raha hu")
    }

}

let a=new Animal("Bunny");
console.log(a)

let l=new Lion("Shera")
console.log(l)

