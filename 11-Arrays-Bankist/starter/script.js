'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//展示交易记录
const displayMovements = function (movements, sort = false) {
  //清空容器中的记录
  containerMovements.innerHTML = '';
  //sort会改变原数组 所以使用slice复制一份
  const movs = sort
    ? movements.slice(0).sort((a, b) => (a > b ? 1 : -1))
    : movements;

  movs.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//给用户对象添加一个用户名 根据owner的小写首字母
const createUsernames = accs => {
  accs.forEach(function (acc) {
    //在传入的数组中创建一个新的叫username的属性
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//计算出当前总金额
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, value) => (acc += value), 0);
  account.balance = balance;
  labelBalance.textContent = `${account.balance} EUR`;
};

//计算收入与支出与利息
const calcDisplaySummary = function (movements, interestRate) {
  const incomes = movements
    .filter(value => value > 0)
    .reduce((acc, value) => (acc += value));
  const outcomes = movements
    .filter(value => value < 0)
    .reduce((acc, value) => (acc += value));
  const interest = movements
    .map(value => (value > 0 ? value : Math.abs(value)))
    .reduce((acc, value) => {
      //利息不够1则收1
      let int =
        value * (value * interestRate) > 1 ? (value * interestRate) / 100 : 1;
      return (acc += int);
    }, 0);
  //把总收入支出与利息显示在界面中
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (currentAccount) {
  //展示交易记录
  displayMovements(currentAccount.movements);
  //计算出当前总金额
  calcDisplayBalance(currentAccount);
  //计算收入与支出与利息
  calcDisplaySummary(currentAccount.movements, currentAccount.interestRate);
};

//登陆事件
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  //阻止默认操作 button是提交
  event.preventDefault();
  currentAccount = accounts.find(
    value =>
      inputLoginUsername.value === value.username &&
      Number(inputLoginPin.value) === value.pin
  );
  //没有用户的话会是undefined 在if中会转成false
  if (currentAccount) {
    //登陆成功 展示UI和信息
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //计算并展示信息
    updateUI(currentAccount);
    //清空登录信息
    inputLoginUsername.value = inputLoginPin.value = '';
    //让账号密码输入框失去焦点
    inputLoginPin.blur();
    inputLoginUsername.blur();
  }
});

//转账
btnTransfer.addEventListener('click', function (event) {
  //阻止默认操作 button是提交
  event.preventDefault();
  //拿到要转账的人的对象
  const TransferAccount = accounts.find(
    value => value.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  //金额需要是正数 金额小于等于当前余额 转账对象不能是自己 转账对象是存在的
  if (
    amount > 0 &&
    TransferAccount &&
    amount <= currentAccount.balance &&
    TransferAccount.owner !== currentAccount.owner
  ) {
    //转账过程
    currentAccount.movements.push(-amount);
    TransferAccount.movements.push(amount);
    //重新计算并展示信息
    updateUI(currentAccount);
    //清空转帐栏信息
    inputTransferTo.value = inputTransferAmount.value = '';
  }
});

btnLoan.addEventListener('click', function (event) {
  //阻止默认操作 button是提交
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  //所有记录至少一条需大于借出的金额的10%以上
  if (
    amount > 0 &&
    currentAccount.movements.some(value => value >= amount * 0.1)
  ) {
    //更新记录
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

//注销账号
btnClose.addEventListener('click', function (event) {
  //阻止默认操作 button是提交
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //findindex和indexOf都是返回下标 但是findindex可以写条件 而indexOf只是判断是否存在
    //找到要删除的账户的index
    const index = accounts.findIndex(
      acc => currentAccount.username === acc.username
    );
    console.log(index);
    //将accounts数组中的账号删除
    accounts.splice(index, 1);

    //隐藏UI
    containerApp.style.opacity = 0;
    //清空注销栏信息
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

//交易记录排序
let sorted = false;
btnSort.addEventListener('click', function () {
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice 返回一个从数组下标开始截取的数组
console.log(arr.slice(2));
//不包含第四个
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); //d e
console.log(arr.slice(1, -2));
console.log([...arr]);

//splice 和slice一样功能但是会改变原来的数组
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
//第二个参数表示的是长度而不是具体索引下标
arr.splice(1, 2);
console.log(arr);

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
//会改变原数组
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join(' - '));
*/

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
//不知道数组长度 拿到数组的最后一个值
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/

/*

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    //Math.abs 取绝对值
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----------------FOREACH-------------------');

//当前元素 当前索引 当前数组
//参数名可随意 顺序不可变
movements.forEach(function (movement, index, array) {
  //接收数组当前的元素
  if (movement > 0) {
    console.log(`Movement ${index + 1} : You deposited ${movement}`);
  } else {
    //Math.abs 取绝对值
    console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/

/*
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
//如果单纯省略第二个变量会造成混乱
//因此用_表示无用的参数
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
   So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
   (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult
   ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCP = dogsJulia.slice(1, -2);
  const juliaBothKate = juliaCP.concat(dogsKate);
  juliaBothKate.forEach(function (mov, i, arr) {
    let result =
      mov >= 3
        ? `Dog number ${i + 1} is an adult, and is ${mov} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(result);
  });
  console.log(juliaBothKate);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-----DATA 2-----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (value, key, map) {
//   return value * eurToUsd;
// });

const movementsUSD = movements.map((value, key, map) => value * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

//foreach可以在原数组创建一个新的属性来存储，map则不会

const movementsDescriptions = movements.map((value, index, arr) => {
  let temp = value > 0 ? `deposited` : `withdrew`;
  return `Movement ${index + 1} : You ${temp} ${Math.abs(value)}`;
});
console.log(movementsDescriptions);
*/

/*

const deposits = movements.filter(function (mov) {
  //会把false过滤掉
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*

//reduce的回调函数第一个参数是累加
//累加头次调用函数时默认是数组第一个元素的值，之后是上一次回调函数的返回值
//第二个参数是累加的初始值
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//找到最大值
//这里reduce第二个参数不放0是因为数组存在负数，可能数组的最大值就是负数
const maximum = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);

console.log(maximum);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
   humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanage = ages.map(function (value, index) {
    return value <= 2 ? 2 * value : 16 + value * 4;
  });
  const adult = humanage.filter(value => value >= 18);
  const humanAvgAge =
    adult.reduce((acc, value) => (acc += value), 0) / adult.length;

  console.log('humanage:' + humanage);
  console.log('adult:' + adult);
  console.log(humanAvgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*

//Coding Challenge #2 一步到位 链式编程

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr); //可以中途查看数据变化
    return mov * eurToUsd;
  })
  .reduce((acc, value) => (acc += value));
console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = ages =>
  ages
    .map(value => (value <= 2 ? 2 * value : 16 + value * 4))
    .filter(value => value >= 18)
    .reduce((acc, value, index, arr) => (acc += value / arr.length), 0);

const result1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const result2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(result1, result2);
*/

/*
//filter会返回符合条件的新数组 find会返回第一个符合条件的对象
console.log(movements.filter(value => value < 0));
console.log(movements.find(value => value < 0));

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
console.log(movements);
//存在就true
console.log(movements.includes(-130));

const anyDeposits = movements.some(value => value > 3500);
console.log(anyDeposits);
*/

/*
//some只要符合一个条件就是true every需要所有都满足
console.log(movements.every(value => value > 0));

const deposit = value => value > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, value) => (acc += value), 0);
console.log(overallBalance);

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, value) => (acc += value), 0);
console.log(overallBalance2);

const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, value) => (acc += value), 0);
console.log(overallBalance3);
*/

/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
//排序 会改变原数组
console.log(owners.sort());
//数字一样会按照字符串的方式排序
// console.log(movements.sort());

//返回 < 0 a在b之前
//返回 > 0 b在a之前
movements.sort((a, b) => (a > b ? 1 : -1));
console.log(movements);
//降序
movements.sort((a, b) => (a > b ? -1 : 1));
console.log(movements);
*/

/*
const x = new Array(7);
//填充1到数组x 从3开始到5结束
x.fill(1, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomArr = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 100) + 1
);
console.log(randomArr);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    value => value.textContent.replace('€', '')
  );
  console.log(movementUI);
  console.log(movementUI.reduce((acc, value) => (acc += value), 0));
});
*/

/*
///////////////////////////////////////
// Array Methods Practice

//1.
const bankDepositSum = accounts
  .map(value => value.movements) //拿到所有数组
  .flat() //把所有数组整合在一起
  .filter(value => value > 0) //过滤负数
  .reduce((acc, value) => (acc += value)); //计算总和

console.log(bankDepositSum);

//2.
// const numDeposits$1000 = accounts
//   .map(value => value.movements) //拿到所有数组
//   .flat() //把所有数组整合在一起
//   .filter(value => value >= 1000).length; //过滤大于等于1000

const numDeposits$1000 = accounts
  .map(value => value.movements) //拿到所有数组
  .flat() //把所有数组整合在一起
  .reduce((acc, value) => (value >= 1000 ? ++acc : acc), 0);

console.log(numDeposits$1000);

//3.
const sums = accounts
  .map(value => value.movements)
  .flat()
  .reduce(
    (acc, value) => {
      // value > 0 ? (acc.deposits += value) : (acc.withdrawals += value);
      acc[value > 0 ? 'deposits' : 'withdrawals'] += value;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

//4.
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, 
   calculate the recommended food portion and add it to the object as a new property. 
   Do NOT create a new array, simply loop over the array. 
   Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
   HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
   and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
   and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
   like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
   (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: 
        current > (recommended * 0.90) && current < (recommended * 1.10). Basically, 
        the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1.添加狗的推荐食量
dogs.forEach(value => {
  value.recommendedFood = value.weight ** 0.75 * 28;
});

//2.
dogs.map(value => {
  if (value.owners.includes('Sarah')) {
    if (value.curFood < value.recommendedFood * 0.9)
      console.log("it's eating too little");
    if (value.curFood > value.recommendedFood * 1.1)
      console.log("it's eating too much");
  }
});

//3.
const ownersEatTooMuch = dogs
  .filter(value => value.curFood > value.recommendedFood * 1.1)
  .flatMap(value => value.owners);
const ownersEatTooLittle = dogs
  .filter(value => value.curFood < value.recommendedFood * 0.9)
  .flatMap(value => value.owners);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`);

//5.
console.log(
  `Any dog eating EXACTLY ? ${dogs.some(
    value => value.curFood === value.recommendedFood
  )}`
);
//6.
const earingOKAY = value =>
  value.curFood < value.recommendedFood * 1.1 &&
  value.curFood > value.recommendedFood * 0.9;
console.log(`Any dog eating OKAY ? ${dogs.some(earingOKAY)}`);

//7.
console.log(dogs.filter(earingOKAY));

//8.
console.log(
  dogs
    .slice()
    .sort((a, b) => (a.recommendedFood - b.recommendedFood > 0 ? 1 : -1))
);
