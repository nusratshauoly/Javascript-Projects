document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    // if not enter money value
    if (isNaN(cashOut)) {
      alert("Failed to cash out");
      return; // to stop validation -  not to change the amount value
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      // if theres not sufficient balance
      if (cashOut > balance) {
        alert("You do not have enough money to cash out");
        return; // to stop the validation
      }

      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
          <h4 class="text-2xl font-bold">Cash Out</h4>
          <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
      `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("No Money For You...");
    }
  });
