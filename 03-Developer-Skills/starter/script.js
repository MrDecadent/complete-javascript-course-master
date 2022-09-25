// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(25);

const calcAge = bitrhyear => 2037 - bitrhyear;
*/

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const temperatures = [3, 'error', -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const concatArray = (array1, array2) => array1.concat(array2);

console.log(concatArray(['a', 'b', 'c'], ['m', 'r', 'd']));
*/

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius'),
  };
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
