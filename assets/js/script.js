/* more details button */
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

/* vibration */
function vibrate() {
  navigator.vibrate(6);
}

/* reveal only visible social buttons */
const socialMediaLinks = document.querySelectorAll(".email-button, .social-media a");

ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9,
});

/* on load name effect */
setTimeout(() => document.querySelector(".name").classList.add("loaded"), 500);
