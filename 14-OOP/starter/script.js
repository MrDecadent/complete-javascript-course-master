'use strict';

/*
const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  // 不要在构造函数中创建方法
  //   this.calcAge = () => console.log(2022 - this.birthYear);
};

// 1. 创建了一个空对象
// 2. 函数被调用了，并设定了this的指向{}
// 3. 新创建的对象连接到了原型
// 4. 函数自动返回空对象
const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilad', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes 原型
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// 实例访问原型的属性
Person.prototype.species = 'Homo Sapines';
console.log(jonas.species, matilda.species);
// 但这个属性是原型的 不是实例的
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//object.prototype(原型链的最高级)
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//扩展原型的方法 所有子类都能使用 但不建议这样做
// 如果js下个版本加了同名的新方法 你不得不更变
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

//'brake' method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BWM', 120);
car1.accelerate();
car1.brake();
const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake();
*/

/*
//ES6 创建类
// 类表达
//const PersonCl = class{}

// 类声明
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //这个方法会创建在类的原型上而不会在类本身
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // 静态方法
  static hey() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__);

//依然可以通过原型的方式创建方法
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

//getter and setter
const account = {
  owner: 'jonas',
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 114;
console.log(account.movement);

const walter = new PersonCl('Walter', 1965);

// hey是静态方法 所以无法继承 walter无法使用
// PersonCl.hey();
// walter.hey();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1991;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };

  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car3 = new Car('Ford', 120);
car3.accelerate();
car3.brake();
console.log(car3.speedUS);
car3.speedUS = 50;
console.log(car3);
