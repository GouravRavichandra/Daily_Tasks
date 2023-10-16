document.addEventListener("DOMContentLoaded", function () {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");
    const userScoreElement = document.getElementById("userScore");
    const compScoreElement = document.getElementById("compScore");
    const userMoveText = document.getElementById("userMoveText");
    const compMoveText = document.getElementById("compMoveText");
    const roundResult = document.getElementById("roundResult");
  
    let userScore = 0;
    let compScore = 0;
  
    rockBtn.addEventListener('click', () => playGame('rock'));
    paperBtn.addEventListener('click', () => playGame('paper'));
    scissorsBtn.addEventListener('click', () => playGame('scissors'));
  
    function playGame(playerChoice) {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      const result = getRoundResult(playerChoice, computerChoice);
      updateScores(result);
  
      const userMove = playerChoice;
      const compMove = computerChoice;
  
      displayResult(userMove, compMove, result);
    }
  
    function getRoundResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return "tie";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return "win";
      } else {
        return "lose";
      }
    }
  
    function updateScores(result) {
      if (result === "win") {
        userScore++;
      } else if (result === "lose") {
        compScore++;
      }
      userScoreElement.textContent = userScore;
      compScoreElement.textContent = compScore;
    }
  
    function displayResult(userMove, compMove, result) {
      userMoveText.textContent = userMove;
      compMoveText.textContent = compMove;
      if (result === "tie") {
        roundResult.textContent = "It's a tie!";
      } else if (result === "win") {
        roundResult.textContent = "You win!";
      } else {
        roundResult.textContent = "Computer wins!";
      }
    }
  });
  