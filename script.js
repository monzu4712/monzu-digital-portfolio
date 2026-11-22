
// MONZU PORTFOLIO JAVASCRIPT

// MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent = isOpen ? "×" : "☰";

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    });

  });

}


// SCROLL REVEAL ANIMATION
const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {

  revealObserver.observe(element);

});


// ACTIVE NAVIGATION MENU
const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".main-nav a");

const activeObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );

        });

      }

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach(section => {

  activeObserver.observe(section);

});


// AUTOMATIC COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}
