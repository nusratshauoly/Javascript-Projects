
document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit input field
    const depositAmount = getInputFieldValueById('deposit-field');
    if (depositAmount === undefined || depositAmount <= 0) {
        return;
    }

    // previous balance of deposit total
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + depositAmount;
    // set innertext of deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance total by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    // set innertext of balance total value
    setTextElementValueById('balance-total', newBalanceTotal);
})

