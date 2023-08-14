// --------- Please Withdraw Section ----------
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// clear the input
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number');
        return;
    }

// ---------- withdraw section -----------
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// ------- add previous and new withdraw amount -----------
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

// --------- balance section -------------
     const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//if want to withdraw more money than balance
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Account doesn't have sufficient balance");
        return;
    }
    
// --------- current balance after withdrawing -------------
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})