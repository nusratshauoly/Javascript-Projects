document.getElementById('calculate').addEventListener('click', function () {
    const incomeField = getInputFieldValueById('income-field');
    const foodField = getInputFieldValueById('food-field');
    const rentField = getInputFieldValueById('rent-field');
    const clothsField = getInputFieldValueById('cloths-field');
    

     // Ensure all input fields are valid
    if (incomeField === null || foodField === null || rentField === null || clothsField === null) {
        return;
    }

    const totalExpense = foodField + rentField + clothsField;
    setTextElementValueById('total-expenses', totalExpense);
    const balance = incomeField - totalExpense;
    setTextElementValueById('balance', balance);   
})

// save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveField = getInputFieldValueById('save-field');
    const balance = getTextElementById('balance');
    
    // Ensure save field and balance are valid
    if (saveField === null || isNaN(balance) || balance <= 0) {
        alert('Please calculate balance first or enter a valid save percentage.');
        return;
    }

    const savingAmount = (balance * saveField) / 100;
    setTextElementValueById('save-amount', savingAmount);
    const remainingBalance = balance - savingAmount;
    setTextElementValueById('remaining-balance', remainingBalance);

})




