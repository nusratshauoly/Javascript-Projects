document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldAmountString = depositField.value;
    const newDepositFieldAmount = parseFloat(newDepositFieldAmountString);
    depositField.value = '';

    // if enter a invalid number
    if (isNaN(newDepositFieldAmount)) {
        alert('Please enter a valid number!!!');
        return;
    }

    // deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositFieldAmount;
    depositTotal.innerText = currentDepositTotal;

    // balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositFieldAmount;
    balanceTotal.innerText = currentBalanceTotal;

})