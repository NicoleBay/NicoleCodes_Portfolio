//cat icon audio
function playAudio() {
  audio.play();
}

let audio = document.getElementById("audio");
let img = document.getElementById("imageAudio");

img.addEventListener("click", playAudio);
img.addEventListener("mouseover", playAudio);

//cat basic cerlificate link
function playBasic() {
  basic.play();
}

let basic = document.getElementById("basicAudio");
let basicLink = document.getElementById("basicLinkAudio");

basicLink.addEventListener("click", playBasic);
basicLink.addEventListener("mouseover", playBasic);

//cat plus cerlificate link
function playPlus() {
  plus.play();
}

let plus = document.getElementById("plusAudio");
let plusLink = document.getElementById("plusLinkAudio");

plusLink.addEventListener("click", playPlus);
plusLink.addEventListener("mouseover", playPlus);

//cat responsive cerlificate link
function playResponsive() {
  responsive.play();
}

let responsive = document.getElementById("responsiveAudio");
let responsiceLink = document.getElementById("responsiveLinkAudio");

responsiceLink.addEventListener("click", playResponsive);
responsiceLink.addEventListener("mouseover", playResponsive);

//cat pro cerlificate link
function playPro() {
  pro.play();
}

let pro = document.getElementById("proAudio");
let proLink = document.getElementById("proLinkAudio");

proLink.addEventListener("click", playResponsive);
proLink.addEventListener("mouseover", playResponsive);

//start of volume bar

let volumeRange = document.getElementById("volumeRange");

//update volume
function updateVolume() {
  let volume = volumeRange.value;
  audio.volume = volume;
  basic.volume = volume;
  plus.volume = volume;
  responsive.volume = volume;
  pro.volume = volume;
}

volumeRange.addEventListener("input", updateVolume); //volume range

//end of volume bar
