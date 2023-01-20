**Promise**

* Promises is a way to handle asynchronous operations.
* It solves the problem of callback hell / pyrmid of doom
* Provides standard way to handle errors
* Allows us to chain asynchronous operations together.

Three States:
* pending state -- once the promise is created , it enters n the pending state.
* resolved state -- the asynchronous op got completed successfully, promise has resolved value.
* rejected state -- asynchronus operations has failed, promise has as rejected value

const promise = new Promise(function(resolve,reject));