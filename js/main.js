//Calculate Device Heigh and width
window.addEventListener("load", (event) => {
  const deviceHeight = window.screen.height;
  const deviceWidth = window.screen.width;
  const containerWidth = document.getElementById("container").offsetWidth;
  const containerHeight = document.getElementById("container").offsetHeight;

  document.getElementById("dumb-display").style.width =
    Math.floor(0.7 * containerWidth) + "px";
  document.getElementById("container").style.height = .8 * deviceHeight + "px";
  console.log(containerHeight);
  return deviceHeight, deviceWidth, containerWidth, containerHeight;
});

//Random Number Generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//Function for Display Item
function hideItem(whatYouWantToHide) {
  document.getElementById(whatYouWantToHide).style.display = "none";
  if (whatYouWantToHide == "dumb-verify") {
    document.getElementById("dumb-question").style.display = "block";
    document.getElementById("page-tittle").innerHTML = "Are you Dumb?";
  } else {
    document.getElementById("dumb-answer").style.display = "block";
    document.getElementById("dumb-question").style.display = "none";
    document.getElementById("dumb-verify").style.display = "none";
    document.getElementById("page-tittle").innerHTML = "You are Dumb!";
  }
}

//No Button Js
const noButton = document.getElementById("no-btn");
noButton.addEventListener("click", function () {
  var userDeviceWidth = window.screen.width;
  //Click to change position
if(userDeviceWidth >= 769 && userDeviceWidth <= 2560){
  let leftPosition = getRandomInt(0, 620);
  let topPosition = getRandomInt(90, 450);
  noButton.style.top = topPosition + "px";
  noButton.style.left = leftPosition + "px";
}
else if(userDeviceWidth >= 425 && userDeviceWidth <= 768){
  let leftPosition = getRandomInt(0, 450);
  let topPosition = getRandomInt(60, 350);
  noButton.style.top = topPosition + "px";
  noButton.style.left = leftPosition + "px";
}
else if(userDeviceWidth >= 300 && userDeviceWidth <= 425){
  let leftPosition = getRandomInt(0, 170);
  let topPosition = getRandomInt(70, 250);
  noButton.style.top = topPosition + "px";
  noButton.style.left = leftPosition + "px";
}
});
