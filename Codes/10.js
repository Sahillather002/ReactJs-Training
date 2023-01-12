// arrays in js
let a1 = [] // empty array / array literal
let a2 = Array() // empty array / array as function
let a3 = new Array() // empty array / call to array constructor

const numbers = [1,2,3,4,5,6]
console.log(numbers)
console.log(typeof(numbers))

// mutation

// const numbersBackward = numbers.reverse()
// console.log(numbersBackward)
// console.log(numbers)
// it is mutable method as original is also changed

const numbersBackward = [...numbers] // for read / copy
console.log(numbers)
console.log(numbersBackward)

console.log(numbersBackward.reverse())

numbers.push(7)
console.log(numbers)
numbers.pop(7)
console.log(numbers)
const aNum = [...numbers,7]
console.log(aNum)
numbers.unshift(0)
console.log(numbers)
console.log(numbers.slice(2,2))
console.log(numbers.slice(2)) 
console.log(numbers.slice(2,4))

// slice creates new array it doesn't change original array
// slice is imutable 
console.log(numbers.splice(3,2))
console.log(numbers)
// splice is mutable as changes original array

//array.map()
//it retrn a new array by transforming the array by 
//applying callback to each element of array
//immutable

function multiplyByTen(num){
    return num*10;
}

const tenMultiplesArray = numbers.map(multiplyByTen)
console.log(tenMultiplesArray)