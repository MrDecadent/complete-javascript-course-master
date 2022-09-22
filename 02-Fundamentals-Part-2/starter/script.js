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