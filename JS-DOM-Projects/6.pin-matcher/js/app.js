// ----- ---------- first half -------- -------

// ----------------- generate pin -------------------

// Helper function to generate a random number up to 10000
function generatePin() {
    let random = Math.round(Math.random() * 10000); // Generate a random number between 0 and 9999
    return random;
}


// Function to generate a 4-digit PIN
function getPin() {
    let pin = generatePin(); // Generate a random number
    let pinString = pin + ''; // Convert the number to a string
    if (pinString.length === 4) { // Check if the length is 4 digits
        return pinString; // Return the PIN if it's 4 digits
    }
    else {
        return getPin(); // Recursively call the function until a 4-digit PIN is generated
    }
}

// Event listener for the button to generate a PIN
document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getPin(); // Get a 4-digit PIN
    let displayPinField = document.getElementById('display-pin'); // Get the display field element
    displayPinField.value = pin; // Display the generated PIN in the field
});



//  -------- --------- second half ---------- ---------

// ---------------- calculator -----------------------

// Event listener for the calculator buttons
document.getElementById('calculator').addEventListener('click', function (event) {
    let number = event.target.innerText; // Get the text of the clicked button
    let typedNumberField = document.getElementById('typed-numbers'); // Get the typed numbers field element
    let previousTypedNumber = typedNumberField.value; // Get the current value of the field
    
    if (isNaN(number)) { // Check if the clicked button is not a number
        if (number === 'C') { // Clear the typed numbers if 'C' is clicked
            typedNumberField.value = '';
        }
        else if (number === '<') { // Remove the last digit if '<' is clicked
            let digits = previousTypedNumber.split(''); // Split the current value into an array of characters
            digits.pop(); // Remove the last character
            let remainingDigits = digits.join(''); // Join the remaining characters back into a string
            typedNumberField.value = remainingDigits; // Update the field with the new value
        }
    }
    else { // If the clicked button is a number
        let newTypedNumber = previousTypedNumber + number; // Append the number to the current value
        typedNumberField.value = newTypedNumber; // Update the field with the new value
    }
});

// ------------------- submit button -------------------
// Event listener for the submit button to verify the PIN
document.getElementById('verify-pin').addEventListener('click', function () {
    let displayPinField = document.getElementById('display-pin'); // Get the display field element
    let currentPin = displayPinField.value; // Get the generated PIN
    let typedNumberField = document.getElementById('typed-numbers'); // Get the typed numbers field element
    let typedNumber = typedNumberField.value; // Get the typed number

    // Get the success and failure message elements
    let pinSuccessMessage = document.getElementById('pin-success');
    let pinFailureMessage = document.getElementById('pin-failure');

    // Check if the typed number matches the generated PIN
    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block'; // Show the success message
        pinFailureMessage.style.display = 'none'; // Hide the failure message
    }
    else {
        pinFailureMessage.style.display = 'block'; // Show the failure message
        pinSuccessMessage.style.display = 'none'; // Hide the success message
    }
});
