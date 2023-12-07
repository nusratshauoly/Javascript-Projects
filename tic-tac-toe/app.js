let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

// first play start with payer0
let turn0 = true; // playerX, player0

// If those patterns match then first matching playar will win
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


// whenever click (new game) or (reset) button a new game will start
const resetGame = () => {
    turn0 = true;
    // call the (enableboxes) function
    enableBoxes();
    // again hide the winner message container
    msgContainer.classList.add('hide');


}



//  for appearing random (X & 0), add addEventListener to the (.box) button , to add addEventListener all boxes we need to use (forEach) in (boxes)...
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // // console.log('box was clicked');
        // when click the box a text(0 / X) content will appear in the box
        //  if (turn0) is true the value of box will be 0;
        if (turn0) {  //player0's turn
            box.innerText = "0";
            // for next play or round e jeno (0) na ashe er jonno (false) boshabo
            turn0 = false;
        }
        else {  //playerX's turn
            // 
            box.innerText = "X";
            turn0 = true;
        }
        // whenever we  write innerText to any button we cannot click that button again that's why we will disabled the button after click
        box.disabled = true;

        // whenever we click the button we have to check that any winner can be seen , that's why (checkWinner) function can be called .
        checkWinner();
    });
});

// whenever any player win then all button will disabled so that other can not play so create a (disbleBoxes) function
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// when the new game starts so that all the button get access
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        // to remove previous button access (X/0)
        box.innerText = "";
    }
}


// to show winner message create a (showWinner) function:
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // css class theke hide(display:none) remove kore dibo
    msgContainer.classList.remove('hide');
    // whenever any player win then all button will disabled so that other can not play and call the (disableBoxes) function
    disableBoxes();
}


// create a (checkWinner) function (to check winner we have to check each winning pattern) and each three position have to be same (X / 0).
const checkWinner = () => {
    // we have to run loop in (winPatterns) array.
    for (let pattern of winPatterns) {
        // pattern er individual index ber korte hobe (index count start from 0 = 0{first index}, 1{second index}, 2{third index}) 
        // //console.log(pattern[0], pattern[1], pattern[2]);
        // boxes button e index check korbo and value print korar jonno (innerText) dibo. (winPatterns) number wise.
        /* // console.log(
            boxes[pattern[0]].innerText, //this is position 1
            boxes[pattern[1]].innerText, //this is position 2
            boxes[pattern[2]].innerText //this is position 3
        ); // */

        // we can set this in individual variable
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        // we have to check the three position (0, 1, 2) same or not. if 1 of the position do not value then it can not win that's why we have to put if else condition  if it is winning pattern
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // who will be the winner
                // //console.log('winner', pos1Val);
                //  to show the winner message call a function (showWinner())
                showWinner(pos1Val);
            }
        }
    }
};

// when (new game & reset) button will be clicked (resetGame) function trigger/access hoye jabe
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);



// ---------------------------------------------------------------------- full code -------------------------
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
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

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);