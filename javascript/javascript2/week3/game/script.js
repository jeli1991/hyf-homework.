const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start-btn");

const message = document.getElementById("message");

let player1Score = 0;
let player2Score = 0;

// Function to update the score
function updateScore(key) {
  if (key === "s") {
    player1Score++;
  } else if (key === "l") {
    player2Score++;
  }
}

// Function to display the winner
function displayWinner() {
  if (player1Score > player2Score) {
    message.textContent = "Player 1 wins!";
  } else if (player2Score > player1Score) {
    message.textContent = "Player 2 wins!";
  } else {
    message.textContent = "It's a tie!";
  }
}

// Function to start the game
function startGame() {
  // Disable the start button
  startButton.disabled = true;
  
  // Clear the score
  player1Score = 0;
  player2Score = 0;
  
  // Get the duration from the input
  const duration = parseInt(durationInput.value);

  // Start the timer
  let timeLeft = duration;
  const timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      message.textContent = "Time's up!";
      displayWinner();
      startButton.disabled = false;
    } else {
      message.textContent = `Time left: ${timeLeft}s`;
    }
  }, 1000);
}

// Add event listener to the start button
startButton.addEventListener("click", startGame);

// Add event listener to the document to listen for keypresses
document.addEventListener("keypress", event => {
  const key = event.key.toLowerCase();
  if (key === "s" || key === "l") {
    updateScore(key);
  }
});
