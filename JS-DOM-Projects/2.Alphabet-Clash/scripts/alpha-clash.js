// create function for play button
function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    // to play repeatedly
    continueGame();
}

// to get random alphabet
function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

// when star pressing keyword seeing the screen
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ---------------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
        // // 2 .increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed! You lost a life point');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        // if life score is 0 
        if(updatedLife === 0){
            gameOver();
        }

        // ----------------------------
        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step -2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);



// create a game over function if game is over to the last page
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}



// // ------------------------------------------------------------------ with comment ----------------------------------------------------------------------------------------------------------------------------

// // create function for play button
// function play() { // Function triggered when the "Play" button is clicked
//     // hide everything show only the playground
//     // Hide the home screen and final score sections
//     hideElementById('home-screen');
//     hideElementById('final-score');
//     showElementById('play-ground'); // Show the playground section

//     // reset score and life
//     setTextElementValueById('current-life', 5); // Reset the life count to 5
//     setTextElementValueById('current-score', 0); // Reset the score to 0

//     // Start the game by generating a random alphabet and displaying it
//     continueGame();
// }

// // to get random alphabet
// // Function to continue the game by generating and displaying a random alphabet
// function continueGame() {
//     // step -1: generate a random alphabet
//     const alphabet = getARandomAlphabet();
//     // (Optional) Log the randomly generated alphabet to the console for debugging
//     // console.log('your random alphabet', alphabet);

//     // Step 2: Display the randomly generated alphabet on the screen
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     // set background color
//     // Step 3: Highlight the corresponding key on the on-screen keyboard
//     setBackgroundColorById(alphabet);
// }

// // Function to handle keyup events when the player presses a key
// function handleKeyboardKeyUpEvent(event) {
//     // Get the key that the player pressed
//     const playerPressed = event.key;
//     console.log( 'player pressed', playerPressed)

//     // stop the game if pressed 'Esc'
//     // If the player presses the 'Escape' key, end the game
//     if(playerPressed === 'Escape'){
//         gameOver();
//     }

//     // key player is expected to press
//     // Get the alphabet the player is supposed to press from the screen
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     // Convert the displayed alphabet to lowercase to match the key press
//     const expectedAlphabet = currentAlphabet.toLowerCase();

//     // check right or wrong key pressed
//     // Check if the player pressed the correct key
//     if (playerPressed === expectedAlphabet) {
//         console.log('you got a point!');

//         // Step 1: Get the current score from the display
//         const currentScore = getTextElementValueById('current-score');
//         // Step 2: Increment the score by 1
//         const updatedScore = currentScore + 1;
//         // Step 3: Update the score display with the new value
//         setTextElementValueById('current-score', updatedScore);

//         // ---------------------------------
//         // update score:
//         // 1. get the current score
//         // const currentScoreElement = document.getElementById('current-score');
//         // const currentScoreText = currentScoreElement.innerText;
//         // const currentScore = parseInt(currentScoreText);
//         // console.log(currentScore);
        
//         // // 2 .increase the score by 1
//         // const newScore = currentScore + 1;

//         // // 3. show the updated score
//         // currentScoreElement.innerText = newScore;

//         // start a new round
//         // Start a new round by removing the highlight from the previous key and generating a new alphabet
//         removeBackgroundColorById(expectedAlphabet);
//         continueGame();
//     }
//     else {
//         console.log('You missed! You lost a life point');

//         // Step 1: Get the current life count from the display
//         const currentLife = getTextElementValueById('current-life');
//         // Step 2: Decrease the life count by 1
//         const updatedLife = currentLife - 1;
//         // Step 3: Update the life display with the new value
//         setTextElementValueById('current-life', updatedLife);

//         // if life score is 0 
//         // If the life count reaches 0, end the game
//         if(updatedLife === 0){
//             gameOver();
//         }

//         // ----------------------------
//         // step-1: get the current Life number
//         // const currentLifeElement = document.getElementById('current-life');
//         // const currentLifeText = currentLifeElement.innerText;
//         // const currentLife = parseInt(currentLifeText);

//         // // step -2: reduce the life count
//         // const newLife = currentLife - 1;

//         // // step-3: display the updated life count
//         // currentLifeElement.innerText = newLife;
//     }
// }

// // Attach the keyup event listener to the document so that the game responds to key presses
// document.addEventListener('keyup', handleKeyboardKeyUpEvent);



// // create a game over function if game is over to the last page
// function gameOver() { // Function to handle the game over scenario
//     // Hide the playground and show the final score section
//     hideElementById('play-ground');
//     showElementById('final-score');
//     // update the final score display
//     // step - 1.get the final score from the current score display
//     const lastScore = getTextElementValueById('current-score');
//     console.log(lastScore);
//     // Step 2: Set the final score to the "last score" element
//     setTextElementValueById('last-score', lastScore);

//     // clear the highlight from the last selected alphabet key
//     const currentAlphabet = getElementTextById('current-alphabet');
//     // console.log(currentAlphabet);
//     removeBackgroundColorById(currentAlphabet);
// }