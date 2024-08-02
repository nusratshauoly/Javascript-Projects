'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when found no input number
  if (!guess) {
    displayMessage('⛔️ No Number');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when score is  highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong : (using dry code principle of (else if/ // when guess is too high  && //  when guess is too low))
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Button:
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// ------------------------ comment in every line -------------------
('use strict'); // Enforces strict mode which helps catch common coding errors

// Initialize the secret number with a random value between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initialize the player's score
let score = 20;
// Initialize the highscore
let highscore = 0;

// Function to display messages to the player
let displayMessage = function (message) {
  // Select the element with the class 'message' and change its text content
  document.querySelector('.message').textContent = message;
};

// Add an event listener to the 'check' button for the click event
document.querySelector('.check').addEventListener('click', function () {
  // Get the value of the input field and convert it to a number
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // Log the guess and its type for debugging

  // If no input is provided
  if (!guess) {
    displayMessage('⛔️ No Number'); // Display "No Number" message
  }
  // If the player guesses correctly
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!'); // Display "Correct Number!" message
    document.querySelector('.number').textContent = secretNumber; // Show the secret number
    document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
    document.querySelector('.number').style.width = '30rem'; // Increase the width of the number display

    // Update the highscore if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; // Display the new highscore
    }
  }
  // If the guess is wrong
  else if (guess !== secretNumber) {
    // If the player still has score points left
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'); // Display "Too High!" or "Too Low!" message
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score; // Update the score display
    } else {
      displayMessage('💥 You Lost the game!'); // Display "You Lost the game!" message
      document.querySelector('.score').textContent = 0; // Set the score to 0
    }
  }
});

// Add an event listener to the 'again' button for the click event
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset the score to 20
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a new secret number
  displayMessage('Start guessing...'); // Reset the message to "Start guessing..."
  document.querySelector('.score').textContent = score; // Update the score display
  document.querySelector('.number').textContent = '?'; // Reset the number display to '?'
  document.querySelector('.guess').value = ''; // Clear the guess input field
  document.querySelector('body').style.backgroundColor = '#222'; // Reset the background color to dark gray
  document.querySelector('.number').style.width = '15rem'; // Reset the number display width
});
