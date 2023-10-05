console.log('Hello Javascript');
console.log("Hello Javascript, This is Shubham Bharde!");

// Hoisting Topic
console.log(b); // o/p :- undefined
var b = 50;     // var b declaration is moved on the top thats called hoisting.

// not hoisting ex. :-
console.log(boss); // o/p :- Reference Error : boss is not defined   
let boss = 50;     // let is partial hoisted but not initialize undefined keyword
console.log(boss) // 50



// live ex between undefined vs null :-
const muslimBelieveOnGod = undefined;
const buddhaBelieveOnGod = null;
const hinduBelieveOnGod = "Mahadev";

console.log(muslimBelieveOnGod); // undefined     // logic --> declare but not initialize

console.log(buddhaBelieveOnGod);  // null         // logic --> absence value

console.log(hinduBelieveOnGod)   //  Mahadev   // logic --> declare & initialize



// "==" and "===" Topic :-
console.log("2" == 2); // true     ...only compare and check value are same

console.log("2" === 2); // false   ...compare and check value & type are same



// checking type of variable Topic :-
typeof (67);    // o/p:- number

let myName = "Shubham Bharde";
typeof(myName);  // o/p:- string



// Postfix and Prefix Logic Topic :-
// 1] 🤯🤯🤯🤯🤯🤯🤯🤯
let i = 1;
console.log(i++); // 1  // only print later update
console.log(++i) ;// 3  // first update later print

// 2] 🤯🤯🤯🤯🤯🤯🤯🤯
let j = 1;
console.log(--j); // 0
console.log(j--); // 0

// 3] 🤯🤯🤯🤯🤯🤯🤯🤯
let k = 1;
console.log(k--); // 1
console.log(--k); // -1
        

