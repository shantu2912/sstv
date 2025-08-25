// Show maintenance alert on page load
window.onload = function () {
  alert("🚧 Site is under maintenance. Please be patient.");
  typeWriter();
  document.getElementById("year").textContent = new Date().getFullYear();
};

// Typewriter effect
const text = "Driven By Innovation, Defined By Quality";
let i = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
