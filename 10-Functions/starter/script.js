'use strict';

/*
const bookings = [];

const createBooking = function (
  flingthNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flingthNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH114', 2, 500);
createBooking('LH114', 5);
//跳过参数 undefined
createBooking('LH114', undefined, 500);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247943134,
};

const checkIn = function (flingthNum, passenger) {
  flingthNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 247943134) {
    alert('Check in');
  } else {
    alert('Worng passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Originall string:${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

//回调函数
transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Dcd');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'MrDecadent');
lufthansa.book(114, 'MrDecadent');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

//直接使用的话 方法中的this指向全局 this.airline为undefined
// book(23, 'Sarah Williams');

//call 让this指向指定的对象
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(swiss, 514, 'Mr Dcd');
console.log(swiss);

//apply与call基本一样 区别是参数需要用数组的形式 现在基本不使用
const flightData = [512, 'Mr Decadent'];
book.apply(swiss, flightData);
console.log(swiss);
//与上面apply一样
book.call(swiss, ...flightData);

//bind
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLX(24, 'Steven Williams');
bookLH(25, 'Steven Williams');

//可以预先设置参数
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//buyPlane函数中的this指向了.buy这个button 所以this.planes是NaN
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

const butPlaneBindBuyButton = lufthansa.buyPlane.bind(lufthansa);
document.querySelector('.buy').addEventListener('click', butPlaneBindBuyButton);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//不需要绑定this的时候可以使用null
const addVAT = addTax.bind(null, 0.23);
console.log('VAT税率:' + addVAT(200));

const setTax = rate => {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = setTax(0.23);
console.log(addVAT2(200));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, 
       increase the value AT POSITION 3 of the array by 1. 
       Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
   which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
   This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
       Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const result = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (
      typeof result !== 'number' ||
      result < 0 ||
      result > this.options.length - 1 ||
      isNaN(result)
    ) {
      console.log(`answer ${result} wouldn't make sense, right?`);
    } else {
      this.answers[`${result}`]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
