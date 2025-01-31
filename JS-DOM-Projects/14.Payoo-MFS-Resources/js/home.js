// here if we enter a wrong pin then the amount we want to add money, it won't add but if we give right pin , the money will add.

// --------- add money to the account -----------

// step - 1 : add an event listener to the add money button inside the form.  (took event as a parameter to occur event while clicking the (add Money) button)
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // * prevent page reload after form submit
    event.preventDefault();

    // step - 2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    // console.log(addMoneyInput);
    const addMoneyNumber = parseFloat(addMoneyInput);

    // * get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    // console.log(pinNumberInput);

    // step - 3: verify the pin number (not a right way => unprofessional way)
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");

      // step - 4: get the current balance
      const balance = document.getElementById("account-balance").innerText;
      // console.log(balance);

      // step - 5: add addMoneyInput with balance
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      // step - 6: update the balance in the UI / DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
