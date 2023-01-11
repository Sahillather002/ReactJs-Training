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

console.log(makeGreetingTemplate("sudeep","a@gmail.com",12345))

/* o/p :
     <div>
            <h1>Hello , sudeep</h1>
            <p>
                we've emailed you at a@gmail.com,
                Your user id is '12345'.
            </p>
        </div>
*/