'use strict';

const Person = function (firseName, birthYear) {
  //   console.log(this);
  this.firseName = firseName;
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
