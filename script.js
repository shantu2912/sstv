



// Show maintenance alert on page load
window.onload = function () {
  // Remove loader after page is loaded
document.getElementById("loader").style.display = "none";

  alert("🚧 Site is under maintenance. Please have patience.");
  typeWriter();
  document.getElementById("year").textContent = new Date().getFullYear();
};
// Scroll animation for fade-in elements
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

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



