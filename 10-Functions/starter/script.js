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
