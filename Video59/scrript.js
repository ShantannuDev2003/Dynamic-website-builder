console.log("This is strings tutorial")
let a="Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
//  Don't throw error forgiving langauge


console.log(a.length)

let real_name="Harry"
let friend ="Rohan"
console.log("His name is "+real_name+" and his friend name is "+friend);
console.log(`His name is ${real_name} and his "friend" name is ${friend}`)

// ` backtic is used for template literals`
// This process use is called string interpolation

console.log("\"Harry\"")
let b="ShivAm"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))
console.log(b.slice(1))
console.log(b.replace("Sh",77))
console.log(b)
// string is immutable
// only first occurence get replaces
let c="ShivamSh"
console.log(c.replace("Sh",77))
console.log(b.concat(c,"Aishwaraya","Rahul"))

let name="Harry Bhai"
let newName=name.replace("Bhai","Bhau")
console.log(newName)


let na="  Harry   "
console.log(na.trim())