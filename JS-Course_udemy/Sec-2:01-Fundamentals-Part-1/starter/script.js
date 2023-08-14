// vid - 10: values and variables

//variable: it is basically a box into which we can store a Value. so we give box a name. and into that box, with that label, we can store a value and then we can reference that variable over and over again.
let firstName = 'jonas';
console.log(firstName);


//'jonas' is a value.
console.log('jonas');
console.log(23);
//let firstName is a variable and value are being kept inside variable.
let firstName = 'jonas';

console.log(firstName);

// way of write variable 
// camelCase variableName
let first = 'jonas';
let firstNamePerson; //used mostly
let first_name_person;
let PI = 3.1415; //can use this uppercase cause ite constant

// way to not write variable
let 3years = 3;
let jonas&matilda = 'JM';
let new = 27; //reserved keyword
let function = 27;
let $function = 27;
let _function = 27;
let name = 'jonas'; //name is also a keyword
let Person = 'jonas';

// valid variable Name

var myFirstJob = 'Programmer';
var myCurrentJob = 'teacher';

// don't write like this
let job1 = 'programmer';
let job2 = 'teacher';

/////////////////////////////////////////

// video - 11: Data types

// the 7 primitive data types: number, string, boolean, undefined, null, symbol and big int.

//1. number : let age = 27;
// 2. strings: let firstName = "jonas" / 'jonas';
// 3. boolean: let fullAge = true / false ;
//4.undefined: let children;
//5. null
//6. symbol(ES2015): value that is unique and cannot be changed.
//7. BigInt(ES2020): larger integers than the Number type can hold.

// single line comment in code (cmd + /)
// var myFirstJob = 'Programmer';

/* 
 double line comment
 */
//finding data types of a variable
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof true);

//changing the variable
let javascriptIsFun = true;
javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);

// undefined(empty variable)
let year;
console.log(year);
console.log(typeof year);

// reassigning value in undefined variable
year = 1991;
console.log(typeof year);

/////////////////////////////////////////////

//video - 13. let, const and var
// let variable (can reassign called mutable variable)
let age = 30;
age = 31;

// const variable (cannot change - immutable variable)
const birthYear = 1997;
const job; //(cannot write like this, need a initial value to the variable)
// when the variabe will change in the future should use let. and if it's a fixed value always use const.


//////////////////////////////////////////

// video- 14: basic operator

//1. arithmatic operators
//(-) minus operator
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah); // console.log e ekshathe onek gula value declare kora jay
// ekahne value repeat hocche which is not good thats why we store the value in a variable
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// other math operations
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);  //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8.

// math operators: (+) plus operators
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operator
// (=) equal operator;
let x = 10 + 5;
x += 10;  //it means x = x + 10 = 25; its called (shorthand method)
x *= 4; //x = x * 4 = 100;
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);


// comparison operators to produce boolean values
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); //we can calculate and comparison togather

/////////////////////////////////////////////

//video - 15: Operator-Precedence
//mdn javascript operator precendence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); //operators calculate from left-to-right

let x, y; //assignment operator (right to left)
x = y = 25 - 10 - 5;  // x = y = 10, x = 10
console.log(x, y);

// grouping operators executes first then the others
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


///////////////////////////////////////////

// video - 16: coding challenge - 1

//Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

// data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;
// console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////////////////////////

// video - 17: strings and template literals

// normal strings
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';
console.log(jonas);

// write template literals (using backtick(``) and ${})
const jonasNew = `i'm ${firstName} a ${year - birthYear} year old ${job}!`
console.log(jonasNew);
console.log(`just a regular string...`);

// multiline with normal strings
console.log('string with \n\
multiple \n\
line');

// multiline strings with template literals
console.group(`string with
multiple lines`);

//////////////////////////////////////

// video- 18: Taking Decisions: if / else Statements

// const age = 19;
const age = 15;
// const isOldEnough = age >= 18;
if(age >= 18){
   console.log('Sarah can start driving licence');
}
else{
    const yearsLeft = 18 - age;
   console.log(`sarah is too young, wait another ${yearsLeft} years`);
}

// 
// const birthYear = 1991;
const birthYear = 2011;
let century;
if(birthYear <= 2000){
   century = 20;
}else{
   century = 21;
}
console.log(century);

//////////////////////////////////////

//vid - 19: Coding Challenge #2
/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn = massJohn / (heightJohn * heightJohn) ;
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
else{
   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

///////////////////////////////////////

//video - 20 : type conversopn and coercion

/* type conversion: is when we manually convert from one type to another.

type coercion: is when javascript automatically converts types behind the scenes for us.

*/

// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

// 
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am' + 23 + ' years old');
//console.log('I am' + '23' + ' years old');

console.log('23' + '10' + 3);
console.log('23' - '10' - 3); // minus operators triggers the opposite conversion. so this case strings are converted to numbers.

console.log('23' * '2'); //here the result will be shown as numbers because this way the multiplier operator can work

console.log('23' / '2'); // same as multiply the answer will be number

//gess the output
let n = '1' + 1;
n = n - 1;
console.log(n); // answer : 11 => 11-1 = 10(number)

// 2+ 3+ 4 + '5' answer: "95"

//'10' - '4' - '3' - 2 + '5'  answer: '10'- '4' ='6' - '3' = '3' - 2 = 1 + '5' = '15'

/////////////////////////////////////////

//video- 21: truthy and falsy values

// *** 5 falsy values in javascript : 0, '', undefined, null, NaN, false(also);

//*** falsy values: this five values will be converted to false when we attempt to convert them to a boolean.

console.log(Boolean(0)); //falsy values
console.log(Boolean(undefined)); //falsy values
console.log(Boolean('')); //falsy values
console.log(Boolean('Jonas')); //truthy values
console.log(Boolean({})); //truthy values

// how truthy/falsy works in if/else condition
// const money = 0;
const money = 100;
if(money){
   console.log("Don't spend it all ");
}
else{
   console.log("you should get a job");
}

//check if the element exist or not
//let height;
let height = 0;
if(height){
   console.log('yay! height is defined');
}else{
   console.log('height is undefined');
}
//the answer will be undefined for both of the value cause 0 is also a falsy value.

/////////////////////////////////

//video - 22 : equality operators : == vs ===
//we should always use ===.
const age = 18;
if(age === 18){
   console.log('you became an adult (strict)' );
} 

const age = '18';
if(age == 18){
    console.log('you just became an adult (loose)')
}

// set the value using js prompt
// we always have to convert before using any value and use === 
const favourite = Number(prompt("what's your favourite number?"));
console.log(typeof favourite);

// if(favourite == 23) { //'23' == 23
    if(favourite === 23){ 
   console.log('23 is an amazing number!');
}else if(favourite === 7){
   console.log('7 is also a cool number');
}else if(favourite === 9){
    console.log('9 is also a cool number');
 }
else{
   console.log('number is not 23 or 7 or 9');
}


// negative strict version
if(favourite !== 23){
   console.log('why not 23?');
}
// negative loose version
if(favourite != 23){
    console.log('its match?');
 }

 //////////////////////////////////////////

 // video - 23: boolean logic (and , or & not operators)

// video - 24: logical operators

const hasDriversLicense = true; // a
const hasGoodVision = false; // b
// const hasGoodVision = true; // b
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
// not operator
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
if(hasDriversLicense && hasGoodVision){
    console.log('Sarah is able to drive!');
}
else{
    console.log('Someone else should drive');
}

// 

// const isTired = true; // c
const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
// using not operator
if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
}else {
    console.log('someone else should drive');
}

//////////////////////////////////////////////////

//video - 25: LECTURE: The switch Statement

//const day = 'monday';
//const day = 'tuesday';
const day = 'thursday';
switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

/// same problem with condition

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || 'thursday'){
    console.log('write code examples');
}else if(day === 'friday'){
    console.log('record videos');
}else if(day === 'saturday' || 'sunday'){
    console.log('enjoy the weekend');
}else{
    console.log('Not a valid day!');
}


//////////////////////////////////////////////

//video - 27: statements and expressions

// an expression is a piece of code thad produce value
// whichever ends with (;) semicolon that called statement because it doesn't produce value.
 3 + 4
 1971
 true && false && !false
 if(23 > 18){
    const str = '23 is bigger';
}
console.log(`i'm ${2037 - 1991} years old ${if (23 > 10) {
    const str = '23 is bigger';
}}`);
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
 
/////////////////////////////////////////////////

//video- 28: the conditional(ternary) operator:

//the condition operator allows us to write something similar to an if/else statement but all in one line
// the conditional operator is also called the ternary operator.
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// can store in variable
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >=18){
   drink2 = 'wine';
} else{
    drink2 = 'water';
}
console.log(drink2);

//
console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

