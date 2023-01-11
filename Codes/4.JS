// Object example

const rectangle = {
    length:10,
    breadth:25
}

const person = {
    firstName:"Mark",
    lastName:"Cuban",
    age:34,
    country:"U.S.A",
    // array of objects 
    skills:[
        "HTML",
        "CSS",
        "JS",
        "REACT",
        "PYTHON"
    ],
    isMarried:true,
    // adding function
    getFulllName: function(){ // it has no name
        return `${this.firstName} ${this.lastName}`

    }
}

console.log(person)
console.log(person.skills[3])
//calling function
console.log(person.getFulllName())
// adding object/property
person["nationality"]="American"
console.log(person)
//adding values
console.log(person.skills.push("Node"))
// update
person["age"]=43
console.log(person)

// adding mini method to an object
person.getPersonInfo = function(){
    return `${this.firstName} ${this.lastName} is ${this.age} years old. The skills are ${this.skills}`
}

console.log(person)
console.log(person.getPersonInfo)
console.log(person.keys)

// Object methods
// Object : provides common functionalities to all js objects

const copyPerson = Object.assign({},person)
console.log(copyPerson)

// keys printing
const keys = Object.keys(person)
console.log(keys)

// printing values
const values = Object.values(person)
console.log(values)

