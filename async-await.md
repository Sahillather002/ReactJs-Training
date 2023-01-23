**Async**
Alternative way to write Promise code. It is built on top of promises.
Asynchronus code writtedn in synchrnous way

async function functionName(){
    // await
}

const arrowFunction = async () => { }

// doesn't work
function functionName(){
    //await
}

const obj = {
    async getName(){
        // do something
    }
}

async function fn(){
    reurn "Hello async!"
}

fn().then((result) => console.log(result))

async function foo(){
    throw Error("someError")
}
foo().catch((result)=>console.log(result))

const delayAndGetRandom = (ms) => {
    return new Promise(resolve => setTimeout(())=>{
        const val = Math.trunc(Math.random()*100)
        resolve(val)
    },ms)
}

async function fun(){
    const a = await 9
    const b = await delayAndGetRandom(1000)
    const c = await 5
    await delayAndGetRandom(1000)

    return a*b*c
}