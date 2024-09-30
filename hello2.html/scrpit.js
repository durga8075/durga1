let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById('display');
    let displayHours = hours < 10 ? '0' + hours : hours;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    let displayMilliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

    display.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

function startStopwatch() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            milliseconds += 1;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds += 1;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes += 1;
            }

            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }

            updateDisplay();
        }, 10);

        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    updateDisplay();
    document.getElementById('laps-list').innerHTML = '';  // Clear laps
}

function recordLap() {
    if (isRunning) {
        const lapsList = document.getElementById('laps-list');
        const lapTime = document.getElementById('display').innerHTML;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapsList.appendChild(lapItem);
    }
}
