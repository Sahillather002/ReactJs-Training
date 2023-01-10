if(true){
    let a = "a";
    const b = "b";
    var c = "c";
}
console.log(c) // only c will result output
// as var is globally scoped others not

const details = [
    {
        fName : "sahil",
        lName : "lather",
        mul : function (x,y) {
            return x*y;
        }
    }
]

console.log(details[0].mul(2,4))