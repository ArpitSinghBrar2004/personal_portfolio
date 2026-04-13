  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  });
const text = `function moreAboutMe() {
  const data = {};

  data["Age"] = 22
  data["Phone"] = "7206098885"
  data["Email"] = "arpitsinghbrar853@gmail.com"
  data["GitHub"] = "ArpitSinghBrar2004"

  data["Bio"] =
  "Self-taught developer building
   scalable apps, dashboards, and gaming systems.
   Strong in modern web tech and AI-assisted development."

  return data
}`;

const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 15); // speed (lower = faster)
  }
}

typeEffect();