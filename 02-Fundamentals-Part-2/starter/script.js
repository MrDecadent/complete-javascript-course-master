//激活严格模式 必须是第一行代码
'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest){//Driver少了一个s 没有这个变量 如果不激活严格模式 代码不会运行但是也不报错
    hasDriverLicense = true;
};

if(hasDriversLicense) console.log('I can drive :D');

//使用保留字作为变量名的时候 严格模式会提示
// const interface = 'Audio';
const private = 534;
*/

/*
function logger() {
    console.log('My name is MrD');
}

//调用函数
logger();
logger();

function fruitProcessor(apples,oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,3);

console.log(appleOrangeJuice);
*/

/*
function calcaAge1(birthYear){
    return 2077 - birthYear;
}

const age1 = calcaAge1(1999);//可以在函数定义前调用
console.log(age1);

//匿名函数
const calcAge2 = function (birthYear){
    return 2077 - birthYear;
}

const age2 = calcAge2(1998);//不可以在函数定义前调用
console.log(age2);
*/

//箭头函数
const calcAge3 = birthYear => 2077 - birthYear;

const age3 = calcAge3(1999);
console.log(age3);

const yearsUnitRetirement = (birthYear,firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 -age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUnitRetirement(1999,'MrD'));