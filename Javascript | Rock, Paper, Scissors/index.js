/ April 3, 2023
/ Online workshop: Build a Game with Javascript
/ with Le Wagon

/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById("player-1");
  console.log("player 1:", player1);

  /* 1a. */
  const player2 = document.getElementById("player-2");
  console.log("player 2:", player2);

  /* 1b. */
  const resultArea = document.getElementById("result-area");
  console.log("result: ", resultArea);

  /* 1c. */
  const playBtn = document.getElementById("play-btn");
  console.log("play: ", playBtn);

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if (
      (a === '✊' && b === '✊') || 
      (a === '🤚' && b === '🤚') || 
      (a === '✌️' && b === '✌️')
      ) {

      /* 3a. */ return "It's a Tie!";

    } else if (
      (a === '✊' && b === '✌️') || 
      (a === '🤚' && b === '✊') || 
      (a === '✌️' && b === '🤚')
      ) {

      /* 3b. */ return "Player 1 Wins!";

    } else {

      /* 3c. */ return "Player 2 Wins!";

    }
  };

  const play = () => {
    console.log("Playing");
    let choice1 = generateChoice();
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */
playBtn.addEventListener("click", play);
/* ------------------------------- */
