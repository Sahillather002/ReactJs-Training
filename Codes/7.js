// practice questions
(function (a) {
    return (function () { 
        console.log(a); 
        a = 6; 
    })() // function returning function
}
)
    (21);


    // var name =  "Jhon";
    // console.log(this.name === window.name)


// nxt question   
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
      };
      const keys = Object.keys(person);
      console.log(keys)
// nxt question
      const fruits = "banana"
      const keys2= Object.values(fruits);
      console.log(keys2)

// nxt question
var person1 = {
    fName: "Jhon",
    determinedContext () {
       return this === person
     }
  }

  //console.log(person.determinedContext())

// nxt question

const triangle = {
    breadth:20,
    height:10
    //return(this.breadth * this.height)
}
console.log(triangle.breadth * triangle.height * 0.5)



/*
LPU Assignment-2
 
Draft saved
* Required
Console log area of Triangle given: 
const triangle = {
  breadth: 20,
  height: 10,
}
*
const triangle = {
    breadth:20,
    height:10
    //return(this.breadth * this.height)
}
console.log(triangle.breadth * triangle.height)
o/p : 200
var name =  "Jhon'';
console.log(this.name === window.name)
*
Window is undefined
True
False
Error
What will keys return?
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys = Object.keys(person);
*
[ 'firstName', 'lastName', 'age', 'eyeColor' ]
What will keys return ?
const fruits = "banana"
const keys = Object.values(fruits);

*
Error
True
False
['b', 'a', 'n', 'a', 'n', 'a']
What will person.determinedContext() return?
var person = {
  fName: "Jhon",
  determinedContext () {
     return this === person
   }
}
*
True
False
Error
Undefined

*/