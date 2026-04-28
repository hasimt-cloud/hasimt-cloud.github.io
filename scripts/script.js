function menu() {
  var nav = document.querySelector("nav ul");

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function showMessage() {
  alert("Remember: Call 911 before starting CPR!");
}