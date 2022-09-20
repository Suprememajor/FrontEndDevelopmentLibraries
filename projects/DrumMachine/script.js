const playAudio = (id) => {
    let audioId = document.getElementById(id).innerText;
    let audio = document.getElementById(audioId);
    audio.play();
    document.getElementById("display").innerText = id;
  }
  document.onkeypress = (event) => {
      var charCode = event.which;
      charCode = (charCode > 90) ? charCode - 32: charCode;
      var character = String.fromCharCode(charCode);
      try{
        playAudio("Audio" + character);
      } catch (ex) {
        console.log("Invalid Key");
      }
  };