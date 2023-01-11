// ***Objects in Javascript***
// Everything in it is Javascript
// In JS , Objects may exist without classes
// Objects are dynamic
// i.e., we can add , delete , update at any time
// add , delete , update methods at any time
// no access control

// const account = {}; // it is an object

const account = {
    name:"sahil",
    accNum:345678,
    bank:"sbi",
    branch:"banglore"
};
console.log(account)
// o/p : { name: 'sahil', accNum: 345678, bank: 'sbi' }
// An object is an unorerd collection o properties
// Each property has name(key), and a value

console.log(account.accNum) // . is used for accessing 
console.log(account["branch"])
delete account.branch
console.log(account["branch"])
/* Property names or keys are:
   identified as String
   must be unique in each object

   Property values are:
   any JS value
   stored inside the object
   can be primitive types 
   can be arrays or other objects
   It can be functions(methods)

*/