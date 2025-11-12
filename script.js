const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});
const style = document.createElement("style");
style.innerHTML = `section {opacity: 0; transform: translateY(50px); transition: all 0.6s ease;} section.visible {opacity: 1; transform: translateY(0);}`;
document.head.appendChild(style);