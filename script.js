const btn = document.getElementById("openBtn");
const panel = document.getElementById("success-card");

btn.addEventListener("click", () => {
  panel.classList.toggle("hidden");
});
