let arr=[1,2,4,5,7]
arr[0]=5566;
// console.log(arr);
// console.log(arr.length,typeof arr)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
// console.log(arr.toString())
console.log(arr.join(" and "))
a=[1,2,3,4,5,6]
console.log(a.pop())
let b=a.push("Harry") 
// returns length
console.log(b)
console.log(a)
console.log(a.shift())
console.log(a)
console.log(a.unshift("Jack"))
console.log(a)
delete a[5]
console.log(a)
console.log(a.length)

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]

console.log(a1.concat(a2,a3))
// returns a new ArrayDoes not change existing arrays
 

let d=[7,9,8]
console.log(d.sort())
console.log(d)

// Modifies the original array


let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,2))
console.log(numbers)


let no=[1,2,3,4,5]
console.log(no.splice(1,2,222,333))
console.log(no)