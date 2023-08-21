// --------- deposit field ---------
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newInputField = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');

    const totalDeposit = previousDepositTotal + newInputField;

    setTextElementValueById('deposit-total', totalDeposit);

   
   
// --------- balance section ---------
    const previousBalanceTotal = getTextElementValueById('balance-total');

    const totalBalance = previousBalanceTotal + newInputField;

    setTextElementValueById('balance-total', totalBalance);

})