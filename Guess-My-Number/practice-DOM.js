
// *** For imoji in MAC OS: CMD + CTRL + space

// Video - 71: What's the DOM and DOM manipulation.
/*
DOM(Document Object Model): Structured representation of HTML Documents. Allows Javascript to access HTML elements and styles to manipulate them.
Example: change text,HTML attributes and even CSS styles.

* DOM is a connection point between HTML documents and JAVASCRIPT code.

* DOM !== Javascript => DOM Methods and Properties for DOM Manipulation is not part of Javascript.

* DOM and DOM methods are actually part of something called the Web APIs.

* Web APIs(Application Programming Interface) are like libraries that browsers implement and that we can access from our Javascript code.

* Web APIs are basically libraries that are also written in Javascript and that are automatically available for us to use. All this happens behind the scenes, we don't have to import or do anything. There is actually an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers.

* Besides the DOM, there are actually a ton more web APIs, such as (timers, the fetch API) and many more.

*/


// video - 70: Guess My Number
// select any element class in DOM
console.log(document.querySelector('.message'));

// select any element class and get text content property of this class in DOM
console.log(document.querySelector('.message').textContent);

// video - 72: Selecting and manipulating elements
// we can also set the content of the element
document.querySelector('.message').textContent = '🎉 Correct Number';


// change the correct and score number
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// change the input data of input field
// To set input field value
document.querySelector('.guess').value = 23;

// get input field value
console.log(document.querySelector('.guess').value);



