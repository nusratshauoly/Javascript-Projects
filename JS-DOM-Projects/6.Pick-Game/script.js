'use strict';
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, currentScore, scores, activePlayer;

// When Starting a new game
const newGame = function () {
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
newGame();

// --------------- switching the player ------------------
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ------------ rolling dice functionality -------------
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    // check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// ---------- button hold -------------
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// setting the new geme
btnNew.addEventListener('click', newGame);

// //----------------------------- comment in code ----------------------------

// ('use strict');

// // Selecting Elements
// const player0El = document.querySelector('.player--0'); // Select player 1 element
// const player1El = document.querySelector('.player--1'); // Select player 2 element
// const score0El = document.querySelector('#score--0'); // Select player 1 score element
// const score1El = document.querySelector('#score--1'); // Select player 2 score element
// const current0El = document.querySelector('#current--0'); // Select player 1 current score element
// const current1El = document.querySelector('#current--1'); // Select player 2 current score element

// const diceEl = document.querySelector('.dice'); // Select dice element
// const btnNew = document.querySelector('.btn--new'); // Select New Game button
// const btnRoll = document.querySelector('.btn--roll'); // Select Roll Dice button
// const btnHold = document.querySelector('.btn--hold'); // Select Hold button

// let playing, currentScore, scores, activePlayer; // Declare variables for game state

// // When starting a new game
// const newGame = function () {
//   scores = [0, 0]; // Initialize scores for both players to 0
//   playing = true; // Set the game state to playing
//   activePlayer = 0; // Set the active player to player 1
//   currentScore = 0; // Set the current score to 0

//   score0El.textContent = 0; // Set player 1 score display to 0
//   score1El.textContent = 0; // Set player 2 score display to 0
//   current0El.textContent = 0; // Set player 1 current score display to 0
//   current1El.textContent = 0; // Set player 2 current score display to 0

//   diceEl.classList.add('hidden'); // Hide the dice
//   player0El.classList.remove('player--winner'); // Remove winner class from player 1
//   player1El.classList.remove('player--winner'); // Remove winner class from player 2
//   player0El.classList.add('player--active'); // Add active class to player 1
//   player1El.classList.remove('player--active'); // Remove active class from player 2
// };
// newGame(); // Initialize the game

// // Switching the player
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0; // Reset current score display for the active player
//   currentScore = 0; // Reset current score
//   activePlayer = activePlayer === 0 ? 1 : 0; // Switch active player (If the current activePlayer is 0, it changes it to 1. && ||  If the current activePlayer is 1, it changes it to 0.)
//   player0El.classList.toggle('player--active'); // Toggle active class for player 1
//   player1El.classList.toggle('player--active'); // Toggle active class for player 2
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // Generate a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // Display dice
//     diceEl.classList.remove('hidden'); // Show the dice
//     diceEl.src = `dice-${dice}.png`; // Set the dice image

//     // Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice; // Update current score
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore; // Update current score display
//     } else {
//       // Switch to the next player
//       switchPlayer(); // Switch player
//     }
//   }
// });

// // Button hold functionality
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // Add current score to the active player's score
//     scores[activePlayer] += currentScore; // Update player's total score
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer]; // Update player's total score display

//     // Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false; // Set game state to not playing
//       diceEl.classList.add('hidden'); // Hide the dice
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner'); // Add winner class to the active player
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active'); // Remove active class from the active player
//     } else {
//       // Switch to the next player
//       switchPlayer(); // Switch player
//     }
//   }
// });

// // Setting the new game functionality
// btnNew.addEventListener('click', newGame); // Add event listener to New Game button to start a new game
