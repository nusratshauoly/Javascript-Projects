let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


// ---------------------------------- comment in code ----------------------------

// //***  */ => (modular programming) => when we divide our task in small functions, 1 function for 1 task.and these function are reusable means we can call the function from anywhere


// // 1.for user score
// let userScore = 0;
// // 2.for computer score
// let computerScore = 0;


// // 3. to access all of the choice (rock, paper, scissors)
// const choices = document.querySelectorAll('.choice');
// // 27. for message container
// const msg = document.querySelector('#msg');

// // access with querySelector
// const userScorePara = document.querySelector('#user-score');
// const computerScorePara = document.querySelector('#computer-score');

// //8. for computer choice 
// //9.  to play game : write a function to generate a randomchoice and decide who will win(user / computer)
// //11. we call the (playGame) function for play in (userChoice) and take the parameter as (userChoice) so that (playGame) function know (userChoice) when playing and compare it with computer play choice to give the result.
// const playGame = (userChoice) => {
//     console.log('user choice = ', userChoice);
//     // 15. Generate Computer choice (call the {generateComputerChoice} function)
//     const computerChoice = generateComputerChoice();
//     console.log('Computer choice = ', computerChoice);

//     // 17. Draw the game (if two (user & computer) gave the same output)
//     if (userChoice === computerChoice) {
//         // 18. Draw game function call
//         drawGame();
//     }
//     else {
//         // 19. user win if
//         let userWin = true;
//         // 20. user er choice 'rock' hole
//         if (userChoice === 'rock') {
//             //21. if (computers choice, paper then user will fail(false) & scissors user will win(true))
//             userWin = computerChoice === 'paper' ? false : true;
//         }
//         // 22. user er choice 'paper' hole
//         else if (userChoice === 'paper') {
//             // 23. if computer choose (if computer choose rock then user will win, scissors then computer will win & user fail)
//             userWin = computerChoice === 'scissors' ? false : true;
//         }
//             // 24. user has scissors & computer has rock, paper
//         else {
//             userWin = computerChoice === 'rock' ? false : true;
//         }
//         // 26. call the showWinner function
//         // 35: k winner with name dekhabe
//         showWinner(userWin);
        
    
//     }

// }

// //12. create a function of computer choice
// const generateComputerChoice = () => {
//         // 13. store these 3 (rock, paper, scissors) in a (array) cause in javascript there are no straight rules to get a random string from a large base string but can get random numbers thats why we are storing (string) in a (array index) in the form of a random number. so that we can get the index number randomly(here's => 0, 1, 2) means here's the number is 3.(Math.random) number joto chai always er cheye 1 bariye multiply korbo. jodi random number (0 - 2) porjonto chai then (Math.random) er shathe (3) multiply korbo.
        
//         const options = ["rock", "paper", "scissors"];
//         // 14. from these 3 (rock, paper, scissors), a computer randomly generate only one choice, (math.random * 3) diye jei answer ashbe oita amra treat korte pari as a random index from (0, 1, 2) of (rock, paper, scissor) in the array
//         // * (Math.floor) => (Math.random) korar por jei fraction number ashe sheta bad diye only decimal or full number ta rakhe.
//         const randomIndex = Math.floor(Math.random() * 3);
//         return options[randomIndex];
//     }
    
// //16. create a function about draw game
// const drawGame = () => {
    
//     // 28: change the message container message when draw.
//     msg.innerText = "Game was Draw. Play Again!";
//     // 33. whenever we will draw , change the button background color as previous
//         msg.style.backgroundColor = '#081b31';
// }

// // 25: for showing winner use a function with userWin parameter/variable
//  //34. k winner with name dekhabe
// const showWinner = (userWin, userChoice, computerChoice) => {
//     if (userWin) {
//         // 35. when user  win increase the point
//         userScore++;
//         userScore.para.innerText = userScore;
//         // 29: change the message container message when win.
//         msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
//         // 31. whenever we will win , change the button background color
//         msg.style.backgroundColor = 'green';
//     }
//     else {
//         //36: when computer wins
//         computerChoice++;
//         computerScorePara.innerText = computerScore;
//         // 30. change the message container message when lose.
//         msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
//         // 32. whenever we will lose , change the button background color
//         msg.style.backgroundColor = 'red';
//     }
// } 

// // 4. to user choice
// // 5. to add each(individual {choice} class) div er upor event listener which track our (click) event... and to check each div use (forEach):
// choices.forEach((choice) => {
//     console.log(choice);
//     //6.  whenever click individual div:
//     choice.addEventListener('click', () => {
//         //7.  we can also access the id as per users choice
//         const userChoice = choice.getAttribute('id');
//         // //console.log('choices was clicked', userChoice);
//         //10. we can call the function (playgame) to play in (userChoice)
//         playGame(userChoice);
        
//     });
// });






// // ----------------------- comment in code -----------------------

// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all elements with the class "choice"
const choices = document.querySelectorAll(".choice");
// Select the message paragraph element by its ID
const msg = document.querySelector("#msg");

// Select the user and computer score paragraph elements by their IDs
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate the computer's choice
const genCompChoice = () => {
  // Array of possible choices
  const options = ["rock", "paper", "scissors"];
  // Generate a random index between 0 and 2
  const randIdx = Math.floor(Math.random() * 3);
  // Return the choice corresponding to the random index
  return options[randIdx];
};

// Function to handle a draw game
const drawGame = () => {
  // Update the message text to indicate a draw
  msg.innerText = "Game was Draw. Play again.";
  // Set the background color of the message to dark blue
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner of the game
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // Increment the user's score if the user wins
    userScore++;
    // Update the displayed user score
    userScorePara.innerText = userScore;
    // Update the message text to indicate the user won
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    // Set the background color of the message to green
    msg.style.backgroundColor = "green";
  } else {
    // Increment the computer's score if the user loses
    compScore++;
    // Update the displayed computer score
    compScorePara.innerText = compScore;
    // Update the message text to indicate the user lost
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    // Set the background color of the message to red
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game with the user's choice
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice();

  // Check if the game is a draw
  if (userChoice === compChoice) {
    // Handle a draw game
    drawGame();
  } else {
    // Variable to track if the user wins
    let userWin = true;
    // Determine the winner based on user and computer choices
    if (userChoice === "rock") {
      // Rock vs scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper vs rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Scissors vs rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    // Display the winner
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add click event listeners to each choice element
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the user's choice based on the clicked element's ID
    const userChoice = choice.getAttribute("id");
    // Play the game with the user's choice
    playGame(userChoice);
  });
});
