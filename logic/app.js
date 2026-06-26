let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".btn");
const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");
const showResult = document.querySelector("#decWinner");
// Game Draw
const gameDraw = () => {
  console.log("Game Draw !");
  showResult.innerText = "game is Draw :|";
  showResult.style.backgroundColor = "grey";
};

const showWinner = (whoWinner, uChoice, cChoice) => {
  if (whoWinner) {
    userScore++;
    console.log("you are Winner :) ");
    console.log(uChoice, "beats", cChoice);
    uScore.innerText = userScore;
    showResult.innerText = "You are Winner :)";
    showResult.style.backgroundColor = "green";
  } else {
    compScore++;
    console.log("Computer is Winner :) ");
    console.log(cChoice, "beats", uChoice);
    cScore.innerText = compScore;
    showResult.innerText = "Computer is the winner :(";
    showResult.style.backgroundColor = "red";
  }
};

//Computer Choice
const genCompChoice = () => {
  const arr = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return arr[idx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// User Choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
