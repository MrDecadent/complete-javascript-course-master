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
