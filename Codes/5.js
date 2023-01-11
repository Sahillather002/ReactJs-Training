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

// scope

function getDate(){
    var date = new Date();
    return date;
}

getDate();
console.log(date)
//not availabe outsided func.
// ReferenceError: date is not defined

function getDate(){
    var date = new Date();
    function formatDate(){
        
    }
}