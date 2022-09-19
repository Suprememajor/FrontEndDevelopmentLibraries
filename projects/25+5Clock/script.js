const Decreasebreak = () => {
    let breakLength = document.getElementById("break-length");
    breakLength.innerHTML = parseInt(breakLength.innerHTML) - 1;
  }
  const Increasebreak = () => {
    let breakLength = document.getElementById("break-length");
    breakLength.innerHTML = parseInt(breakLength.innerHTML) + 1;
  }
  const DecreaseSession = () => {
    let sessionLength = document.getElementById("session-length");
    sessionLength.innerHTML = parseInt(sessionLength.innerHTML) - 1;
  }
  const IncreaseSession = () => {
    let sessionLength = document.getElementById("session-length");
    sessionLength.innerHTML = parseInt(sessionLength.innerHTML) + 1;
  }