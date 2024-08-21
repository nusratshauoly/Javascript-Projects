// common function to hidden content
function hideElementById(elementId) { // Function to hide an HTML element by its ID
    const element = document.getElementById(elementId); // Get the element from the DOM using its ID
    element.classList.add('hidden'); // Add the 'hidden' class to the element, which hides it from view
}

// common function to show content
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// generate a random alphabet
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


// set the background color of keyboard word which will apper in the screen
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// removeBackgroundColorById from keyboard which  will appear on the screen 
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


// update score
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set the updated score as innerText value
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// 
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}



// // ---------------------------------- with comment -------------------------


// // common function to hidden content
// function hideElementById(elementId) { // Function to hide an HTML element by its ID
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.classList.add('hidden'); // Add the 'hidden' class to the element, which hides it from view
// }

// // common function to show content
// function showElementById(elementId) { // Function to show an HTML element by its ID
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.classList.remove('hidden'); // Remove the 'hidden' class from the element, making it visible
// }

// // generate a random alphabet
// function getARandomAlphabet(){ // Function to generate a random alphabet letter
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; // Define a string containing all the lowercase alphabets
//     const alphabets = alphabetString.split(''); // Split the string into an array of individual letters

//     const randomNumber = Math.random()*25; // Generate a random number between 0 and 25
//     const index = Math.round(randomNumber); // Round the random number to the nearest whole number to get an index

//     const alphabet = alphabets[index]; // Use the random index to select a letter from the alphabets array
//     return alphabet; // Return the randomly selected alphabet letter
// }


// // set the background color of keyboard word which will apper in the screen
// // Function to set the background color of a keyboard key
// // based on the key that will appear on the screen
// function setBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId); // Get the keyboard key element by its ID
//     element.classList.add('bg-orange-400'); // Add a background color class (bg-orange-400) to highlight the key
// }

// // removeBackgroundColorById from keyboard which  will appear on the screen 
// function removeBackgroundColorById(elementId){ // Function to remove the background color from a keyboard key
//     const element = document.getElementById(elementId); // Get the keyboard key element by its ID
//     element.classList.remove('bg-orange-400'); // Remove the background color class (bg-orange-400) to unhighlight the key
// }


// // update score
// // Function to get the numeric value of an element's inner text
// // This is often used to get the current score or life count
// function getTextElementValueById(elementId){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     const elementValueText = element.innerText; // Retrieve the text content of the element
//     const value = parseInt(elementValueText); // Convert the text content to an integer
//     return value; // Return the numeric value
// }

// // set the updated score as innerText value
// // Function to set the inner text of an element to a specific value
// // This is often used to update the score or life count
// function setTextElementValueById(elementId, value){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     element.innerText = value; // Set the element's inner text to the specified value
// }

// // Function to get the text content of an element by its ID
// function getElementTextById(elementId){
//     const element = document.getElementById(elementId); // Get the element from the DOM using its ID
//     const text = element.innerText; // Retrieve and return the text content of the element
//     return text;
// }

