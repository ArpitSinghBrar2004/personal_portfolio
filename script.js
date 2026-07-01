// Dynamic Section Scroll Transitions
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// Initial trigger execution
revealOnScroll();

// Interactive IDE Terminal Simulation
const typingElement = document.getElementById("typing");

const lines = [
  "const developer = {",
  '  name: "Arpit Singh",',
  '  focus: ["CoreRex Architecture", "Automation Tools", "FiveM Modules"],',
  '  stack: ["Python", "JavaScript", "Lua", "C++"],',
  '  manifesto: "Engineered scalable digital automation ecosystem"',
  "};"
];

let lineIndex = 0;
let charIndex = 0;

function typeSmooth() {
  if (!typingElement) return;

  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typingElement.textContent += lines[lineIndex][charIndex];
      charIndex++;
      
      // Variable delay calculation mirroring actual typing speeds
      const humanDelay = Math.random() * 15 + 15;
      setTimeout(typeSmooth, humanDelay);
    } else {
      typingElement.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeSmooth, 200);
    }
  }
}

// Initiate terminal compilation simulation on system frame load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeSmooth, 500);
});

// Preloader Exit Engine
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // Small delay allows animations to transition organically
    setTimeout(() => {
      loader.classList.add("loaded");
      
      // Fire scroll reveal check immediately when page uncovers
      revealOnScroll();
    }, 900);
  }
});