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
// console.log(date)
//not availabe outsided func.
// ReferenceError: date is not defined

function getDate(){
    var date = new Date();
    function formatDate(){
        return date.toDateString()
    }
    return formatDate();
}

function discountPrices(prices,discount){
    var discounted = [];
    for (var i=0;i<prices.length;i++){ // var is global scopped and these variables are available outside as well
        var discountedPrice = prices[i] * (1 - discount)
        var finalPrice = Math.round(discountedPrice * 100)/100
        discounted.push(finalPrice)
    }
    // these are called temprary variables 
    console.log(i)
    console.log(discountedPrice)
    console.log(finalPrice)
    
    return discounted;
}

console.log(discountPrices([100,250,350,140],0.5))

/* if var is replaced with let
    then we got error for block scope for 
    our temp variables

    function discountPrices(prices,discount){
    var discounted = [];
    for (let i=0;i<prices.length;i++){ // var is global scopped and these variables are available outside as well
        let discountedPrice = prices[i] * (1 - discount)
        let finalPrice = Math.round(discountedPrice * 100)/100
        discounted.push(finalPrice)
    }
    // these are called temprary variables 
    console.log(i)
    console.log(discountedPrice)
    console.log(finalPrice)
    
    return discounted;
}

// we got referencError : i is not defined

*/

// Therefore
// var: is global scoped
// let: is block scoped
// const: block scoped
