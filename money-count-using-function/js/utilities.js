// ------------ deposit & withdraw field -------------------
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
   
    if (isNaN(inputFieldValue)) {
        alert('enter a valid number!!!');
        return;
    }
    return inputFieldValue;
     
}

// ------------ deposit & withdraw section -----------------
function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText; 
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// ------------ innertext of total deposit and balance --------------
function setTextElementValueById(textElementId, newValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;


}