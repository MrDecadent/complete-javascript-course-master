'use strict';

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
