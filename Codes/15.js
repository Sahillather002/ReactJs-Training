const addOne = (value) => value + 1
const addTwo = (value) => addOne(value + 2)
const addThree = (value) => addTwo(value +3)

const cal = function(){
    return addThree(1)+addTwo(1)
}

console.log(cal())
