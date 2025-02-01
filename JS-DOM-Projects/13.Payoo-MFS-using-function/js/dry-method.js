// common shared function for (addMoney.js) & (cashout.js)

// for (add money and cash out money)

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// for switch channel by clicking button
function showSectionById(id) {
  // hide all the sections
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-form").classList.add("hidden");

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}
