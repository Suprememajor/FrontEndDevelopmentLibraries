let resetBtn = document.getElementById("reset");
let timerLabel = document.getElementById("timer-label");
let timerLeft = document.getElementById("time-left");
let sessionLength = document.getElementById("session-length");
let breakLength = document.getElementById("break-length");
let audio = document.getElementById("beep");
var myInterval;
let curMinutes;
let seconds = 59;
var started = false;
let minDisp = "";
let secDisp = "";

let reset = () => {
  started = false;
  clearInterval(myInterval);
  audio.pause();
  audio.currentTime = 0;
  document.getElementById("break-length").innerHTML = 5;
  document.getElementById("session-length").innerHTML = 25;
  document.getElementById("time-left").innerHTML = "25:00"; 
  timerLabel.innerHTML = "Session";
}

const Decreasebreak = () => {  
  if(parseInt(breakLength.innerHTML) === 1) return;
  breakLength.innerHTML = parseInt(breakLength.innerHTML) - 1;
  updateTimeleft();
}
const Increasebreak = () => {
  if(parseInt(breakLength.innerHTML) === 60) return;
  breakLength.innerHTML = parseInt(breakLength.innerHTML) + 1;
  updateTimeleft();
}
const DecreaseSession = () => {
  if(parseInt(sessionLength.innerHTML) === 1) return;
  sessionLength.innerHTML = parseInt(sessionLength.innerHTML) - 1;
  updateTimeleft();
}
const IncreaseSession = () => {
  if(parseInt(sessionLength.innerHTML) === 60) return;
  sessionLength.innerHTML = parseInt(sessionLength.innerHTML) + 1; 
  updateTimeleft();
}
const updateTimeleft = () => {
  let newVal = (timerLabel.innerHTML === "Session") ? 
      parseInt(sessionLength.innerHTML) : parseInt(breakLength.innerHTML);
  newVal = (newVal < 10) ? "0" + newVal : newVal;
  timerLeft.innerHTML = newVal + ":00";
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
          timerLeft.innerHTML = "00:00";
          audio.play();
          swapSession();
          curMinutes = getCurrentMinutes();
      } else {
        minDisp = (curMinutes < 10) ? "0" + curMinutes : curMinutes;
        timerLeft.innerHTML = minDisp + ":" + "00";
        curMinutes--;
        seconds = 59;
      }     
    } else {
      minDisp = (curMinutes < 10) ? "0" + curMinutes : curMinutes;
      secDisp = (seconds < 10) ? "0" + seconds : seconds;
      console.log(minDisp, secDisp);
      timerLeft.innerHTML = minDisp + ":" + secDisp;
      seconds--;
    }
}