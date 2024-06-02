document.getElementById('btn-withdraw').addEventListener('click', function () {
    // withdraw field
    const newInputField = getInputFieldValueById('withdraw-field');
    // withdraw total
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newInputField;
    // set innerText in withdraw total
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // balance section
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newInputField;
    if (newInputField > newBalanceTotal) {
        alert('Account dont have sufficient balance!!!');
        return;
    }
    // set innerText in balance total
    setTextElementValueById('balance-total', newBalanceTotal);
})