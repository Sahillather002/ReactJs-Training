// template string in js

// string concatenation
function makeGreeting(name , email, id){
    return(
        "hello, "+
        name +
        ". We've emailed you at " +
        email +
        "Your user id is '" +
        id +
        "'."
    )
}

// string interpolation
function makeGreeting(name , email, id){
    return `hello, ${name}. We've emailed you at ${email}.Your used id is '${id}'`;
}
