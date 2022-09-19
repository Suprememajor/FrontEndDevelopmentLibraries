let resetBtn = document.getElementById("reset");
let timerLabel = document.getElementById("timer-label");
let timerLeft = document.getElementById("time-left");
let sessionLength = document.getElementById("session-length");
let breakLength = document.getElementById("break-length");
var myInterval;
let curMinutes;
let seconds = 59;
var started = false;

let reset = () => {
  started = false;
  clearInterval(myInterval);
  document.getElementById("break-length").innerHTML = 5;
  document.getElementById("session-length").innerHTML = 25;
  document.getElementById("time-left").innerHTML = getCurrentMinutes() + ":00";  
}

const Decreasebreak = () => {  
  if(parseInt(breakLength.innerHTML) === 1) return;
  breakLength.innerHTML = parseInt(breakLength.innerHTML) - 1;
  updateTimeleft();
}
const Increasebreak = () => {
  breakLength.innerHTML = parseInt(breakLength.innerHTML) + 1;
  updateTimeleft();
}
const DecreaseSession = () => {
  if(parseInt(sessionLength.innerHTML) === 1) return;
  sessionLength.innerHTML = parseInt(sessionLength.innerHTML) - 1;
  updateTimeleft();
}
const IncreaseSession = () => {
  sessionLength.innerHTML = parseInt(sessionLength.innerHTML) + 1; 
  updateTimeleft();
}
const updateTimeleft = () => {
  if(timerLabel.innerHTML === "Session") {
    timerLeft.innerHTML = sessionLength.innerHTML + ":00";
  } else {
    timerLeft.innerHTML = breakLength.innerHTML + ":00";
  }
}
const start = () => {
  if(!started) {
    curMinutes = getCurrentMinutes() - 1;
    myInterval = setInterval(timer, 1000);
    started = true;
  } else {
    clearInterval(myInterval);
    started = false;
  }
}
const getCurrentMinutes = () => {
  if(timerLabel.innerHTML === "Session") {
    return parseInt(sessionLength.innerHTML);
  } else {
    return parseInt(breakLength.innerHTML);
  } 
}
const swapSession = () => {
  if(timerLabel.innerHTML === "Session") {
    timerLabel.innerHTML = "Break";
  } else {
    timerLabel.innerHTML = "Session";
  }
}
let timer = () => {
    if(seconds === 0) {
    if(curMinutes === 0) {
        swapSession();
        curMinutes = getCurrentMinutes();
    }
    timerLeft.innerHTML = curMinutes + ":" + "0" + seconds;
    curMinutes--;
    seconds = 59;
    } else {
    if(seconds < 10)
        timerLeft.innerHTML = curMinutes + ":" + "0" + seconds;
    else
        timerLeft.innerHTML = curMinutes + ":" + seconds;
    seconds--;
    }
}