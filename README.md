# 75-Day-Code-Challenge

i am taken of 75 day code challenge ... No Pain No Gain 😎

# Challenge: 1st Day

## Git Topic

### Git Commands

1. git init
1. git status
1. git clone "httpsLink"
1. git add . OR git add "fileName"
1. git commit -m "message put here for commit"
1. git push -u origin main

## Javascript Topic

### WAP / Print Hello Javascript

```javascript
console.log("Hello Javascript");
console.log("Hello Javascript, This is Shubham Bharde!");
```

# Challenge: 2nd Day

## Computer Science :-

it is study of raw data, data transformation and data presentation.

## Computer :-

it is an electronic device that manipulate data.

computers can't do anything without a program thats why it is called as dumb machine.

## Programming language :-

it is a way to communicate / talk with the machines.

## Program :-

it is set of instruction that machine can follows.

## Algorithm :-

it is step by step instructions to solve a given problem.

## Flowchart :-

it is a Pictorial Representaion of an algorithm.

## Data Structure :-

it is way to store and organizing the data in efficient manner.

## Debugging :-

it is process of find the bugs/error and remove it.

## Compiler :-

it convert/translate source code to machine code.

it execute whole program at a time, before the program runs.

## Interpreter :-

it convert source code to machine code

it execute program line by line, when program is running condition.

JavaScript is an interpreted language.

## Javascript Topic :-

### Javascript :-

JavaScript is a scripting & programming language of web.

javascript developed by Brendan Eich in the year of 1995 at Netscape orgainization.

initially name is livescript ,thats time java was famous language thats why javascript developer change their name from livescript to javascript.

dynamic typed language & Interpreted language.

used for make interactive/dynamic webpages from static webpages.

it adds behaviour to webpages. and mainly used for functionality purpose & improves UX [User Experience].

### ECMAScript :-

it is standard based on javascript .

### Where js code is run ?

1. in Browser console
1. Node js runtime environment
1. with help of script tag in html page

### How to run code with help of node js runtime environment ?

node filename.js

### JavaScript Output :-

1. console.log()
1. alert() // only on browser
1. document.write() // only on browser

### JavaScript Input :-

1. prompt() // only on browser
2. CLI using readline-sync dependencies // npm i readline-sync
3. GUI using addEventListener( event, function ) // only on browser

# Challenge: 3rd Day

## JavaScript Topic :-

### Data Types :-

it tells what type of data stored in a variable.

mainly two types of data :-

1. primitive data type
1. reference data type [(), [], {}]

## Primitive types of data :-

1. number [50, 10.5]
1. string ['Bhagya', "Shubham"]
1. boolean [true, false]
1. undefined
1. bigint [123456789n]
1. symbol
1. null

## Non Primitive / Reference types of data :-

1. object \***\*\*\*\*\***imp
1. function object
1. array object

## Token :-

it is smallest individual unit/parts of a program.

## Variable :-

it is a name given to memory location which act as a container for storing data.

// ex. :-
let score = 0;

let subjectName = "Javascript";

## Constant :-

it is fixed Value which does not change when program is running background / executed.

// ex. :-
const myName = "Shubham";

## Comments :-

it is never execute and always ignored by compiler/browser.

it is tells logic or some information to developer.

## Difference between var, let and const :-

let and const are introduced in ES6 (ECMAScript 2015).

### 1] Scope :-

var is function scope.

let and const are block scope.

### 2] Redeclared :-

var is allow to redeclared.

but let and const not allow to redeclard.

### 3] Reassigned :-

var and let value can be reassigned.

but const value can't reassigned. const is a fix value.

### 4] Declaration :-

const must be declare with intialize ow error will come.

## Keyword :-

it is reserved word which meaning is already known by the compiler/interpreter.

it is predefined & we cant use in our program for naming/idetifier purpose.

## ✅✅ Hoisting :-

it means all variables & functions declaration are moved on the top of code.

variables & functions are hoisted.

```javascript
console.log(b); // o/p :- undefined
var b = 50; // var b declaration is moved on the top thats called hoisting.

// not hoisting ex. :-
console.log(boss); // o/p :- Reference Error : boss is not defined
let boss = 50; // let is partial hoisted but not initialize undefined keyword
console.log(boss); // 50
```

## Undefined, Not defined & Null :-

### undefined :-

it means variable declaration is defined but value was not defined.

### not defined :-

variable was not defined . it gives Reference Error.

### null :-

it is a standalone value which is absent/ absence of value. null datatype is object.

## "use strict" :- for treating strict version of javascript.

## Truthy and Falsy topic :-

### falsy values :-

1. undefined
1. NaN
1. null
1. empty string / ""
1. 0
1. false

## NaN topic :- stands for Not a Number

NaN is a Property of the global object.

its datatype is number

## isNaN() :-

it is a method that used for validate the number or not and return boolean value.

## live ex between undefined vs null :-

```javascript
const muslimBelieveOnGod = undefined;
const buddhaBelieveOnGod = null;
const hinduBelieveOnGod = "Mahadev";

console.log(muslimBelieveOnGod); // undefined     // logic --> declare but not initialize

console.log(buddhaBelieveOnGod); // null         // logic --> absence value

console.log(hinduBelieveOnGod); //  Mahadev   // logic --> declare & initialize
```

## Variable Rules :-

1. we can't start from number .
1. it starting first character must be start from alphabet or underscore or dollar Symbol.
1. special symbols are not allowed rather than underscore and dollar symbol.
1. Keywords are not allowed.
1. white space / blank space are not allowed.
1. it treat uppercase and lowercase differently.

## Expression :-

it is combination of operands & operators.

## Operator :-

it is a symbol that perform some operation on operands.

## Type of Operator :-

1. Arithmetic operator [+, -, *, /, %]
1. Relational / Comparision Operator [ <, >, <=, >=, ==, !=, === ] // it compares & return boolean value
1. Assignment Operator [ =, =+ , -=, *=, /= , %=]
1. Logical Operator [&&, || , !]
1. Increment / Decrement Operator [++ , --]
1. Conditional Operator [(condition) ? true : false]
1. String Operator [ + / concatenate operator]
1. typeof Operator [typeof "Shubham"]

## Difference between "==" and "===" :-

== compare & check only values are same & return boolean

=== compare & check value and type is same & return boolean

```javascript
console.log("2" == 2); // true     ...only compare and check value are same

console.log("2" === 2); // false   ...compare and check value & type are same
```

## checking type of variable :-

### typeof operator:-

```javascript
typeof 67; // o/p:- number

let myName = "Shubham Bharde";
typeof myName; // o/p:- string
```

## Typecastening :-

it is process of changing one type to another type

1. implicit casteing :- automatic happen
1. explicit casteing :- we can change by own

## Conversion of Data Types :-

### Type conversion from one type to another type :-

1. Number()
1. String()
1. Boolean()
1. parseInt()

## Postfix and Prefix Logic :- 🤯🤯🤯🤯🤯🤯🤯🤯

1. i++ / i--  
   // first print & later update (increment / decrement) called postfix

1. ++i / --i  
   // first update (increment / decrement) & later print called prefix

```javascript
// 1] 🤯🤯🤯🤯🤯🤯🤯🤯
let i = 1;
console.log(i++); // 1  // only print later update
console.log(++i); // 3  // first update later print

// 2] 🤯🤯🤯🤯🤯🤯🤯🤯
let j = 1;
console.log(--j); // 0
console.log(j--); // 0

// 3] 🤯🤯🤯🤯🤯🤯🤯🤯
let k = 1;
console.log(k--); // 1
console.log(--k); // -1
```

## Operator Precedent :-

it is tell what operator has more priority and what first execute.

# Challenge: 4th Day

## Javascript Topic :-

### Conditionals :-

when we have two/more condition statements based on decision truth or false then we use conditionals.

1.  if (condition){

    }

1.  if (condition){

    // when condition is true then if statement executed, ow else statement executed.

    } else{

    }

1.  if (condition){

    } else if(condition){

    } else{

    }

## ✅✅ Conditional Operator ( condition ? true : false ) statement :-

it is shorter version of if else statement.

```javascript
let age = 17;
let checkVoterValidity = age >= 18 ? "You can Vote" : "You can't Vote";
console.log(checkVoterValidity);
```

## ✅✅ Switch statement topic :-

it is shorter version of else if statement.

switch(expression / variable){

case "a" : <br/>
break;

case "s" : <br/>
break;

default :

}

## ✅✅ Loop :-

repeatedly performing task is known as loop.

it is used for Repeatability.

### Loop Types :-

### 1] for loop :-
entry controlled loop [first check condition & then print]
    

syntax :-

for (initialize; condition; updation ){

statement;

}

### 2] while loop :-

entry controlled loop [first check condition then print]


syntax :-

while (condition){

statement;   

increment/decrement;

}

### 3] do-while loop :-
exit controlled loop [first print then check condition thats why it is called exit controlled loop]


syntax :-
do{

statement;

updation;

} while(condition);
