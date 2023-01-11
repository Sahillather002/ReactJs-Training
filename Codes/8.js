var person = {
    fName: "sahil",
    age:21,
    sayHi(){
        return `Hi ${this.fName}`
    },

    dog:{
        sayHello (){
            return `Hello ${this.fName}`;
        },

    }
}

console.log(person.sayHi())
console.log(person.dog.sayHello());

var person = {
    name: "sahil",
    age:21,
    likes: ["chess","web"],
};

console.log(person.age)


