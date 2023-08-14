// video- 32: Activating strict mode

// 'use strict'; mode on only for specific function or a specific block.  
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; 
if(hasDriversLicense) console.log('i can drive :D');

// const interface = 'Audio';
const private = 534;
const if = 23; // it is error 


// video - 33: functions

// a function is simply a piece of code that that we can reuse over and over again in our code.

function logger(){
    console.log('My name is jonas');
}
// calling / learning / invoking the function
logger();
logger();
logger();


// another function

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}

//fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

///////////////////////////////////////////////////

// / video -34: function declartion vs expressions




//  function declaration

function calcAge1(birthYear){
    return 2037 - birthYear;
    // return age;
}
//calcAge1(1991);
const age1 = calcAge1(1991);
// console.log(age1);


// function expressions

// a function without a name is called anonymous function
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// difference between function declaration and function expressions???????

// we can actually call function declarations before they are defined in the code.

// it will work
const age1 = calcAge1(1991);

function calcAge1(birthYear){
    return 2037 - birthYear;
    // return age;
}
//calcAge1(1991);
// const age1 = calcAge1(1991);


// we cannot call function expressions before they are defined in the code.
// function expressions make code more nicer and structured 

// it won't work
const age2 = calcAge2(1991);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
// const age2 = calcAge2(1991);
console.log(age1, age2);


/////////////////////////////////////////////////

// video - 35: arrow functions:
// one parameter function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(1991);


// multi parameter function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// /////////////////////////////////////////////////////////

//  video - 36: function calling other functions
// lets say a fruitProcessor can only make juice to  small piece of fruit

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};
console.log(fruitProcessor(2, 3));


////////////////////////////////////////////////////////

// video - 37: reviewing functions
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
   const age = calcAge(birthYear);
   const retirement = 65 - age;
   return retirement;

   // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));

// jodi already retirement kore thake tahole -1 dekhabe

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
   const age = calcAge(birthYear);
   const retirement = 65 - age;
   
   if(retirement > 0){
       console.log(`${firstName} retires in ${retirement} years`);
       return retirement;
    }
   else{
       console.log(`${firstName} has already retired`);
       return -1;
    }
}
console.log(yearsUntilRetirement(1950, 'Mike'));


// 3 types of function

/*
Function declaration: Function that can be used before it's declared.
*/

function clacAge(birthYear){
   return 2037 - birthYear;
}

// Function Expressions:
/*
Essentially a function value stored in a variable.
*/

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

// Arrow Function
/*
Great for a quick one-line functions. Has no this keyword(more later....)
*/

const calcAge = birthYear => 2037 - birthYear;

/*
three different ways of writing functions, but they all work in a similar way. receive input data, transform data and then output data.
*/


//////////////////////////////////////////////////////////



// video - 39 - Introduction to arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// (instead doing this)

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
// to get last element
console.log(friends[friends.length - 1]);

const years = new Array(1991, 1984, 2008, 2020);


// **** what is statement  and expression
// [friends.length - 1] is an expression not a statement.

// insert a new array value
friends[2] = 'Jay';
console.log(friends);
friends = ['bob', 'Alice']; /// this is not allowed


// we can assign variable like this
const firstName = 'Jonas';
const jonas = [firstName, 'schedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// we cannot do this to add any value
console.log(calcAge(years));

// calculate age for the elements
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// we can also store the age value like this
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// ///////////////////////////////////////////////////////////


// video - 40: Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// push method to add element in last
friends.push('Jay');
// we can also write the length like this
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);

// unshift method to add element in first in array
friends.unshift('John');
console.log(friends);

// pop elements to remove elements the last value
friends.pop();
// we can also write the length like this
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift element to remove first element of the array

friends.shift();
console.log(friends);

//(indexOf) defines the position number of the elements
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


// (includes) defines if the elements exits in the array or not by returning (true / false)
friends.push(23);
console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));  //it will give false
console.log(friends.includes(23));

// we can use includes methods to write conditions
if(friends.includes('Steven')){
   console.log('You have a friend called Steven');
}


/////////////////////////////////////////////////////////////////


// video - 42: LECTURE: Introduction to Objects
// array declaration (used for structured data)
const jonasArray = [
     'Jonas',
     'Schedtman',
     '2037 - 1991',
     'teacher',
     ['Michael', 'Peter', 'Steven']
];

// object declaration (used for unstructured data)
const jonas = {
    firstName : 'Jonas',
    lastName :  'Schedtman',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
};


////////////////////////////////////////////////////////////////

// video - 43: LECTURE: Dot vs. Bracket Notation

//  dot notation:  
const jonas = {
    firstName : 'Jonas',
    lastName :  'Schedtman',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
};
// in dot notation we have to use realfinal property name not a computed property name.
console.log(jonas.lastName);

//using bracket notation (in the braccket notation, we can actually put any expression that we'd like. so we don't have to explicitly write the string here but instead we can compute it from some operation because an operation is basically an expression)
console.log(jonas['lastName']);

// when we need to first compute the property name, then we have to use bracket notation
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['lastt' + nameKey]);


// using prompt with dot(.) and bracket[] notation. 
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(interestedIn);
console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);

// we will get (undefined) in the prompt result if we enter any value that is not in the array variable

// using condition in dot and bracket notation
if(jonas[interestedIn]){
   console.log(jonas[interestedIn]);
}else{
   console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

//
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// challenge
//'Jonas has 3 friends, and his best friend is called Michael, 
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);



///////////////////////////////////////////////////



// //video - 44: object methods

const jonas = {
    firstName : 'Jonas',
    lastName :  'Schedtman',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //    return 2037 - birthYear;
    // }

    // this method (cause we cannot use object value repeatedly and if we want to change we can change everywhere that's why instead of 1991 use this.birthYear) and here (this) keyword indicates jonas, so (this.birthyear) means jonas birthyear.
calcAge: function() {
    console.log(this);
    return 2037 - this.birthYear;
  }
};

// dot notation (using this method we dont ned to put 1991 here)
//console.log(jonas.calcAge(1991));

// in object whatever we write before (.) is the one who is calling the method
console.log(jonas.calcAge());

// bracket notation(another approach of selecting object)
//console.log(jonas['calcAge'](1991));


// if we want to call many times
// we can use this keyword also to store new property.
calcAge: function () {
   this.age = 2037 - this.birthYear;
   return this.age;
}
// then we can also declare this as age variable as much as we want.
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// challenge
//write a method called getSummary and this method should return a string which should kind of summarize the data about jonas,or any other persons data
// "jonas is a 46 years old teacher, and he has a / no driver's license" 
const jonas = {
    firstName : 'Jonas',
    lastName :  'Schedtman',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven']
    hasDriversLicense: true

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} -year old  ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};
console.log(jonas.getSummary());


//////////////////////////////////////////////////////////////////////////////////////////////

// video: 46: Iteration : the for loop

// for loop
for(let rep = 1; rep <= 10; rep++){
   console.log(`Lifting weights repetition ${rep}🏋🏻‍♀️`);
}

// or

for(let rep = 5; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}🏋🏻‍♀️`);
 }
 


/////////////////////////////////////////////////////////////////////////////////////////////




//  video- 47: Looping Arrays, Breaking and continuing

const jonas = [
   'jonas',
   'Schmedtmann',
   2037 - 1991,
   'teacher',
   ['Michael', 'Peter', 'Steven'],
   true
];

// we can also write like this (but this is not effective and useful at all just to see what will be the output)
/*
 console.log(jonas[0]);
 console.log(jonas[1]);
 ...
 console.log(jonas[4]);
 jonas[5] does not Exist
 */

//  thats why we will use for loop
// the array is zero based when it comes to reading elements out of the array thats why when counting arrays always starts with i = 0;


/* we can not give (i < 5) because if we add another element of the array the element won't show
*/
//for(let i = 0; i < 5; i++){


for(let i = 0; i <= jonas.length; i++){
    // we use i because the output will be 1,2,3,4, this way
    // we can also declare many variables at a time (typeof jonas[i] to retrieve all the elemenets of the array)
   console.log(jonas[i], typeof jonas[i]);
}

// create new empty array and store the typeof the element of the type of entire array
const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
 ];
const types = [];
for(let i = 0; i <= jonas.length; i++){
// reading from jonas array
   console.log(jonas[i], typeof jonas[i]);

   ///////////////////////////////////
// filling types array (one type)
   types[i] = typeof jonas[i];

   /*  or  lets find the type also in another way */

//  we can use push method also (use this method most)
   types.push(typeof jonas[i]);
}
console.log(types)


//////////////////////////////
// another example (calculate the ages and store then in a new array using loops)
const years = [1991, 2007, 1969, 2020];
// 0. store the calculate years here in array
const ages = [];

for(let i = 0; i < years.length; i++){
// 1. calculate the age one by one of the current year(years[i]) from current birth year(1991)
    ages.push(2037 - years[i]);
}
console.log(ages);



////////////////////////////////////////////

// continue & break statement

const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
 ];

// continue: continue is the exit of the current iteration of the loop and continue to the next one.

// we only wanted to print elements to the array that are strings and continue statement are perfect for this
console.log('----- ONLY STRINGS -----');
for(let i = 0; i <= jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    // reading from jonas array
       console.log(jonas[i], typeof jonas[i]);
    }

    /////////////////////////////////////////
// break: break is used to completely terminate the whole loop

console.log('----- Break with numbers -----');
// as soon as found a number we will break the loop after break nothing will print
for(let i = 0; i <= jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    // reading from jonas array
       console.log(jonas[i], typeof jonas[i]);
    }


 ////////////////////////////////////////////////////////////////////////////////



// video - 48: Looping backwards and loops in loops

// looping backwards
const jonas = [
   'Jonas',
   'Schmedtmann',
   2037 - 1991,
   'teacher',
   ['Michael', 'Peter', 'Steven'],
   true
];

// forward loop : 1, 1, 2, ...


// backward loop : 4, 3, 2, 1, 0
for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}


// loop inside a loop

/* we had 10 repetitions for a certain weightlifting exercise, now we have three different exercises and we want to repeat them five times, that means a total of 15 repetitions five for each of the three exercises.to lock all these exercises we will need a loop inside a loop.
*/
for(let exercise = 1; exercise <= 4; exercise++){

   console.log(`------ Starting exercise ${exercise}`);
// each exercise will repeat 5 times
   for(let rep = 1; rep < 6; rep++){
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// video - 49: LECTURE: The while Loop

// difference between for and while loop

// for loop
for(let rep = 1; rep <= 10; rep++){
   console.log(`FOR: Lifting weights repetition ${rep}`);
}


// while loop

// while loop (in a while loop we can only specify a condition) it will only run when the condition is true
// while loop is more versatile than the for loop which mens which can be use in a larger variety of situations. thats because it does not really need a counter, all the while loop really needs is the condition, which needs to stay true for it to keep running.

let rep = 1;
while(rep <= 10){
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}


// example: will do a simple exercise that does not depend on a counter, but instead it will depend on a random variable. we will roll a dice and then keep rolling the dice until we roll a six, then when we roll a six , we stop. we dont know how many times the loop should run


// if we use only (Math.random()) then it will only give fraction number thats why will give (Math.trunc) full number: Math.trunc(Math.random() * 6) we will get 0 - 5 random numbers that's why will add (+1) to get (0 - 6) numbers.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
   console.log(`you rolled a ${dice}`);
// to get 6 we have to continue the random number thats why we run the value here again
   dice = Math.trunc(Math.random() * 6) + 1;

//  this way we can know when will be 6 happened   
if(dice === 6) console.log('loop is about to end');
}
// we can  also got a situation where the first dice ever was a 6, and so the loop never even started, then loop will have exactly zero iterations, it will never start.
// while loop does not depend on a counter value, so whenever you do need a loop without a counter, you can do with while loop

// whenever you dont know beforehand how many iterations the loop will have, in that situation the while loop is right for this job.

// full code

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
   console.log(`you rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;

   if(dice === 6) console.log('loop is about to end');
}