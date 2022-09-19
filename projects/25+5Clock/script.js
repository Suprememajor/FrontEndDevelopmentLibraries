let resetBtn = document.getElementById("reset");
let timerLabel = document.getElementById("timer-label");
let timerLeft = document.getElementById("time-left");
let sessionLength = document.getElementById("session-length");
let breakLength = document.getElementById("break-length");
  

let reset = () => {
  document.getElementById("break-length").innerHTML = 5;
  document.getElementById("session-length").innerHTML = 25;
  //document.getElementById("time-left").innerHTML = "25:00";
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