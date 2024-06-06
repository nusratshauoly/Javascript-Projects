// *** ----- deposit & withdraw input field -----
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if (isNaN(inputFieldValue)) {
        alert('Enter a valid Number!!!');
        return;
    }
    return inputFieldValue; // If the value is a valid number, return it
};

// *** ------- common deposit, withdraw, balance section ------
function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue; // Return the numerical value.
}


// *** ------ set as innerText of total deposit, withdraw and balance value -------
// The (newValue) parameter in the setTextElementValueById function represents the new text content that you want to set for the HTML element identified by its ID (textElementId). 
function setTextElementValueById(textElementId, newValue) {
    const textElement = document.getElementById(textElementId); // Get the text element by its ID
    textElement.innerText = newValue; // Set the innerText of the found element to newValue

    // Sets the inner text of an HTML element to a (new value) with two decimal places.
    // Set the text content to the new value formatted to two decimal places
   // //textElement.innerText = newValue.toFixed(2);   
}