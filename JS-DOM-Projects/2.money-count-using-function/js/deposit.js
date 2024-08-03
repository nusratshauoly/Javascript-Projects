document.getElementById('btn-deposit').addEventListener('click', function () {
    
    const depositAmount = getInputFieldValueById('deposit-field');
    
    if (depositAmount === undefined || depositAmount <= 0) {
        return; 
    }
    
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + depositAmount;
 
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + depositAmount;
 
    setTextElementValueById('balance-total', newBalanceTotal);
});



// ------------------------ code with comments --------------
// document.getElementById('btn-deposit').addEventListener('click', function () {
//     // deposit input field
//     const depositAmount = getInputFieldValueById('deposit-field');
    
//     // // unvalid number : Check if the deposit amount is invalid or non-positive
//     if (depositAmount === undefined || depositAmount <= 0) {
//         return; // Exit the function if the deposit amount is invalid
//     }
    
//     // previous balance of deposit total
//     const previousDepositTotal = getTextElementValueById('deposit-total');
//     // calculate new deposit total
//     const newDepositTotal = previousDepositTotal + depositAmount;
//     // set innertext of deposit total value
//     setTextElementValueById('deposit-total', newDepositTotal);

//     // get previous balance total by using the function
//     const previousBalanceTotal = getTextElementValueById('balance-total');
//     // get new balance total
//     const newBalanceTotal = previousBalanceTotal + depositAmount;
//     // set innertext of balance total value
//     setTextElementValueById('balance-total', newBalanceTotal);
// });
