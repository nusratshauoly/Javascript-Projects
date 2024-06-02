document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposit field
    const newInputField = getInputFieldValueById('deposit-field');
    // deposit total
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const totalDeposit = previousDepositTotal + newInputField;
    // set innerText in deposit total
    setTextElementValueById('deposit-total', totalDeposit);


    // balance section
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const totalBalance = previousBalanceTotal + newInputField;
    // set innerText in balance total
    setTextElementValueById('balance-total', totalBalance);
})