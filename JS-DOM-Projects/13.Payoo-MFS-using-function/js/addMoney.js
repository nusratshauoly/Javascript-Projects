// here if we enter a wrong pin then the amount we want to add money, it won't add but if we give right pin , the money will add.

// --------- add money to the account -----------
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    // if not enter money value
    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return; // to stop validation -  not to change the amount value
    }

    // unprofessional way to verify
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
      console.log(p);

      // should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add the money");
    }
  });
