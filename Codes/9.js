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


