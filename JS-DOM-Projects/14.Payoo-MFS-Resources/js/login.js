// ------- search : form submit reloading the page -------

// console.log("button clicking file added")

// document.getElementById('id').addEventListener('click', function)

// sterp - 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step - 2 : for preventing the default browser to reload
    event.preventDefault();
    console.log("login button clicked");

    // step - 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
