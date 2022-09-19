/*
let js = 'amazing';
console.log(10 +45 +75 -10);

let firstName = "MrDecadent";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 114);
console.log(typeof 'MrD');

javascriptIsFun = "BlackPink";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);


//let声明变量
let age = 30;
age = 31;

//const声明常量
const bitrhYear = 1999;
// bitrhYear = 1998; //报错
// const job; //报错 需要初始值

//var ES6之前的声明变量的方式 不建议使用
var job = 'programmer';
job = 'student';

//全局变量 不建议使用
lastName = '浩轩';
console.log(lastName);


//数字运算符
const nowYear = 2022
const ageMrD = nowYear-1999;
const ageSeal = nowYear-1991;
console.log(ageMrD,ageSeal);
//2 ** 3 2的三次幂
console.log(ageMrD * 2 ,ageSeal / 2 ,2 ** 3);

const firstName = 'Mr';
const lastName = 'Decadent';
console.log(firstName+lastName);

//赋值运算符
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//比较运算符
console.log(ageMrD > ageSeal);


const nowYear = 2022
const ageMrD = nowYear-1999;
const ageSeal = nowYear-1991;
// -的优先级大于>
// console.log(nowYear - 1999 > nowYear - 2011);

let x,y;
x = y = 25 -10 -5;
//赋值的优先级小于减号 结果为10 运算顺序从右到左
console.log(x,y);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

const marksBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight *johnHeight);

console.log('Marks BMI is ' + marksBMI);
console.log('John BMI is ' + johnBMI);

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);
*/

/*
const firstName = 'MrD';
const job = 'Programmer';
const bitrhYear = 1999;
const nowYear = 2022;

const mrD = "I'm " + firstName + ', a ' + (nowYear - bitrhYear)
+ ' years old ' + job + '!';
console.log(mrD);

//模板字符串
const mrDNew = `I'm ${firstName}, a ${nowYear - bitrhYear} years old ${job}!`;
console.log(mrDNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

if(age >= 18){
    console.log('can start driving license😁');
}else{
    const yearsLeft = 18 - age;
    console.log(`too young too simple. Wait another ${yearsLeft} years 🤔`);
}
let century;
const bitrhYear = 2022;
if(bitrhYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. 
   The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

const marksBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight *johnHeight);

console.log('Marks BMI is ' + marksBMI);
console.log('John BMI is ' + johnBMI);

const markHigherBMI = marksBMI > johnBMI;
if(markHigherBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`);
}
*/

/*
//类型转换
const inputYear = '1999';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

//类型强制转换
console.log('I am ' + 23 + 'years old');//23被转换成了String
//减号让字符串强转成数字 加号让数字强转成字符串
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
*/

//0, '', undefined, null, NaN 这五个值被转成布尔值时为false

/*
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(''));//空值 false
console.log(Boolean('MrD'));//true
console.log(Boolean({}));//空对象 true

const money = 0;
if(money){//括号中内容会隐式转换为布尔值
    console.log("Don't spend it all");
}else{
    console.log("You should get a job!");
}

let height;
if(height){//如果没有给height赋值 为undefined 会被转换成false
    console.log('Year height is defined');
}else{//但如果给height赋值为0 强制转换一样会把它转换成false
    console.log('Height is UNDEFINED');
}
*/

/*
//===严格比较运算符，不会进行类型转换   尽量使用
//==松散比较运算符，会进行类型转换
const age = '18';
if(age === 18){
    console.log('You just became an adult :D (严格)');
}

if(age == 18){
    console.log('You just became an adult :D (松散)');
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite,favourite);

if(favourite === 114514){
    console.log('你是一个很臭的人');
} else if(favourite === 1919){
    console.log('你同样是一个很臭的人');
} else{
    console.log('不是114也不是1919');
}

if(favourite !== 23){
    console.log('你输入的数字不是23');
}
*/

/*
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;
if(shouldDrive && !isTired){
    console.log('MrD is able to drive!');
}else{
    console.log('someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
   Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
            a team only wins if it has a higher score than the other team, 
            and the same time a score of at least 100 points. 
    HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
            So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
            Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
const dolphinsAvgScore = (96+108+89)/3;
const koalasAvgScore = (88+91+110)/3;

if(dolphinsAvgScore>koalasAvgScore){
    console.log('Winner is Dolphins! 🏆');
}else if(dolphinsAvgScore<koalasAvgScore){
    console.log('Winner is Koalas! 🏆');
}else{
    console.log('Two teams be a draw');
}
*/

/*
// BONUS
const dolphinsAvgScore = (97+112+101)/3;
const koalasAvgScore = (109+95+106)/3;
if( dolphinsAvgScore>koalasAvgScore && dolphinsAvgScore>=100){
    console.log('Winner is Dolphins! 🏆');
}else if(dolphinsAvgScore<koalasAvgScore && koalasAvgScore>=100){
    console.log('Winner is Koalas! 🏆');
}else if(dolphinsAvgScore === koalasAvgScore && koalasAvgScore>=100 && dolphinsAvgScore>=100){
    console.log('Two teams be a draw');
}else{
    console.log('No one wins the trophy ')
}
*/

const day = 'tuesday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'tuesday'){
    console.log('Write code examples');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Write code examples');
}else{
    console.log('Not a valid day!');
}