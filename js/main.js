// Function for Display Item
function hideItem(whatYouWantToHide) {
  const elementToHide = document.getElementById(whatYouWantToHide);
  elementToHide.style.display = "none";

  if (whatYouWantToHide == "dumb-verify") {
    document.getElementById("dumb-question").style.display = "block";
    document.getElementById("page-tittle").innerHTML = "Are you Dumb?";
  } else {
    document.getElementById("dumb-answer").style.display = "block";
    document.getElementById("page-tittle").innerHTML = "You are Dumb!";
  }
}

// Random Number Generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const noButton = document.getElementById("no-btn");
const container = document.getElementById("dumb-display");

// Logic to move the button
function moveButton() {
  // 1. Get the actual dimensions of the white box (container)
  const containerRect = container.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();

  // 2. Calculate the maximum X and Y coordinates inside the box
  // We subtract the button size so it doesn't overflow out of the box
  const maxX = containerRect.width - btnRect.width; 
  const maxY = containerRect.height - btnRect.height;

  // 3. Generate random coordinates
  const randomX = getRandomInt(0, maxX);
  const randomY = getRandomInt(0, maxY);

  // 4. Apply new position
  // We set position absolute so it breaks out of the flex layout
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

// Add Event Listeners
// 'mouseover' for Desktop (when mouse hovers)
noButton.addEventListener("mouseover", moveButton);
// 'click' for Mobile (when they tap)
noButton.addEventListener("click", moveButton);
