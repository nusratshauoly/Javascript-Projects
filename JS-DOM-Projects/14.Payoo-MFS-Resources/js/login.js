// ------- search : form submit reloading the page -------

// console.log("button clicking file added")

// document.getElementById('id').addEventListener('click', function)

/* ----------------


// sterp - 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step - 2 : for preventing the default browser to reload
    event.preventDefault();
    // console.log("login button clicked");

    // step - 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);


    // step - 4: validate phone and pin
    // this is not the ideal way (should not do like this)
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
    //   step - 5: allow user to use the website
    } else {
      console.log("Wrong phone number or Pin");
    }
  });


  ------------------------- */

//   ---------- Cleaner way the code ----------
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in.");
      // js onclick go to another html file in the same folder
      window.location.href = "/home.html";
    } else {
      alert("Wrong phone number or pin.");
    }
  });
