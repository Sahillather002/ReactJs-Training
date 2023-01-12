// arrays in js
let a1 = [] // empty array / array literal
let a2 = Array() // empty array / array as function
let a3 = new Array() // empty array / call to array constructor

const numbers = [1,2,3,4,5,6]
console.log(numbers)
console.log(typeof(numbers))

// mutation

const numbersBackward = numbers.reverse()
console.log(numbersBackward)
console.log(numbers)
// it is mutable method as original is also changed
