// Object
// one of the javascript's data types
// a collection of related data and /or functionality 
//Nearly all object in JavaScript are instance of Object
//objec {key: value};

//1. literals and propertties

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function showing(person) {
  console.log(person.name);
  console.log(person.age);
}

const jay = { name: 'jay', age: 5 };

showing(jay);

jay.hasJob = true;
console.log(jay.hasJob);

delete jay.hasJob; // delete and added 

// 2. Computed properties
//key should be always string
console.log(jay.name);
console.log(jay['name']);

jay['hasJob'] = true; // 추가가능

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(jay, 'name');

//3. property value shorthand
const person1 = { name: 'bob', age: 3 };
const person2 = { name: 'steve', age: 5 };
const person3 = new Person('dave', 4);

console.log(person3);

//4. constuctor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// this 는, this ={}; -> return this 라는 뜻

//5. in operator: property existence check ( key in obj)

console.log('name' in jay); // ture
console.log('age' in jay); // ture
console.log('random' in jay); // false

//6. for..in vs for..of
//for(key in obj)

for (key in jay) {
  console.log(key);
}

// for (value of interable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}


//7. Fun cloning
//Object.assign (dest, [obj1, obj2, ovj3..])

const fruit1 = { color: 'red', size: 'big' };
const fruit2 = { color: 'blue' };
const mixed = Object.assign({}, fruit1, fruit2);

// assign 덥어 씌울수 있다.
console.log(mixed.color);
console.log(mixed.size);


// 오브젝트를 복사 맘대로 바꾸기

