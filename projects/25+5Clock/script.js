const Decreasebreak = () => {
    let breakLength = document.getElementById("break-length");
    breakLength.innerHTML = parseInt(breakLength.innerHTML) - 1;
  }
  const Increasebreak = () => {
    let breakLength = document.getElementById("break-length");
    breakLength.innerHTML = parseInt(breakLength.innerHTML) + 1;
  }