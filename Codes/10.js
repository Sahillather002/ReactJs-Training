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

// *** array.map() ***
//it retrn a new array by transforming the array by 
//applying callback to each element of array
//immutable

function multiplyByTen(num){
    return num*10;
}

const tenMultiplesArray = numbers.map(multiplyByTen)
// multiplyByTen is callBack function
console.log(tenMultiplesArray)

let multiplesArray = []
for(let i=0;i<numbers.length;i++){
    multiplesArray[i] = numbers[i]*10
}
console.log(multiplesArray)

const countries = ["India","England","Iceland","Australia","Norway"]
// countries.forEach( function(country,i){
//     console.log(i,country.toUpperCase())
// })

// to reperesent it in single line
countries.forEach((country,i) => console.log(i,country.toUpperCase()))

// boths output:
/* 
0 INDIA
1 ENGLAND
2 ICELAND
3 AUSTRALIA
4 NORWAY
*/

// *** Filter ***
// It filters out items based on some criteria
// It loop through all the elements of the original array and
// filter out the elements that matches the condition
console.log(countries.filter(country => country.includes("land")))
// filter is immutable as it does not modify orginal array
const countriesWithoutLand = countries.filter(country => !country.includes("land"))
console.log(countriesWithoutLand)

const evenNumbers = numbers.filter(num => num%2==0)
console.log(evenNumbers)

const oddNumbers = numbers.filter(num => num%2!=0)
console.log(oddNumbers)

const personAges = [34,5,8,10,35,24,21,17,65,69,28]
const filteredAges = personAges.filter((age) => age >= 18)
console.log(filteredAges)


// *** array.reduce() ***
// It applies a reducer function to each and every element of the original array
// and returns an output value
 const number = [1,2,3,4,5,6]
const sums = number.reduce((prev,curr) => prev+curr)
console.log(sums)

const product = number.reduce((acc,curt) => acc*curt)
console.log(product)
console.log("******************")
const res = number.reduce((acc,curt) => {
    console.log(acc);
    console.log(curt);
    return acc+curt;
})

const stringsArray = ["This","is","combined","reduce","function","!"]
const combinedString = stringsArray.reduce((acc,curr) => acc+" "+curr)
console.log(combinedString)

const prod = numbers.reduce((acc,curr) => {
    console.log("acc:"+acc);
    console.log("curt"+curt);
    return acc*curt
})

// *** find ***
// it gives us first occurence of element in the array based on the condition
