document.getElementById('btn-withdraw').addEventListener('click', function () {

    // withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    // if enter invalid amount
    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number!!!');
        return;
    }

    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    

    // balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // condition of withdrawing money
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Your Account doesn't have sufficient balance");
        return;
    }

    // set total withdraw value
    withdrawTotal.innerText = currentWithdrawTotal;
    
    // total balance after withdrawing
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;

})