const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const numItems = carouselItems.length;
  const itemWidth = carouselItems[0].offsetWidth + 20; // Width of item + margin-right
  let currentIndex = 0;

  // Clone items for infinite loop
  const clones = [];
  for (let i = 0; i < numItems; i++) {
      const clone = carouselItems[i].cloneNode(true);
      clones.push(clone);
  }

  clones.forEach(clone => carousel.appendChild(clone));

  function goToSlide(index) {
      carousel.style.transform = `translateX(${-itemWidth * index}px)`;
      currentIndex = index;
  }

  function handleTransitionEnd() {
      if (currentIndex >= numItems) {
          currentIndex = 0;
          carousel.style.transition = 'none';
          goToSlide(currentIndex);
      }
  }

  carousel.addEventListener('transitionend', handleTransitionEnd);

  setInterval(() => {
      currentIndex++;
      carousel.style.transition = 'transform 0.5s ease';
      goToSlide(currentIndex);
  }, 1000); // Change 2000 to adjust carousel speed
});
