'use strict';
//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position

const fruits = ['🍎', '🍌'];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.clear();

//3. looping over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of

for (let fruit of fruits) {
  console.log(fruit);
}

//c. for each
fruits.forEach((fruit, index) => console.log(fruit, index));

//d. addtion, deletion, copy
//push : add an item to the end
fruits.push('🍒', '🍉');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//add or remove an item to the begining 
// unshift - add
fruits.unshift('🍓');
console.log(fruits);
// shift -remove
fruits.shift();
console.log(fruits);

//note!! shift, unshift - slower than push or pop

//splice; remove an item by index position
fruits.push('🍋', '🍉', '🍊');
console.log(fruits);
fruits.splice(2, 1); // (start, delete count)
console.log(fruits);
fruits.splice(1, 1, '🍏'); // (start, deletecount, addtional on empty postion)
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🫐'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear()
//5.searching
//find the index
console.log(fruits);
console.log(fruits.indexOf('🍏')); // 1
console.log(fruits.indexOf('🥑')); // -1 if the value not exist.
//includes
console.log(fruits.includes('🍑')); //false
console.log(fruits.includes('🍉')); // true

//lastIndexOf

fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); //5


