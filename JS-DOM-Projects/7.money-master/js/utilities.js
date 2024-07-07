// income , food, rent, cloths, save input field
function getInputFieldValueById(inputId) {
    const inputElementField = document.getElementById(inputId);
    const inputElement = inputElementField.value;
    const inputField = parseFloat(inputElement);
    inputElementField.value = '';

    if (inputField === undefined || inputField <= 0) {
        alert('enter a valid number!');
        return null;
    }
    return inputField;
}


// total-expense, balance, saving-amount, remaining-balance
function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

