//1. Use strict added in ES5 use this for Valina Javascript

'use strict';

//2. variable
// let (added in ES6)
let name = 'global name';
{
  let name = 'jeijei';
  console.log(name);

  name = 'hello';
  console.log(name);

  console.log(`string literals: 1 + 2 = ${1 + 2}`);

  //block scope
}

console.log(name);

//var (dont use this)
//var hoisting 끌어올려서 선언을 어디서 해도 상관없이 맨위에 된거 처럼 되는겁
//has not block scope

age = 4;
var age;

//3.constant (read only)
//favor immutable data type always for a few reasons
//-security
//-thread safety
//-reduce human mistake

const dayInweek = 7;
const maxNumber = 5;

//mutable = let

//4. variable types (rw read / write)
//primitive, single item: number, string, boolean, null, undefiedn, symbol.
//objective, box container
//function, first-class function
//bigInt
const count = 17;
const size = 17.2;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negInfinity = - 1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negInfinity);
console.log(nAn);

//string

const char = `c`;


//boolean
//false : 0, null, undefined, NaN, ''
//true: any other value

//null
let nothing = null; //선언한것


//undefined 
let x;
// 안정해 진것 아무것도 선언된것이 없을때



// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, ${typeof text}`);
text = 1;
console.log(`value: ${text}, ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, ${typeof text}`);
console.log(text.charAt(0));




