// ‘Rock’, ‘Paper’ or ‘Scissors’.

const userChoice = document.getElementsByClassName("userChoice");
const machineButton = document.getElementById("machine-buttons");
const title = document.getElementById('title');
let totalRounds = 0;
let userScore = 0;
let machineScore = 0;
const resultRoundText = document.getElementById("resultRoundText");
let userStars = document.getElementById('userStars');
let machineStars = document.getElementById('machineStars');


// Event listeners
Array.from(userChoice).forEach((element) => {
  element.addEventListener("click", function (e) {
    if(userScore != 5 && machineScore != 5) {
      game(e.target.parentElement.value);
    }else{
      resetGame();
    }
  });
});


/**
 * 
 * @returns the random choice for the machine player
 * function that generate a random choice for the computer
 */
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.round(Math.random() * 2)];
}

/**
 * 
 * @param {*} userChoice Is the choice the user decided take;
 * @returns the winner of the round or if the round was a tie
 * Function to play a round.
 */ 
function playRound(userChoice) {
  const computerChoice = getComputerChoice().toLowerCase();
  userChoice.toLowerCase();

  if (userChoice === computerChoice) {
    resultRoundText.textContent = "Is a tied";
    return [0, computerChoice];
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    resultRoundText.textContent = `Congratulations you Win! | ${userChoice} beats ${computerChoice}`;
    return [1, computerChoice];
  } else if (userChoice === "paper" && computerChoice === "rock") {
    resultRoundText.textContent = `Congratulations you Win! | ${userChoice} beats ${computerChoice}`;
    return [1, computerChoice];
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    resultRoundText.textContent = `Congratulations you Win! | ${userChoice} beats ${computerChoice}`;
    return [1, computerChoice];
  } else {
    resultRoundText.textContent = `"You Lose! | ${computerChoice} beats ${userChoice}!`;
    return [2, computerChoice];
  }
}

/**
 * 
 * @param {*} userChoice Is the choice the user decided take;
 * Function that play a complete game
 */
function game(userChoice) {
  let resultRound = playRound(userChoice);
  title.textContent = `ROUND ${++totalRounds}`
  machineButton.removeChild(machineButton.lastChild);

  let element = document.getElementById(resultRound[1]).cloneNode(true);
  machineButton.appendChild(element);

  if (resultRound[0] == 1) {
    ++userScore;
    userStars.innerHTML += "<i class='fa-regular fa-star'></i>";
  } else if (resultRound[0] == 2) {
    ++machineScore;
    machineStars.innerHTML += "<i class='fa-regular fa-star'></i>";
  }
}

/**
 * Function to reset the game when user or machine score is 5
 */
function resetGame(){
  userScore = 0;
  machineScore = 0;
  totalRounds = 0  
  userStars.innerHTML = "";
  machineStars.innerHTML = "";
}
