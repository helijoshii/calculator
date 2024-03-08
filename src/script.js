function toggleMode() {
  document.documentElement.classList.toggle("dark");
}

document.getElementById("mode-toggle").addEventListener("click", toggleMode);
