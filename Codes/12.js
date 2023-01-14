//  *** Day 4 ***
// practice questions
// example 1
// function callSixTimes(f) {
//     for (let i = 0; i < 6; i++) { 
//         f();
//         console.log("===============")
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

//  callSixTimes(rollDie);


// example 2
// function bet (min,max){
//     return function(num){
//         return num>=min && num<=max;
//     };
// }

// const child = bet(0,18);
// const adult = bet(19,65);
// const log = bet(66,100);

// console.log(child(5));

// const numbers = [1, 2, 3, 4];
// const ans = numbers.map(item => item * 2);
// console.log(ans); 

// const numbers = [1, 2, 3, 4];
// const ans = numbers.filter(item => item % 2 === 0);
// console.log(ans);  

// const numbers = [1, 2, 3, 4];
// const ans = numbers.reduce((result, item) => {
//   return result + item;
// }, 0);
// console.log(ans); 

// Write a program using forEach to print all the fruits  
// const fruits = ["apple", "orange", "cherry"];

// fruits.forEach(function(fruit) {
// console.log(fruit);
// });
