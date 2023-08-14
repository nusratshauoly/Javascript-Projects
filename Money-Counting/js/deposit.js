// --------- please deposit section ----------
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

// clear the please deposit input field
    depositField.value = '';

// if enter invalid number  
   if (isNaN(newDepositAmount)) {
        alert('Please enter a valid number');
        return;
    }

// -------------- Deposit Section -------------
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

// ----- Add previous and new deposit -------
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;     

// -------------- Balance Section ------------
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// -------------- Add previous and new balance on Balance section
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;   
})