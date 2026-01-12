const btn = document.getElementById("openBtn");
const panel = document.getElementById("success-section");

btn.addEventListener("click", () => {
  panel.classList.toggle("hidden");
});
