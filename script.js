const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 0;

//interval

setInterval(function () {
    timerTime ++;
    seconds.innerText =timerTime;
    console.count("helooooo");
    },1000);

//Functions👩🏼‍🦯👩🏼‍🦯

function startTimer() {}

function stopTimer() {}

function resetTimer() {}

//ADD EventListiner
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
