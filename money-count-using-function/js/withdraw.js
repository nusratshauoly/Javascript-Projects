document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newInputField = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newInputField;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newInputField;
    if (newInputField > newBalanceTotal) {
        alert('Account dont have sufficient balance!!!');
        return;
    }
    setTextElementValueById('balance-total', newBalanceTotal);

})