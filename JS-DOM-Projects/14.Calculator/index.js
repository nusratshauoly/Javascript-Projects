const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener('click', () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === 'C') {
            clearResult();
        }
        else if (buttonValue === "=") {
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    });
}
function clearResult() {
    inputFieldEl.value = ""; 
}
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);  
}
function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue
    // inputFieldEl.value = inputFieldEl.value + buttonValue; 
}


// ----------------- ----------------- comment the code --------------------- -----------------
// Select all button elements on the page
const buttonsEl = document.querySelectorAll('button');

// Select the input field where the result will be displayed
const inputFieldEl = document.getElementById('result');

// Loop through each button element
for (let i = 0; i < buttonsEl.length; i++) {
    // Add a click event listener to each button
    buttonsEl[i].addEventListener('click', () => {
        // Get the text content of the clicked button
        const buttonValue = buttonsEl[i].textContent;
        
        // Check if the button value is "C" (clear)
        if (buttonValue === 'C') {
            // Clear the result display if "C" is clicked
            clearResult();
        }
        // Check if the button value is "=" (equals)
        else if (buttonValue === "=") {
            // Calculate and display the result if "=" is clicked
            calculateResult();
        }
        // If the button is a number or operator, append it to the display
        else {
            appendValue(buttonValue);
        }
    });
}

// Function to clear the result display
function clearResult() {
    // Set the input field's value to an empty string
    inputFieldEl.value = "";
}

// Function to calculate the result of the expression in the input field
function calculateResult() {
    // eval() = evaluate is a built in function of js that evaluates a string if its like a js code. Use eval() to evaluate the expression and set it as the input field's value. This function uses eval() to evaluate the mathematical expression in the input field and updates the field with the result.
    // whatever inside the inputFieldValue we want to calculate it 
    // Evaluate is actually can be used to evaluate a arithmetic expression entered by the user and return the result. 
    // example: inputFieldEl.value = eval(2*5+1) // will get the result 11. 
    inputFieldEl.value = eval(inputFieldEl.value);
}

// Function to append the clicked button's value to the input field
function appendValue(buttonValue) {
    // Add the buttonValue to the existing inputFieldEl value
    inputFieldEl.value += buttonValue;
    // Alternative way to append: inputFieldEl.value = inputFieldEl.value + buttonValue;
}
