//Random Number Generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

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

//Yes Button Js
const yesButton = document.getElementById('yes-btn');
yesButton.addEventListener('click',function(){
document.getElementById('dumb-answer').style.display = 'block';
document.getElementById('dumb-question').style.display = 'none';

});
console.log(window.screen.height);