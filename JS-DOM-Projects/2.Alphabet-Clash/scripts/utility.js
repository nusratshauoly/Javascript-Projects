// hide other section elements when opening one section elements
// common function to hidden content
function hideElementById(elementId) { // Function to hide an HTML element by its ID
    const element = document.getElementById(elementId); // Get the element from the DOM using its ID
    element.classList.add('hidden'); // Add the 'hidden' class to the element, which hides it from view
}

// show one section elements when hide other section elements
// common function to show content
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// generate a random alphabet when start playing
// generate a random alphabet
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

// set the background color of keyboard word which will appear in the screen
// set the background color of keyboard word which will apper in the screen
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove the background color of keyboard word which will appear in the screen
// removeBackgroundColorById from keyboard which will appear on the screen 
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// function to get the innerText value of an element by its ID
// Function to get the text content of an element by its ID
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// update score value
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set the updated score value as innerText value
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}





// // ---------------------------------- with comment -------------------------

// // 27.6: common function to hidden content
// function hideElementById(elementId) { // Function to hide an HTML element by its ID
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.classList.add('hidden'); // Add the 'hidden' class to the element, which hides it from view
// }

// // 27.6: common function to show content
// function showElementById(elementId) { // Function to show an HTML element by its ID
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.classList.remove('hidden'); // Remove the 'hidden' class from the element, making it visible
// }


// //27.7: generate a random alphabet
// function getARandomAlphabet(){ // Function to generate a random alphabet letter
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; // Define a string containing all the lowercase alphabets
//     const alphabets = alphabetString.split(''); // Split the string into an array of individual letters

//     const randomNumber = Math.random()*25; // Generate a random number between 0 and 25
//     const index = Math.round(randomNumber); // Round the random number to the nearest whole number to get an index

//     const alphabet = alphabets[index]; // Use the random index to select a letter from the alphabets array
//     return alphabet; // Return the randomly selected alphabet letter
// }


// //27-8: set the background color of keyboard word which will apper in the screen
// // Function to set the background color of a keyboard key
// // based on the key that will appear on the screen
// function setBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId); // Get the keyboard key element by its ID
//     element.classList.add('bg-orange-400'); // Add a background color class (bg-orange-400) to highlight the key
// }

// // 27-9: removeBackgroundColorById from keyboard which  will appear on the screen when change a new keyword previous keyword background color will remove
// function removeBackgroundColorById(elementId){ // Function to remove the background color from a keyboard key
//     const element = document.getElementById(elementId); // Get the keyboard key element by its ID
//     element.classList.remove('bg-orange-400'); // Remove the background color class (bg-orange-400) to unhighlight the key
// }

// // 28-1: Function to get the text content of an element by its ID : we can write this by manually selecting id and then turn into innerText or make a function and just call the function : we will call the function here.
// function getElementTextById(elementId){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     const text = element.innerText; // Retrieve and return the text content of the element
//     return text;
// }



// // update score 
// //28-4, 28-5: Function to get the numeric value of an element's inner text
// // This is often used to get the current score or life count
// function getTextElementValueById(elementId){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     const elementValueText = element.innerText; // Retrieve the text content of the element
//     const value = parseInt(elementValueText); // Convert the text content to an integer
//     return value; // Return the numeric value
// }

// // set the updated score as innerText value
// //28-4,28-5: Function to set the inner text of an element to a specific value show the Update score: (to set the value of textElementValue => give the element id and value of id)=> (kar man set korbo, koto set korbo)
// // This is often used to update the score or life count
// function setTextElementValueById(elementId, value){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.innerText = value; // Set the element's inner text to the specified value
// }



