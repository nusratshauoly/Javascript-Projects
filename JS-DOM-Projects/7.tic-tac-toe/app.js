// step - 1
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// step - 2
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = 'white';
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = 'black'
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// step - 7
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
// step - 5
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
// step - 6
// Function to enable all boxes and clear their text
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
// step - 4
// Function to display the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// step - 3
// Function to check if there is a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;  
    let pos2Val = boxes[pattern[1]].innerText; 
    let pos3Val = boxes[pattern[2]].innerText; 

    // Check if all three positions are not empty.
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {  
      // Check if the values in the three positions are the same, indicating a win.
      if (pos1Val === pos2Val && pos2Val === pos3Val) {  
        showWinner(pos1Val);  
        return true;  
      }
    }
  }
  // If no winner is found, the function completes and returns 'undefined' (implicitly).
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




// // ----------------------- comment in code ------------------


// // Select all elements with the class "box"
// let boxes = document.querySelectorAll(".box");
// // Select the reset button by its ID
// let resetBtn = document.querySelector("#reset-btn");
// // Select the new game button by its ID
// let newGameBtn = document.querySelector("#new-btn");
// // Select the message container by its class
// let msgContainer = document.querySelector(".msg-container");
// // Select the message paragraph element by its ID
// let msg = document.querySelector("#msg");

// // Initialize the turn variable to true (Player O starts)
// let turnO = true; //playerX, playerO
// // Initialize the count to track the number of moves
// let count = 0; //To Track Draw

// // Define the possible winning patterns
// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// // Function to reset the game
// const resetGame = () => {
//   // Reset turn to Player O
//   turnO = true;
//   // Reset move count
//   count = 0;
//   // Enable all boxes for new game
//   enableBoxes();
//   // Hide the message container
//   msgContainer.classList.add("hide");
// };

// // Add click event listener to each box
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     // Check whose turn it is and set the box's text accordingly
//     if (turnO) {
//       // Player O
//       box.innerText = "O";
//       box.style.color = 'white';
//       turnO = false;
//     } else {
//       // Player X
//       box.innerText = "X";
//       box.style.color = 'black'
//       turnO = true;
//     }
//     // Disable the clicked box
//     box.disabled = true;
//     // Increment move count
//     count++;

//     // Check if there is a winner
//     let isWinner = checkWinner();

//     // If all boxes are filled and there is no winner, it's a draw
//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// // Function to handle a draw game
// const gameDraw = () => {
//   // Update the message to indicate a draw
//   msg.innerText = `Game was a Draw.`;
//   // Show the message container
//   msgContainer.classList.remove("hide");
//   // Disable all boxes
//   disableBoxes();
// };

// // Function to disable all boxes
// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// // Function to enable all boxes and clear their text
// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// // Function to display the winner
// const showWinner = (winner) => {
//   // Update the message to congratulate the winner
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   // Show the message container
//   msgContainer.classList.remove("hide");
//   // Disable all boxes
//   disableBoxes();
// };

// // Function to check if there is a winner
// const checkWinner = () => {  // Defines a function called 'checkWinner' using arrow function syntax.
//   for (let pattern of winPatterns) {  // Iterates over each pattern in the 'winPatterns' array. Each pattern represents a possible winning combination of indices on the game board.
    
//     // Retrieve the values from the game board boxes at the indices specified by the current pattern.
//     let pos1Val = boxes[pattern[0]].innerText;  // Gets the text content of the first position in the pattern.
//     let pos2Val = boxes[pattern[1]].innerText;  // Gets the text content of the second position in the pattern.
//     let pos3Val = boxes[pattern[2]].innerText;  // Gets the text content of the third position in the pattern.

//     // Check if all three positions are not empty.
//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {  // Ensures that all three positions have values and are not empty strings.
      
//       // Check if the values in the three positions are the same, indicating a win.
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {  // Compares the values of the three positions; if they are all equal, it means there's a winner.
        
//         showWinner(pos1Val);  // Calls the 'showWinner' function, passing the value of the winning positions (either 'X' or 'O').
//         return true;  // Returns 'true' to indicate that a winner has been found, and exits the function early.
//       }
//     }
//   }
//   // If no winner is found, the function completes and returns 'undefined' (implicitly).
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);


