/* About me toggle */
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");

if (toggle && container) {
  toggle.addEventListener("click", () => {
    container.classList.toggle("active");
  });
}

/* vibration */
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(6);
  }
}

/* reveal only GitHub and LinkedIn buttons */
const socialMediaLinks = document.querySelectorAll(".social-media a");

if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(socialMediaLinks, {
    duration: 1000,
    opacity: 0,
    distance: "30%",
    origin: "bottom",
    scale: 0.9,
  });
}

/* name animation */
setTimeout(() => {
  const name = document.querySelector(".name");
  if (name) {
    name.classList.add("loaded");
  }
}, 500);
