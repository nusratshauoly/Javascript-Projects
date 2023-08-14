// Remember, we're gonna use strict mode in all scripts now!

////////////////////////////

// follow this prettier website
//prettier.io/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video: 55: Setting up prettier and vs code
/*

-- first go to extension and install prettier then go to settings (follow youtube video) or these video and fix javascript format on settings 

--to use ('') single quote in js open a file (.prettierr.c) and 
--put singleQuote : true; and

-- if there is only one parameter in function give no bracket thats why give these command
"arrowParens": "avoid";


{
  "singleQuote": true,
  "arrowParens": "avoid"
}


*/
https: 'use strict';

const x = '23';
if (x === 23) console.log(23);

if (x === 23) {
}
//-- if there is only one parameter in function give no bracket thats why give these command
// "arrowParens": "avoid";

const calcAge = birthYear => 2037 - birthYear;

/*
to create shortcut for (console.log) => (cl)
go to vs code => code  => preferences => configure user snippets / user snippets => open a search option click there and select (new global snippets file) and type any name like (jonas) there and (enter) => will open a file like (jonas.code-snippets) and we can add any shortcut snippet there (console.log) er shortcut e ja type korbo prefix e tai boshabo.

// Example:

	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "cl",
		"body": ["console.log();"],
		"description": "Log output to console"
	}
*/
// cl
console.log(calcAge);

console.log('');
console.log();

// 2. another extention is (ESlint, image previewer for html,  Monokai pro for theme color, settings sync, todo highlight - highlight text see youtube video how to enable it or in this video )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 56: Installing Node.Js, and setting up a dev environment

/*
// extensions : Live server  -- in vs code => go live

// install node.js
https://nodejs.org/en/download


// clear the terminnal (command + k)

// open vs code terminal -- node -v (check the node version)
-- sudo npm install live-server -g (that will make the live server tool globally)  enter;
-- give the password of pc.
-- live server
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 57: learning how to code
/*
1. set a goal first whn to take the job (in 3/ 4/ 6 months)
2. learn and share publicly (twitter , github)
3. after learning build big projects on your own
4. take challenges
5. learn even when youre working

*/

////////////////////////////////////////////////////////////////////////////////////////////////

// video - 58: How to think like a developer: Become a problem solver

/*
problems when to solve a programming problem

1. He jumps at the problem without much thinking
2. He implements his solutions in an unstructured way
3. He gets stressed out when things don't work
4. he is too proud to research solutions

// how to fix solve these problems

-- stay calm and slow down, don't just jump at a problem without a plan

-- Take a very logical and rational approach (programming is just a logic, in the end...)

**** 4 steps framework to solve the problem......

1. Ist step : Make sure you 100% understand the problem. Ask the right question to get a clear picture of the problem.

* Problem: We need a function that reverses whatever we pass into it ?

* ***** Question asked: ***** *
-- What does "whatever" even mean in this context? What should be reversed? 
* Answer: Only strings, numbers, and arrays make sense to reverse...

-- What to do if something else is passed in?

-- What should be returned? Should it always be a string, or should the type be the same as passed in?

-- How to recognize whether the argument is a number, a string, or an array?

-- How to reverse a number,  a string, and an array?



2. 2nd steps: Divide and conquer: Break a big problem into smaller sub-problems.

* Problem: We need a function that reverses whatever we pass into it.

** sub - problems:
-- Check if argument is a number, a string, or an array

-- Implement reversing a number

-- Implement reversing a string

-- Implement reversing an array

-- Return reversed value


3. 3rd steps: Don't be afraid to do as much reserach as you have to like google, stack overflow and MDN web docs

* Problem: We need a function that reverses whatever we pass into it.

-- How to check if a value is a number in Javascript?

-- How to check if a value is a string in Javascript?

-- How to check if a value is an array in Javascript?

-- How to reverse a number in Javascript?

-- How to reverse a string a Javascript?

-- How to reverse an array in Javascript?


4. 4th steps: For bigger problems, write pseudo-code before writing the actual code

function reverse(value)
    if value type !string  && !number && !array
    	return value
	
	if value type == string
		reverse string
	if value type == number
		reverse number
	if value type == array
	    reverse array

	return reversed value.
 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video - 59 : using google, stackoverflow and MDN

/*

Problem  1 : 

we work for a company that builds a smart home thermometer and our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude, keep in mind that sometimes there might be a sensor error."

*/
const temperatures = [3, -2 - 6, -1, 'error', 9, 13, 17, 15, 9, 5];

/*
1) Understanding the problem
-- what is the temperature amplitude.
--Answer: Difference between the highest and lowest temperatures in the array.
-- How to compute max and min temperatures?
-- What's a sensor error ? And what to do?
*/

/*
2) Breaking up into sub-problems
-- How to ignore errors?
-- find a max value in temp array
-- find a min value in temp array
-- Subtract min from max(amplitude) and return it 
*/

/* 
******Search in google: Javascript get max value in array 

https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript


*/
//const temperatures = [3,-2 - 6,-1,'error',9,13,17,15,9,5];

const calcTempAmplitude = function (temps) {
  // 1.1 max variable (we store the max value in first array)
  let max = temps[0];

  // 2.1 -- find a min value in temp array (we store the min value in first array)
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    //3.1- continue (if the currentTemp value is not number then continue means jodi kono value number na hoy then oita skip kore porer value te jabe)
    if (typeof currentTemp !== 'number') continue;

    //1.2 -- find a max value in temp array (if the current position is greater than max value then the current value will be the max value)
    if (currentTemp[i] > max) max = currentTemp[i];

    // 2.2 -- min value (if the current position is less than min value then the current value will be the min value)
    if (currentTemp[i] < min) min = currentTemp[i];
  }
  console.log(max, min);

  // 4.1 - return the amplitude
  return max - min;
};
calcTempAmplitude([3, 7, 4, 23, 1, 8]);

// 4.2
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

////////////////////////// full code /////////////////
('use strict');

const tempeature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp[i] > max) max = currentTemp[i];

    if (currentTemp[i] < min) min = currentTemp[i];
  }
  console.log(max, min);
  return max - min;
};
calcAmplitude([3, 7, 4, 23, 1, 8]);

const amplitude = calcTempAmplitude(tempeature);
console.log(amplitude);

////////////////////////////////////////////

// second problem

/* after solving the problem, the project manager tells us that the function should actually receive two array of temperatures and not just one but the rest of the function shoud work just the same.


-- Problem 2 : 

-- Function should now receive 2 arrays of temps 

//  1) Understanding the problem
//  - with 2 arrays, should we implement functionaliy twice ?  No.

//  2) Breaking up into sub-pproblems
//  -  How to merge 2 arrays?

****** Search in google: Javascript merge two arrays ******
https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items

//

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

*/

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp[i] > max) max = currentTemp[i];

    if (currentTemp[i] < min) min = currentTemp[i];
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitudeNew([3, 7, 4, 23, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//////////////////////////////////////////////////////////////////////////////////////////////

// video -60 : Debugging fixing errors

/* Software bug: Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a foftware bug.
** to fix errors we use a process called debugging, which is essentially finding, fixing,
and then preventing bugs.


1. Identify bugs: a) during development using (automated testing software) or (user reports during production) 
                  b) sometimes bugs appears only for certain users, or certain browsers. 

2. find the bug : a) Isolation where exactly the bug is happening in code.
                  b) Developer console (for simple code)
				  c) Debugger software (for complex code)

3. Fix the bug : a) replace wrong solution with new correct solution (correct the bug)

4. Prevent it from happening again: 
                 a) searching for the same bug in similar code.
				 b) writing tests using testing software.
*/

//////////////////////////////////////////////////////////////////////////////////////////////

// video- 61: debugging with the console and breakpoints

// conversion temperature to kelvin to celcius find bug using console.log

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // the prompt always return string , no matter what input we give
    // value: prompt('Degrees celsius:'),
    // C) fix the bug
    value: Number(prompt('Degrees celsius:')),
  };
  // B) find the bug
  console.log(measurement);
  // there is another way of showing objects
  // console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

// find bug / learning how to use a debugger, in google chrome

/*
 2.1: go to the website  => inspect => sources => open the (.js) file  => set a breakpoint by clicking in the bar (the red dot) => reload the page (then the execution will stop) => we can also start / start debugging the right side (pause) bar
 to go next line ( => ) step button. 

*/

// using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // 1. error: we will thought that the max and min will start from 0.
  let max = 0;
  let min = 0;

  // let max = temps[0];
  // let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    // 2.2: javascript has these (debugger) tools when js will see these tool it will automatically open the debugger and run the debugging => when the debugging is done => click the continue button and remove (debugger) from js code => reload.

    debugger;

    if (currentTemp[i] > max) max = currentTemp[i];

    if (currentTemp[i] < min) min = currentTemp[i];
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitudeBug([3, 7, 4, 23, 1, 8]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// 1. A) identify the bug
console.log(amplitudeBug);
