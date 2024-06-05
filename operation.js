//1.string concatenation 
console.log('my' + 'cat');
console.log('1' + 2);
let number = 3;
console.log(`string literals: 1 + 2 = ${number}`);

//2. numeric operation
console.log(1 + 1); // add
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiantion result 8 

// 3. increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1, 
console.log(`pre: ${preIncrement}, counter:${counter}`);
const postIncrement = counter++;
console.log(`post: ${postIncrement}, counter:${counter}`);
const preDecrement = --counter;
console.log(`post: ${preDecrement}, counter:${counter}`);
const postDecrement = counter--;
console.log(`post: ${postDecrement}, counter:${counter}`);


// 4. assignmnet operator
let x = 3;
let y = 6;
x += y; //x =x+y;
x -= y; //x = x-y;
x *= y; //x =x * y;
x /= y; //x =x/ y;

//5. comparison operators
//<
//<=
//>
//>=

//6. logical operation  ||(or),  &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//||(or)
console.log(`and: ${value2 && value1 && check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('😎');
  }
  return true;
}

//7. Equality 
const stringFive = '5';
const numberFive = 5;
//==loose equality, with type conversion
console.log(stringFive == numberFive); // ture
console.log(stringFive != numberFive); // false

//===strict equality, with type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference 
const jei1 = { name: 'jayeon' };
const jei2 = { name: 'jayeon' };
const jei3 = jei1;
console.log(jei1 == jei2); // false
console.log(jei1 === jei2); // false
console.log(jei1 === jei3); // true


//8. if operators: if
// if, else if, else
const name = 'jei';
if (name === 'jei') {
  console.log('welcome')
} else {
  console.log('bye');
}





// 9. ternary operator: ?
// condition ? value1: value2;
name = 'jei';
console.log(name === 'jei' ? 'yes' : 'no');

// ture : false


//10.  Switch statemnet 
//use for multiple if check
//use for enum-like value check
//use for multiple type check in TS

const browser = 'Firefox';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('Love!');
    break;
  default:
    console.log('same all');
    break;
}

// 11. Loops
//while , while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);


//for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i},j:${j}`);
  }
}

// break, continue 

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1.${i}`);
  }
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}