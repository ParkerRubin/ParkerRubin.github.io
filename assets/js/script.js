const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

function vibrate() {
  if (navigator.vibrate) navigator.vibrate(6);
}

const socialMediaLinks = document.querySelectorAll(".social-media a");

ScrollReveal().reveal(socialMediaLinks, {
  duration: 800,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
});

setTimeout(() => {
  document.querySelector(".name").classList.add("loaded");
}, 300);
