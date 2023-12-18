// ----------------- generate pin -------------------
function getPin() {
    let pin = generatePin();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pinString;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    let random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getPin();
    let displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});
// ---------------- calculator -----------------------

document.getElementById('calculator').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let typedNumberField = document.getElementById('typed-numbers');
    let previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            // previousTypedNumber.value = '';
            typedNumberField.value = '';
        }
        else if (number === '<') {
            let digits = previousTypedNumber.split('');
            digits.pop();
            let remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        let newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

// ------------------- submit button -------------------
document.getElementById('verify-pin').addEventListener('click', function () {
    let displayPinField = document.getElementById('display-pin');
    let currentPin = displayPinField.value;
    let typedNumberField = document.getElementById('typed-numbers');
    let typedNumber = typedNumberField.value
    
    let pinSuccessMessage = document.getElementById('pin-success');
    let pinFailureMessage = document.getElementById('pin-failure');
    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
       
    }
})