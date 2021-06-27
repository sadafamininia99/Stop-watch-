const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 57;

//interval

setInterval(function () {
    timerTime++;

    const numOfMInutes = Math.floor(timerTime /60);
    const numOfSeconds = timerTime % 60; 

    console.log(numOfMInutes , numOfSeconds);

    seconds.innerText =numOfSeconds;
    // console.count("helooooo");
    },1000);

//Functions👩🏼‍🦯👩🏼‍🦯

function startTimer() {}

function stopTimer() {}

function resetTimer() {}

//ADD EventListiner
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
