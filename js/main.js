//Calculate Device Heigh and width
window.addEventListener("load", (event) => {
  const deviceHeight = window.screen.height;
  const deviceWidth = window.screen.width;
  const containerWidth = document.getElementById("container").offsetWidth;
  const containerHeight = document.getElementById("container").offsetHeight;

  document.getElementById("dumb-display").style.width =
    Math.floor(0.8 * containerWidth) + "px";
  document.getElementById("container").style.height = deviceHeight + "px";
  if (deviceWidth >= 1025 && deviceHeight <= 1440){
    document.getElementById("no-btn").style.top = (.3 * containerWidth)-20 + "px";
    document.getElementById("no-btn").style.left = (containerHeight*8.5) + "px";
    
    document.getElementById("yes-btn").style.top = (.3 * containerWidth)-20 + "px";
    document.getElementById("yes-btn").style.left = (containerHeight*3.7) + "px";
    
    document.getElementById("iam-not").style.top = (.3 * containerWidth)-20 + "px";
    document.getElementById("iam-not").style.left = (containerHeight*5.6) + "px";
    }
 else if (deviceWidth >= 769 && deviceHeight <= 1024){
    document.getElementById("no-btn").style.top = (.33 * containerWidth)-20 + "px";
    document.getElementById("no-btn").style.left = (containerHeight*6.55) + 40 + "px";
    
    document.getElementById("yes-btn").style.top = (.33 * containerWidth)-20 + "px";
    document.getElementById("yes-btn").style.left = (containerHeight*3) -10 + "px";
    
    document.getElementById("iam-not").style.top = (.35* containerWidth)-20 + "px";
    document.getElementById("iam-not").style.left = (containerHeight*4.44) + "px";
    }
  else if (deviceWidth >= 426 && deviceHeight <= 768){
    document.getElementById("no-btn").style.top = (.42 * containerWidth)-20 + "px";
    document.getElementById("no-btn").style.left = (containerHeight*5.5) - 5 + "px";
    
    document.getElementById("yes-btn").style.top = (.42 * containerWidth)-20 + "px";
    document.getElementById("yes-btn").style.left = (containerHeight*2) + "px";
    
    document.getElementById("iam-not").style.top = (.42* containerWidth)-20 + "px";
    document.getElementById("iam-not").style.left = (containerHeight*3.2) + 3 + "px";
    }
    // else if (deviceWidth >= 376 && deviceHeight <= 425){
    //   document.getElementById("no-btn").style.top = (.6 * deviceWidth) + "px";
    //   document.getElementById("no-btn").style.left = (deviceHeight*.48) + "px";
      
    //   document.getElementById("yes-btn").style.top = (.6 * deviceWidth) + "px";
    //   document.getElementById("yes-btn").style.left = (deviceHeight*.18)  + "px";
      
    //   document.getElementById("iam-not").style.top = (.6* deviceWidth) + "px";
    //   document.getElementById("iam-not").style.left = (deviceHeight*.24) + "px";
    //   }
    //   else if (deviceWidth >= 321 && deviceHeight <= 375){
    //     document.getElementById("no-btn").style.top = (.6 * deviceWidth) + "px";
    //     document.getElementById("no-btn").style.left = (deviceHeight*.48) + "px";
    //     console.log(deviceHeight);
    //     document.getElementById("yes-btn").style.top = (.6 * deviceWidth) + "px";
    //     document.getElementById("yes-btn").style.left = (deviceHeight*.18)  + "px";
        
    //     document.getElementById("iam-not").style.top = (.6* deviceWidth) + "px";
    //     document.getElementById("iam-not").style.left = (deviceHeight*.24) + "px";
    //     }
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
  let leftPosition = getRandomInt(0, 250);
  let topPosition = getRandomInt(65, 270);
  noButton.style.top = topPosition + "px";
  console.log(leftPosition);
  noButton.style.left = leftPosition + "px";
});
