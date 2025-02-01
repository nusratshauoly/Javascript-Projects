// remove the hidden class show the cash out section while click the cash out button

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    // show cash out button clicked
    showSectionById("add-money-form");

    // hide add money form while showing cash out
  });

// --- show add money form and hide the cash out form ---
// remove the hidden class show the add money section while click the Add money button

// add money button
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function (event) {
    document.getElementById("add-money-form").classList.remove("hidden");
    // hide cash out form
    document.getElementById("cash-out-form").classList.add("hidden");
  });

// cash out button
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });

// transaction button
document
  .getElementById("btn-show-transaction")
  .addEventListener("click", function () {
    showSectionById("transaction-form");
  });
