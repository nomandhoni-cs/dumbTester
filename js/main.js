// Function to hide current section and show next
function hideItem(current) {
  document.getElementById(current).style.display = "none";
  
  if (current === "dumb-verify") {
    document.getElementById("dumb-question").style.display = "block";
    document.getElementById("page-tittle").innerHTML = "Are you Dumb?";
  } else {
    document.getElementById("dumb-answer").style.display = "block";
    document.getElementById("page-tittle").innerHTML = "You are Dumb!";
  }
}

// Dodging "No" button - now fully dynamic & responsive
const noButton = document.getElementById("no-btn");

noButton.addEventListener("click", function(e) {
  e.preventDefault(); // prevent any default behavior
  
  const card = document.getElementById("dumb-display");
  const btnWidth = noButton.offsetWidth;
  const btnHeight = noButton.offsetHeight;
  const cardWidth = card.clientWidth;
  const cardHeight = card.clientHeight;

  // Stay in bottom 60% of card and keep safe margins
  const maxLeft = cardWidth - btnWidth - 40;
  const maxTop = cardHeight - btnHeight - 40;
  const minTop = cardHeight * 0.4;

  const left = 20 + Math.random() * (maxLeft - 40);
  const top = minTop + Math.random() * (maxTop - minTop);

  noButton.style.left = `${left}px`;
  noButton.style.top = `${top}px`;
});
