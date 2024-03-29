'use strict';

// prettier configuration
//const x = '23';
//const calcAge = birthYear => 2037 - birthYear;

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM SOLVING 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp ( -6 i 17)
// - How to compute max and min temperatures? ( -6 i 17)
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors? 
// - Find max value in temp array?  
// - Find min value in temp array?
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temperatures.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min);
    return max - min; // - - = +
};
const amplitude = calcTempAmplitude(temperatures); // max = 17, min = -6
console.log(amplitude);
*/



/*
 PROBLEM SOLVING 2:
 Function should now receive 2 arrays of temps
 1) Understanding the problem
 - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
 2) Breaking up into sub-problems
 - Merge 2 arrays? 
*/
/*
const temperatures2 = [3, -2, -9, -1, 'error', 9, 13, 27, 15, 14, 9, 5];

const calcTempAmplitude2 = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min);
    return max - min; // - - = +
};
const amplitude2 = calcTempAmplitude2(temperatures, temperatures2); // max = 17, min = -6
console.log(amplitude2);
*/


// DEBUGGING
/*
const measeureKelvin = function() {
    const measeurement = {
        type: 'temp',
        unit: 'celcius',
        value: prompt('Degrees celsius:')
    }
    const kelvin = measeurement.value + 273;
    return kelvin;
}
console.log(measeureKelvin()); // bug - wychodzi 'value273' 
*/

//Solution
// zamiana string na number

/*
const measeureKelvin = function() {
    const measeurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degrees celsius:'))
    };

    console.log(measeurement);
    console.table(measeurement)
    //console.warn(measeurement.value);
    //console.error(measeurement.value);
    
    const kelvin = measeurement.value + 273;
    return kelvin;
}
console.log(measeureKelvin());
*/
//Debugging in Chrome

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
const temperature1 = [17, 21, 23];
const temperature2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let string = '... '
    for(let i = 0; i < arr.length; i++ ){
        string += `${arr[i]}ºC in ${i + 1} days ... `
    }
    console.log(string);
};
printForecast(temperature1)
*/