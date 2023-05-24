var audio = document.getElementById("audio");
var img = document.getElementById("imageAudio");

function play() {
  audio.play();
}

function stop() {
  audio.pause();
}

img.addEventListener("click", play);
img.addEventListener("mouseover", play);
