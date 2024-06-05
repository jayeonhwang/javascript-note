'use strict';
//클래스 오브젝트 차이점 객체지향 언어 클래스 정리
//object-oriendted programing 
//class: template
//object: instance of class
//JavaScript classes
// -introduced in ES6
//- syntactical sugar over prototype-based inheritace

// class :  fields and methods
//1.

class Person {
  //constructor
  constructor(name, age) {
    //field
    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    console.log(`${this.name}: hello!`);
  }

}

const jay = new Person('jay', 20);
console.log(jay.name);
console.log(jay.age);

jay.speak();

// Getter and Setters
class User {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  get age() {
    //set and get를 설정하면 constructor는 get&setter를 호출, uncaught Range error callstack. 이름을 다른게 _age로 설정.
    return this._age;
  }
  // 나이는 -1 을 쓸수 없기 때문에 사용자가 넣어도 마이너스 값이 나오지 않도록 세팅
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

//3. Field (public, private)
class Experiment {
  publicField = 2;
  #privatField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
// can not r&w on outside of the class, result = undefinded

//4. Stactic properties and method

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }

  // even set the object, result comeout with class name..

}

//5. 객체지향 상속, 다양성 Inheritance
//  a way for one class to extend another class.

//재사용가능 클라스.. 공통

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }

}

class Rectangle extends Shape { }

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

//overwriting 

class Triangle extends Shape {
  draw() {
    super.draw(); // super call original method
    console.log('👑');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 20, 'red');

console.log(triangle.getArea());
console.log(triangle.draw());

// 6. class checking: instanceOf

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

//switch

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'mulitply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculate('remainder', 12, 5));