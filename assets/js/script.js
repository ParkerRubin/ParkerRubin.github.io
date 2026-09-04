document.querySelectorAll(".accordion-header").forEach((btn) => {
  const panel = btn.nextElementSibling;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
  });
});
