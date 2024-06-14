
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw input field
     const withdrawAmount = getInputFieldValueById('withdraw-field');
     // current balance
     const currentBalance = getTextElementValueById('balance-total');

     // unvalid number
    if (withdrawAmount === undefined || withdrawAmount <= 0) {
        return;
    }
     // insufficient balance (we have to put it first before total balance cause it's a input value unless it wont work).
     // By placing the check before updating the withdrawal total, you ensure that the withdrawal total is only updated if the withdrawal amount is valid and the current balance is sufficient.
     if (withdrawAmount > currentBalance) {
          alert('Insufficient Balance!');
          return;
     }

     // previous balance of withdraw total
     const previousWithdrawTotal = getTextElementValueById('withdraw-total');
     
    // calculate new withdraw total
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    // set innertext of withdraw total value
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // get previous balance total by using the function
     const previousBalanceTotal = getTextElementValueById('balance-total');
    // get new balance total
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    // set innertext of balance total value
    setTextElementValueById('balance-total', newBalanceTotal);
})