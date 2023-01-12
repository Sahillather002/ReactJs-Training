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

