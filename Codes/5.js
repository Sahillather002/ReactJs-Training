// primitive and non primitive data types
// non primitive data types
var personDetails = {
    name:"Bill Gates",
    age:17,
    role:"Develper"
}

var secondPersonDetails = personDetails

personDetails.name = "Elon musk"
secondPersonDetails.age=54
console.log(personDetails)
console.log(secondPersonDetails)

