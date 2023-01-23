// const promise = new Promise(function(resolve,reject){
//     let randomNum = Math.random()
//     if(randomNum >= 0.5){
//         resolve("Promise resolved")

//     }
//     else{
//         reject("Promise rejected")
//     }
// });

// promise.then((result)=>console.log(result))
// promise.catch((result)=>console.error(error))

const delayAndGetRandom = (ms) => {
    return new Promise(resolve => setTimeout(()=>{
        const val = Math.trunc(Math.random()*100)
        resolve(val)
    },ms))
}

async function fun(){
    const a = await 9
    const b = await delayAndGetRandom(1000)
    const c = await 5
    await delayAndGetRandom(1000)

    return a*b*c
}

fun().then((result) => console.log(result))

// o/p : 2250 , 495 , etc. random