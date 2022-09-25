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

/*
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
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = temperatureArray => {
  let arrLen = temperatureArray.length;
  let i = 0;
  let content = '';
  while (i < arrLen) {
    content += `... ${temperatureArray[i]}ºC in ${i + 1} days `;
    i++;
  }
  console.log(content);
};

printForecast([12, 5, -5, 0, 4]);
