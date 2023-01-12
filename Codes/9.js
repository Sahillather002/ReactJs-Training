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

function(arr) {
    
}