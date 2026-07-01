function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

const heroImages = [
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80'
];

let currentSlide = 0;
const heroSection = document.getElementById('heroSlider');
let heroInterval;

function changeHeroSlide(index) {
  currentSlide = index;
  heroSection.style.backgroundImage = 'url("' + heroImages[index] + '")';
  heroSection.style.backgroundSize = 'cover';
  heroSection.style.backgroundPosition = 'center';
  heroSection.style.transition = 'background-image 0.4s ease-in-out';
}

function nextHeroSlide() {
  let next = currentSlide + 1;
  if (next >= heroImages.length) {
    next = 0;
  }
  changeHeroSlide(next);
}

function startHeroSlider() {
  heroInterval = setInterval(nextHeroSlide, 3000);
}

function stopHeroSlider() {
  clearInterval(heroInterval);
}

const grantImages = [
  [
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&w=300&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&w=300&q=80'
  ]
];

let grantSlideIndex = 0;
const grantImage1 = document.getElementById('grantImage1');
const grantImage2 = document.getElementById('grantImage2');
let grantInterval;

function changeGrantSlide(index) {
  grantSlideIndex = index;
  grantImage1.style.opacity = '0';
  grantImage2.style.opacity = '0';
  
  setTimeout(() => {
    grantImage1.src = grantImages[index][0];
    grantImage2.src = grantImages[index][1];
    grantImage1.style.opacity = '1';
    grantImage2.style.opacity = '1';
  }, 250);
}

function nextGrantSlide() {
  let next = grantSlideIndex + 1;
  if (next >= grantImages.length) {
    next = 0;
  }
  changeGrantSlide(next);
}

function startGrantSlider() {
  grantInterval = setInterval(nextGrantSlide, 3000);
}

function stopGrantSlider() {
  clearInterval(grantInterval);
}

function initScrollAnimations() {
  const animateElements = document.querySelectorAll('.scroll-animate');
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animateElements.forEach(element => {
    observer.observe(element);
  });
}

function updateFooterYear() {
  const yearElements = document.querySelectorAll('.footer-year');
  yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

function showTab(tab) {
  const pastEvents = document.querySelector('.past-events');
  const upcomingEvents = document.querySelector('.upcoming-events');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  if (tab === 'past') {
    if (pastEvents) pastEvents.classList.add('active');
    if (upcomingEvents) upcomingEvents.classList.remove('active');
    if (buttons[0]) buttons[0].classList.add('active');
  } else {
    if (upcomingEvents) upcomingEvents.classList.add('active');
    if (pastEvents) pastEvents.classList.remove('active');
    if (buttons[1]) buttons[1].classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (heroSection) {
    changeHeroSlide(0);
    startHeroSlider();
    heroSection.addEventListener('mouseenter', stopHeroSlider);
    heroSection.addEventListener('mouseleave', startHeroSlider);
  }

  if (grantImage1 && grantImage2) {
    grantImage1.style.transition = 'opacity 0.4s ease-in-out';
    grantImage2.style.transition = 'opacity 0.4s ease-in-out';
    changeGrantSlide(0);
    startGrantSlider();

    const grantSlider = document.getElementById('grantSlider');
    if (grantSlider) {
      grantSlider.addEventListener('mouseenter', stopGrantSlider);
      grantSlider.addEventListener('mouseleave', startGrantSlider);
    }
  }

  initScrollAnimations();
  updateFooterYear();
});