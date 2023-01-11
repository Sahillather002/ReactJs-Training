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

// adding html elements / tags
function makeGreetingTemplate(name,email,id) {
    return(
        "<div>" +
        "<h1> Hello, " +
        name + 
        ".</h1>" +
        "<p>We've emailed you at" +
        email +
        ". " +
        "Your user id is '" +
        id +
        "'" +
        "</p>" +
        "<div>"
    );
}

//ES6 template strings, multi line strings
function makeGreetingTemplate(name,email,id){
    return `
        <div>
            <h1>Hello , ${name}</h1>
            <p>
                we've emailed you at ${email},
                Your user id is '${id}'.
            </p>
        </div>
    `
}