let timerInterval;
let workDuration=45*60;
let breakDuartion=5*60;
let isWorkTime =true;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update the timer display
function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
}

// Function to start the timer
function startTimer() {
  clearInterval(timerInterval);
  let duration = isWorkTime ? workDuration : breakDuration;

  timerInterval = setInterval(() => {
    if (duration <= 0) {
      clearInterval(timerInterval);
      isWorkTime = !isWorkTime;
      duration = isWorkTime ? workDuration : breakDuration;
      startTimer(); // Start the timer for the next interval
    } else {
      updateTimerDisplay(duration);
      duration--;
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  isWorkTime = true;
  updateTimerDisplay(workDuration);
}

// Event listeners
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize timer display
updateTimerDisplay(workDuration);