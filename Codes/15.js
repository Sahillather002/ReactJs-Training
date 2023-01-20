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

// ------------nxt e.g. ---------

// console.log("Inside global execution context")
// function functionOne(){
//     console.log("Inside function one")
//     function setTimeoutFunction(){
//         console.log("Inside setTimeotFunction: Executed after 1 sec")
//     }
//     setTimeout(setTimeoutFunction,1000)
//     for(let i=0;i<1000000;i++){
//         // blocking code
//     }
//     console.log("Exiting function one")
// }

// console.log(functionOne())


// call back hell or pyramid of doom 
setTimeout(() => {
    console.log("Authenticate")
    setTimeout(() => {
        console.log("Download image")
        setTimeout(() => {
            console.log("Manipulate image")
            //...
        },1000)
    },1000)
},1000)

// const timeOut = (time) => new Promise(resolve => setTimeout(resolve,time))
// timeOut(1000)
//     .then(()=>{
//       console.log("Authenticate")  
//     })
//     .then(()=>{

//     })