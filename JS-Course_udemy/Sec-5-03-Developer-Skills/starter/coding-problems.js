//Developer Skills & Editor Setup

/*
video - 62: 
Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/*
  1. Understanding the problems
 -- Array transformed to string, separated by ...
 -- What is the X - days ? index + 1

  2. Breaking up into sub - programs
 -- Transform array into string
 -- Transform each element to string with °(press => (Shift + Option + 8) for degree sign) 
 -- Strings needs to containday (index + 1)
 -- Add ... between elements and start and end of string
 -- log string to console
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// 1. first will print 17, 21, 23 °C
console.log(`... ${data1[0]}°C ... ${data1[0]}°C ...  ${data1[0]}°C ...`);

//  2. a function named  printForecast and a parameter named (arr)
const printForecast = function (arr) {
  //  3. array er value guloke string e convert kore (let str = '';) str variable e rakhbo.
  let str = '';

  // 4. (arr) er moddhe j koyta value thakbe shobgulor °C ber korbo er jonno (arr.length) dibo.
  for (let i = 0; i < arr.length; i++) {
    //   5.1: first value string e boshanor por first sum value er shathe (arr) er second value add korbo and abar oi sum er shathe (arr) er third value add korbo. evabe each value add korte thakbo

    // 5.2:  str = str + `${arr[i]}°C in ${i + 1} days ... `;
    //5.3: the output will be: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  // 6. to print the full sentence : Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
  console.log('...' + str);
};
//   7. declare the function
printForecast(data1);

// [2,3,4]
//  sum = 0
// 2 + 3 = 5 + 4 = 9

/////////////////////////////  full code

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C ... ${data1[0]}°C ...  ${data1[0]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
