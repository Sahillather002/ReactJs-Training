let js = {
    name:"Javascript",
    abbreviation:"JS",
    officialSpec:"ECMAScript",
    birthYear:1995,
    creator:"Brendan Eich"
}

// Javascript is a dynamic language having dynamic types
// It is a weakly typed language

let hello = 13;
let typeHello = typeof(hello)
console.log(typeHello)
hello = "hello"
console.log(typeHello)
typeHello = typeof(hello)
console.log(typeHello)

const num = 56
console.log(num)
console.log(typeof(num))
const addnum = num + "1"
console.log(addnum)
console.log(typeof(addnum))

// naming variables
/* variable names begin with lowercase letters
   it can't contain symbols or begin with symbols
   it can't begin with number
   mix of uppercase string , lowercase string and numbers
*/

var checkNetworkConnection ; // camel casing is used for naming purpose
/* checkNetwork is camelCasing
   CheckNetwork is PascalCasing
   check_network is snake_casing
*/

// let was introduced in ES2015(ES6)
// var has scope constraints
var ad = 4;
// let ad = 4;
var ad = 5;
// let ad = 5;
console.log(ad)
// i.e, reinitialisation is possible in var but not in let

// Different data types in javascript
// **String**
const firstName = "sudeep"
const middleName = 'abc'
const lastName = `gfg` // prefferable and used for character escaping too
console.log(firstName+middleName+lastName)
// console.log('all's well') will generate error
// console.lgo(`all's well`) will not
const details = `all's well`
const hi = `hello my name is {firstName}. {details}`
console.log(hi)
const hi2 = `hello my name is ${firstName}. ${details}`
console.log(hi2)

console.log(hi.length)
console.log(hi.indexOf("S"))
console.log(hi.indexOf("i"))
//   **Number**
const pi = 3.14
console.log(typeof(pi))
console.log(Math.random())
console.log(Math.floor(0.2))
console.log(1000**200)
console.log(typeof(Infinity))
console.log(typeof(-Infinity))
console.log(0/0)
console.log(typeof(NaN))
console.log(NaN+1)
console.log(NaN+"1")
//  **Object**
//   **Boolean** (true or false)

//   **null** (delibrate nothing)
//   **undefined** (accidental nothing)
console.log(null == null)
console.log(undefined == undefined)
console.log(null == undefined)

//   **symbol**
// it used for having unique properties

console.log("10"==10)  // checks only for value
console.log("10" === 10) // checks both values and types 

let name;
console.log(name)
const errorCode = null
console.log(errorCode)
console.log(typeof(errorCode))

// Falsy value and Truthy value in javascript
console.log(false==0)
console.log(false=="")
console.log(NaN==NaN)
console.log(NaN==null)
console.log(NaN==undefined)
console.log(typeof(NaN))
console.log(1===1.0)
console.log(0.1+0.1+0.1 === 0.3) // false


// Falsy values
/* false
   0
   ""
   null
   undefined
   NaN
*/
console.log(false==0)
console.log(0=="")
console.log(""==false)

console.log(NaN==NaN , NaN==null , NaN==undefined,NaN==false)
// all will be printed false
