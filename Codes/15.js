// const addOne = (value) => value + 1
// const addTwo = (value) => addOne(value + 2)
// const addThree = (value) => addTwo(value +3)

// const cal = function(){
//     return addThree(1)+addTwo(1)
// }

// console.log(cal())



// const a = () => console.log("a")
// const b = () => setTimeout(()=> console.log("b"),1000)
// const c = () => console.log("c")
// console.log(a())
// console.log(b())
// console.log(c())


console.log("Inside global execution context")
function functionOne(){
    console.log("Inside function one")
    function setTimeoutFunction(){
        console.log("Inside setTimeotFunction: Executed after 1 sec")
    }
    setTimeout(setTimeoutFunction,1000)
    for(let i=0;i<1000000;i++){
        // blocking code
    }
    console.log("Exiting function one")
}

console.log(functionOne())