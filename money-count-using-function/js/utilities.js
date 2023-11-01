// deposit & withdraw field
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if (isNaN(inputFieldValue)) {
        alert('Enter a valid Number!!!');
        return;
    }
    return inputFieldValue;
}

// deposit and withdraw section
function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// set as innerText , total deposit and balance value
function setTextElementValueById(textElementId, newValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;
}