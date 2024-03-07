function toggleMode() {
  console.log("Toggle mode");
  const calculator = document.getElementById("calculator");
  calculator.classList.toggle("dark");
  document.getElementById("calculator").style.background = "#000";
  var color = document.getElementById("calculator").style.backgroundColor;
  console.log(color);
  document.getElementById("calculator").style.color = "#fff ";
}

// Event listener for mode toggle button
document.getElementById("mode-toggle").addEventListener("click", toggleMode);
document.getElementById("calculator").style.background = "#ffffff";
document.getElementById("calculator").style.color = "#000";
