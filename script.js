const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("strt");
const resetBtn = document.getElementById("rst");

let totalSeconds = 25 * 60;
let countdown;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

startBtn.addEventListener("click", function () {

    if (countdown) return;

    countdown = setInterval(function () {

        totalSeconds--;

        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(countdown);
            countdown = null;

            alert("🎉 Focus session completed!");
        }

    }, 1000);

});

resetBtn.addEventListener("click", function () {

    clearInterval(countdown);
    countdown = null;

    totalSeconds = 25 * 60;

    updateDisplay();

});

updateDisplay();