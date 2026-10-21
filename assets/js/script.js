document.querySelectorAll(".accordion-header").forEach((btn) => {
  const panel = btn.nextElementSibling;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
  });
});

// Click-to-zoom lightbox for post images
document.querySelectorAll(".post-body img").forEach((img) => {
  img.style.cursor = "zoom-in";

  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const full = document.createElement("img");
    full.src = img.src;
    full.alt = img.alt;

    overlay.appendChild(full);
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const close = () => {
      overlay.remove();
      document.body.style.overflow = "";
    };

    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function onKey(e) {
      if (e.key === "Escape") {
        close();
        document.removeEventListener("keydown", onKey);
      }
    });
  });
});
