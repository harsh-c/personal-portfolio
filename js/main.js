// Show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Active Menu

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  // Remove menu
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Scroll Home
sr.reveal(".home__title", { reset: false });
sr.reveal(".button", { delay: 200, reset: false });
sr.reveal(".home__img", { delay: 400, reset: false });
sr.reveal(".home__social-icon", { interval: 200, reset: false });

// Scroll About
// sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200, reset: false });
sr.reveal(".about__text", { delay: 400, reset: false });

// Scroll  Skills
sr.reveal(".skills__subtitle", { reset: false });
sr.reveal(".skills__text", { delay: 200, reset: false });
sr.reveal(".skills__data", { interval: 200, reset: false });
sr.reveal(".skills__img", { interval: 400, reset: false });

// Scroll Work
// sr.reveal(".work__img", { interval: 200 });

// Scroll contact
sr.reveal(".contact__input", { interval: 200, reset: false });
