const startButtonSelector = '.button__start';
const stopButtonSelector = '.button__stop';
const hoursInputSelector = '#hours';
const minutesInputSelector = '#minutes';
const secondsInputSelector = '#seconds';

const hoursInput = document.querySelector(hoursInputSelector)
const minutesInput = document.querySelector(minutesInputSelector)
const secondsInput = document.querySelector(secondsInputSelector)
const startButton = document.querySelector(startButtonSelector)
const stopButton = document.querySelector(stopButtonSelector)

const delaySecond = 1; 

let intrevalId;
let remainingTime;

let hours;
let minute;
let seconds; 


setTimeout(()=> {

}, 5000)

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minute = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minute * 60 + seconds;

    intrevalId = setInterval(updateTimer, delaySecond*1000);

    document.documentElement.requestFullscreen();

    hideElement(startButton);
    showElement(stopButton);
    startButton.classList.add('hide');
    stopButton.classList.remove('hide');


}

function updateTimer() {
    if (remainingTime > 0){
    
        remainingTime --
        
        hours = Math.floor(remainingTime / 3600);
        minute = Math.floor(remainingTime % 3600 / 60);
        seconds = remainingTime % 60;
        
        hoursInput.value = hours.toString().padStart(2, '0');
        minutesInput.value = minute.toString().padStart(2, '0');
        secondsInput.value = seconds.toString().padStart(2, '0');
    } else {
        stopTimer();
    }
}


function stopTimer() {
    clearInterval(intrevalId);
    hideElement(stopButton);

    setTimeout(() => {
        document.exitFullscreen();
        showElement(startButton);
    }, 1000);
    

}



function hideElement(element) {
    element.classList.add('hide');
}

function showElement(element) {
    element.classList.remove('hide');
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)