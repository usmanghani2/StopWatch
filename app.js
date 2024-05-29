// Selecting elements
const secondElement = document.getElementById('second');
const minSecondElement = document.getElementById('minsecond');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

// Variables
let timer; // To store setInterval reference
let seconds = 0;
let minSeconds = 0;




// Functions
function startTimer() {
    timer = setInterval(() => {
        minSeconds++;
        if (minSeconds < 10) {
            minSecondElement.textContent = '0' + minSeconds;
        } else {
            minSecondElement.textContent = minSeconds;
        }
        if (minSeconds >= 99) {
            seconds++;
            minSeconds = 0;
            if (seconds < 10) {
                secondElement.textContent = '0' + seconds;
            } else {
                secondElement.textContent = seconds;
            }
        }
    }, 10);
}




function stopTimer() {
    clearInterval(timer);
}




function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minSeconds = 0;
    secondElement.textContent = '00';
    minSecondElement.textContent = '00';
}

// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
