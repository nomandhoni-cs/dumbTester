//Calculate Device Heigh and width
window.addEventListener("load", (event) => {
  const deviceHeight = window.screen.height;
  const deviceWidth = window.screen.width;
  return deviceHeight, deviceWidth;
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
    document.getElementById("page-tittle").innerHTML = 'Are you Dumb?';
  }
  else{
    document.getElementById("dumb-answer").style.display = "block";
    document.getElementById("dumb-question").style.display = "none";
    document.getElementById("dumb-verify").style.display = "none";
    document.getElementById("page-tittle").innerHTML = 'You are Dumb!';
  }
};
//No Button Js
const noButton = document.getElementById("no-btn");
noButton.addEventListener("click", function () {
  // const animateButton = document.getElementById("no-btn");
  let leftPosition = getRandomInt(0, 250);
  let topPosition = getRandomInt(65, 270);
  noButton.style.top = topPosition + "px";
  console.log(leftPosition);
  noButton.style.left = leftPosition + "px";
});
