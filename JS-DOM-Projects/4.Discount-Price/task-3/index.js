// ------------- details solution ----------------

// ----------- double btn ------------
document.getElementById('double-btn').addEventListener('click', function () {
    const inputNumberElement = document.getElementById('input-number');
    const inputNumber = parseFloat(inputNumberElement.value);
    inputNumberElement.value = '';
   

   if (isNaN(inputNumber)){
       alert('Enter a valid number');
       return;
    }

    const doubleNumber = inputNumber * 2;

    const calculateNumberElement = document.getElementById('calculate-number');
    const calculateNumber = parseFloat(calculateNumberElement.textContent);
    calculateNumberElement.textContent = doubleNumber;
    
})

// --------------- tripple btn ---------------

document.getElementById('triple-btn').addEventListener('click', function () {
    const inputNumberElement = document.getElementById('input-number');
    const inputNumber = parseFloat(inputNumberElement.value);
    
   if (isNaN(inputNumber)){
       alert('Enter a valid number');
       return;
    }

    const trippleNumber = inputNumber * 3;
    const calculateNumberElement = document.getElementById('calculate-number');
    const calculateNumber = parseFloat(calculateNumberElement.textContent);
    calculateNumberElement.textContent = trippleNumber;
    inputNumberElement.value = '';
})
