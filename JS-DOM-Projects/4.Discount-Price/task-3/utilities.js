const inputNumberElement = document.getElementById('input-number');
const calculateNumberElement = document.getElementById('calculate-number');
const doubleBtn = document.getElementById('double-btn');
const tripleBtn = document.getElementById('triple-btn');

// Function to handle calculation
function calculate(multiplier) {
    const inputNumber = parseFloat(inputNumberElement.value);

    if (isNaN(inputNumber)) {
        alert('Please enter a valid number');
        return;
    }

    const result = inputNumber * multiplier;
    calculateNumberElement.textContent = result;
    inputNumberElement.value = '';
}

// Attach event listeners
doubleBtn.addEventListener('click', () => calculate(2));
tripleBtn.addEventListener('click', () => calculate(3));