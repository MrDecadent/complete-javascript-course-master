'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      //   var str2 = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    // console.log(str); //报错
    // console.log(str2); //var的作用域提升至函数为止 所以正常输出

    // console.log(add(2, 3)); //严格模式下报错 非严格模式可执行
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*
console.log(me); //undefiend
// console.log(job); //报错
// console.log(year); //报错

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3)); //正常输出
//因为箭头函数和表达式函数已经是值了 不能在此之前使用
// console.log(addExpr(2, 3)); //报错
// console.log(addArrow(2, 3)); //报错

//函数
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Examlpe
//这里因为var的原因 numProducts是undefined 转义成了false
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products delete');
}

var x = 1;
let y = 2;
const z = 3;

//var会创建全局变量
//window.y和window.z都是undefined
console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
*/

// console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //箭头函数不具备this的功能,所以会被判定为全局的this
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log();
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
//this只想调用该方法的对象 所以这里的this是matilda
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

/*
//var会在全局创建属性 箭头函数没有自己的this 调用的全局
//所以等于调用全局的firstName属性
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // //这个方法的调用者是calcAge 但是calcAge没有year这个属性
    // isMillenial();

    //Solution1
    // const self = this
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    //Solution2
    //箭头函数没有自己的this 所以会使用父函数 calcAge的this
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //箭头函数没有自己的this 所以这里的this.firstName是undefined
  greet: () => console.log(`Hey ${this.firstName}`),

  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
};

jonas.greet();
jonas.calcAge();

//arguments
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
*/

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Me:', me);
console.log('Friend:', friend);
*/

//原始类型
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//引用类型
const jessica = {
  first: 'Jessica',
  lastName: 'Williams',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//复制对象
const jessica2 = {
  first: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//浅拷贝 只拷贝属性
//如果对象中还有一个对象 复制的结果的对象依然会指向同一个地址
//这里jessica2的lastName不会随着jessicaCopy变动,但是family会
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
