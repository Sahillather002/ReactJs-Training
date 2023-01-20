const promise = new Promise(function(resolve,reject){
    let randomNum = Math.random()
    if(randomNum >= 0.5){
        resolve("Promise resolved")

    }
    else{
        reject("Promise rejected")
    }
});

promise.then((result)=>console.log(result))
promise.catch((result)=>console.error(error))