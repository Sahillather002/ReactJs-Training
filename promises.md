**Promise**

* Promises is a way to handle asynchronous operations.
* It solves the problem of callback hell / pyrmid of doom
* Provides standard way to handle errors
<<<<<<< HEAD
* Allows us to chain asynchronous operations together.

Three States:
* pending state -- once the promise is created , it enters n the pending state.
* resolved state -- the asynchronous op got completed successfully, promise has resolved value.
* rejected state -- asynchronus operations has failed, promise has as rejected value
* fullfilled state / settled state -- 

const promise = new Promise(function(resolve,reject){
    let randomNum = Math.random()
    if(randomNum >= 0.5){
        resolve("Promise resolved")

    }
    else{
        reject("Promise rejected")
    }
});


* then method:
    it allows us to specify a function that should be called when a promise is fullfilled 
    promise.then(result =>{
        // do something with result
    })

* catch method:
    it handles promises that have been rejected, failed.
    promise.catch(result => {
        // show the error
    })

* finally method:
    a call back method that is executed when the promises is settled (either resolved or rejected)

promise.then((result)=>console.log(result))
promise.catch((result)=>console.error(error))
=======
* Allows us to chain asynchronous operations together.
>>>>>>> temp
