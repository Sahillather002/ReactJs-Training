// functions in javascript
function square(number){ // type is not defined
    return number*number
}

console.log(square(4))
console.log(square("abc"))

function sumofArray(arr){ // return type not defined
    let sum = 0;
    for(let i = 0 ;i<arr.length;i++)
    {
        sum += arr[i];
    }

    return sum;
}

let sum = sumofArray([2,3,4,5,6])
console.log(sum)

// function sumOfNumbers() {
//     console.log(arguments)
// }

// sumOfNumbers(2,3,4)
// argument object will be returned

function sumOfNumbers() {
    let sum = 0;
    for( let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumOfNumbers(2,3,4,5,6))
// above function with unlimited number of arguments

// Anonymous functions

// function(num) {
//     return num * num
// }

// it will show error as it does not have any name

// function expression :
const squareFun = function(num) {
    return num*num
}
// functions are first class citizens in JS :-)

console.log(squareFun(5))

/* Hoisting = moving all functions on top of file
   note that hoisting don't work on function expression
   e.g:
   square(5)

   function square(num){
    return num*num
   }

   here function square defined after calling 
   there while runing it moved upwards automatically
*/

// Arrow function
// used as call back functions and higher order function
// => called as fat arrow
// -> called as thin arrow
// function is removed by =>

const squareArr = (num) => {
    return num*num
}

console.log(squareArr(6))

const squareArr1 = (num) => {return num*num};
console.log(squareArr1(7))

const squareArr2 = (num) => num*num;
console.log(squareArr2(8))

const squareArr3 = num => num*num;
console.log(squareArr3(9))

// nxt example
function add(a,b=3){
    const total = a+b;
    return total;
}

console.log(add(5))

// converting it into function expression

const add1 = function(a,b=3){
    const total = a+b;
    return total;
}

console.log(add1(4))

// now converting it into arrow function

const add2 = (a,b=3) => {
    return total = a+b;
}

console.log(add2(6))

const add3 = (a,b=3) => a+b;
console.log(add3(8))

// arrow function to find max of two numbers
const arrMax = (a,b) => Math.max(a,b)
console.log(arrMax(3,4))

const arrMax1 = (a,b) => a>b?a:b;
console.log(arrMax1(5,7))

// issue with arrow function
// const printFullName = (first,last) => {name: `${first} ${last}`,age: 20}
// above will generate error as curly braces sees as function
// for returning value we can close it inside parenthesis

 const printFullName = (first,last) =>({name: `${first} ${last}`,age: 20})
 console.log(printFullName("sahil","lather"))


