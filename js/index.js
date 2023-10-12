console.log('Hello Javascript'); // o/p:- Hello Javascript
console.log("Hello Javascript, This is Shubham Bharde!"); // o/p:- Hello Javascript, This is Shubham Bharde!



// Hoisting Topic :-
console.log(b); // o/p:- undefined
var b = 50;     // var b declaration is moved on the top & assign undefined keyword thats called hoisting.

// partial hoisting ex. :-
console.log(boss); // o/p:- Reference Error : Cannot access 'boss' before initialization  
let boss = 50;     // let is partial hoisted but not initialize undefined keyword
console.log(boss) // not run bcz of synchronous nature



// Undefined, Not defined & Null :-
let myLastName; 
var myAge; 
console.log(myLastName, myAge); // o/p:- undefined undefined

console.log(myBankDetails) // o/p :- Reference Error:- myBankDetails is not defined.

let temperature = null;
console.log(temperature) // o/p :- null



// live ex between undefined vs null :-
const muslimBelieveOnGod = undefined;
const buddhaBelieveOnGod = null;
const hinduBelieveOnGod = "Mahadev";

console.log(muslimBelieveOnGod); // o/p:- undefined     // logic --> declare but not initialize ... believe on god but not face

console.log(buddhaBelieveOnGod);  // o/p:- null         // logic --> absence value ... not believe on god

console.log(hinduBelieveOnGod)   // o/p:- Mahadev       // logic --> declare & initialize 



// "==" and "===" Topic :-
console.log("2" == 2); // o/p:- true     ...only compare and check value are same

console.log("2" === 2); // o/p:- false   ...compare and check value & type are same



// checking type of variable Topic :-
typeof (67);    // o/p:- number

let myName = "Shubham Bharde";
typeof(myName);  // o/p:- string



// Postfix and Prefix Logic Topic :-
// 1] 🤯🤯🤯🤯🤯🤯🤯🤯
let i = 1;
console.log(i++); // o/p:- 1  // only print later update
console.log(++i) ;// o/p:- 3  // first update later print

// 2] 🤯🤯🤯🤯🤯🤯🤯🤯
let j = 1;
console.log(--j); // o/p:- 0
console.log(j--); // o/p:- 0

// 3] 🤯🤯🤯🤯🤯🤯🤯🤯
let k = 1;
console.log(k--); // o/p:- 1
console.log(--k); // o/p:- -1
        


