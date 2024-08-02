'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Adding ESC keyword(for keydown = value will print if the key down)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---------------- comment in every line of code -----------------
('use strict'); // Enforces strict mode which helps catch common coding errors

// Select the modal element and store it in a variable
const modal = document.querySelector('.modal');
// Select the overlay element and store it in a variable
const overlay = document.querySelector('.overlay');
// Select all elements with the class 'show-modal' and store them in a NodeList
const btnsOpenModal = document.querySelectorAll('.show-modal');
// Select the close button inside the modal and store it in a variable
const btnsCloseModal = document.querySelector('.close-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden'); // Remove the 'hidden' class from the modal to display it
  overlay.classList.remove('hidden'); // Remove the 'hidden' class from the overlay to display it
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden'); // Add the 'hidden' class to the modal to hide it
  overlay.classList.add('hidden'); // Add the 'hidden' class to the overlay to hide it
};

// Loop through each button with the class 'show-modal'
for (let i = 0; i < btnsOpenModal.length; i++) {
  // Add a click event listener to each button to open the modal when clicked
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Add a click event listener to the close button to close the modal when clicked
btnsCloseModal.addEventListener('click', closeModal);

// Add a click event listener to the overlay to close the modal when the overlay is clicked
overlay.addEventListener('click', closeModal);

// Add a keydown event listener to the document
document.addEventListener('keydown', function (e) {
  // Check if the pressed key is 'Escape' and if the modal is currently open
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Close the modal if the conditions are met
  }
});
