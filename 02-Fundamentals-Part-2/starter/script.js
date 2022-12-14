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

/*
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
*/

/*
//函数调用
const cutFruitPieces = fruit => fruit * 4;

const fruitProcessor = function(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2,4));
*/

/*
const calcAge = birthYear => 2077 - birthYear;

const yearsUnitRetirement = (birthYear,firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 -age;
    if(retirement > 0){
        return retirement;
    }
    return -1;
    // return `${firstName} retires in ${retirement}`;
}

console.log(yearsUnitRetirement(1999,'MrD'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
   and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (score1,score2,score3) => (score1 + score2 + score3)/3;

const dolphinsAvgScore = calcAverage(85,54,41);
const koalasAvgScore = calcAverage(23,34,27);

const checkWinner = (avgDolhins,avgKoalas) =>{
    if(avgDolhins >= avgKoalas*2){
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})🏆`);
    }else if(avgKoalas >= avgDolhins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})🏆`);
    }else{
        console.log('No team wins XD');
    }
}

checkWinner(dolphinsAvgScore,koalasAvgScore);
*/

/*
//数组
const friends = ['海豹蝈蝈','八猪','大象蝈蝈'];
console.log(friends);

const years = new Array(1999,2022,2021);
console.log(years[0]);

console.log(years.length);

friends[2] = '鱼蝈蝈';
console.log(friends);

const firstName = 'Mr';
const MrDcd = [firstName, 2022 - 1999,'programmer',friends];
console.log(MrDcd);
console.log(MrDcd.length);

const calcAge = birthYear => 2077 - birthYear;
const years = [1990,1697,2077,2010,1999];

console.log(calcAge(years[0]));
*/

/*
const friends = ['海豹蝈蝈','八猪','大象蝈蝈'];
//数组尾部添加元素 返回新数字的长度
friends.push('鱼蝈蝈');
console.log(friends);
//数组头部添加元素 返回新数字的长度
friends.unshift('韶光猪');
console.log(friends);
//数组尾部删除元素 返回删除的元素
friends.pop();
console.log(friends);
//数组头部删除元素 返回删除的元素
friends.shift();
console.log(friends);
//元素的位置
console.log(friends.indexOf('八猪'));
//是否存在该元素
console.log(friends.includes('八猪'));
friends.push(23);
console.log(friends.includes('23'));//false 会严格执行 不会类型转换
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
   calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
   Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = billValue => {
    if(billValue >= 50 && billValue <= 300){
        return billValue * 1.15;
    }else{
        return billValue * 1.2;
    }
}

const calcTip2 = billValue => billValue >= 50 && billValue <= 300 ? billValue * 1.15 : billValue * 1.2;

console.log(calcTip2(100));

const bill = [125,555,44];
console.log(calcTip(bill[0]));
console.log(calcTip(bill[1]));
console.log(calcTip(bill[2]));

const total = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
console.log(total);
*/

/*
//数组
const MrDecadent = [
    'Mr',
    'D',
    2022-1999,
    'Programmer',
    ['海豹蝈蝈','八猪','大象蝈蝈']
];

//对象
const Mr = {
    firstNmae : 'li',
    lastName : 'HaoXuan',
    age : 2022 - 1999,
    job : 'Programmer',
    friends : ['海豹蝈蝈','八猪','大象蝈蝈']
};
*/

/*
const Mr = {
    firstName : 'li',
    lastName : 'HaoXuan',
    age : 2022 - 1999,
    job : 'Programmer',
    friends : ['海豹蝈蝈','八猪','大象蝈蝈']
};

console.log(Mr);

console.log(Mr.lastName);

const nameKey = 'Name';
console.log(Mr['first' + nameKey]);
console.log(Mr['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Mr?');
console.log(Mr.interestedIn);//undefiend
console.log(Mr[interestedIn]);

if(Mr[interestedIn]){//如果不存在 undefined会被隐式转换成false
    console.log(Mr[interestedIn]);
}else{
    console.log('Wrong request! What do you want to know about Mr?')
}

Mr.location = 'GZ';


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`MrDecadent has ${Mr.friends.length} friends, and his best friend is called ${Mr.friends[2]}`);
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calAge: birthYear => 2037 - birthYear
    
    // calAge: function() {
    //     return 2037 - this.birthYear;
    // }
    
    calAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} driver's license`;
    }
  };

  console.log(jonas['calAge']());
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
   Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
   Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    heigth: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.heigth ** 2;
        return this.bibmim;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    heigth: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.heigth ** 2;
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
*/

//循环

// console.log('Lifting weights repetition 1 🏋️‍');

/*
for(let rep = 1;rep <= 10 ; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍`);
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i<jonas.length; i++){
    console.log(jonas[i]);
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1999,2007,1988,2020];
const ages = [];

for(let i = 0; i<years.length; i++){
    ages.push(2037 - years[i]); 
}

console.log(ages);

console.log('--- ONLY STRING ---');
for(let i = 0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i<jonas.length; i++){
    console.log(jonas[i]);
    if(typeof jonas[i] === 'number') break;
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = jonas.length-1 ; i>=0 ; i--){
    console.log(jonas[i]);
}

for(let rep = 1;rep <= 3 ; rep++){
    for(let a = 1;a <= 5; a++){
        console.log(`Lifting weights repetition ${rep} group ${a} 🏋️‍`);
    }
}
*/

// for(let rep = 1;rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍`);
// }

/*
let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep} 🏋️‍`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1 ;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end');
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
   Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
   This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! 
   Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. 
       Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. 
       This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const bills = [22,295,176,440,37,105,10,1100,86,52];
const totals = [];
const calcTip = billValue => {
    if(billValue >= 50 && billValue <= 300){
        return billValue * 1.15;
    }else{
        return billValue * 1.2;
    }
}

for(let i = 0; i < bills.length; i++){
    totals.push(calcTip(bills[i]));
}

console.log(totals);

const calcAverage = arr => {
    let sum = 0;
    let a = 0;
    while(a < arr.length){
        sum += arr[a];
        a++;
    }
    return sum/arr.length;
}

console.log(calcAverage(totals));
*/