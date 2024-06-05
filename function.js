"use strict";
// Function
// -fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculate a value

// 1. Fuction declaration
// function name(param1, param2) {body ... return;}
// one fuction === one thing
// naming: doSomeThing, cammmand, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is obeject in JS

function printHello() {
  console.log(`Hello`);
}
printHello();
function log(obj) {
  console.log(obj);
}

//2. Parameter
//premitive paramerters: passed by value
//object parameters: passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);   //{ name: 'coder' }

// 3. Defualt parameter (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('I like it!');

//4. Rest parameters (ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}


// 5. local scope

let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
}

console.log(message);

//6. Return value

function sum(a, b) {
  return a + b;
}

//7. Early return. early exit

//bad ex
function upgradeUser1(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good ex

function upgradeUser2(user) {
  if (user.point <= 10) {
    return;
  }
  //long logic~~
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable 
//can be passed as an argument to other function
//can be returned by another function

//1. Function Expression
//a function declaration can be called earlier than it is defiend (hoisted)
// a function expression is created when the execution reached it.

const print = function () { //annoymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();

//2. callback function using function expression
function randomQuize(answer, printYes, printNo) {
  if (answer === 'love') {
    printYes();
  } else {
    printNo();
  }

  //anonymous function
  const printYes = function () {
    console.log(`yes!`);
  }

  //named fuction
  //better debugging in debuggers stack traces
  //recursion 
  const printNo = function print() {
    console.log(`no!`);
  };
};

randomQuize('wrong', printYes, printNo);
randomQuize('love', printYes, printNo);

//Arrow function
//always annonymouse
const simplePrint = function () {
  console.log(`simple!`);
};

//=>
const simplePrint1 = () => console.log('so simple');
const add = (a, b) => a + b;

//IIFE : immediately Invoked Fuction Expression
function hello() {
  console.log('IIFE');
}

hello();
(function hello() {
  console.log('IIFE');
})();



