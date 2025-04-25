// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only apply to internal links
      if (this.getAttribute("href").startsWith("/")) {
        // Add a slight delay before navigation for a smoother experience
        e.preventDefault();
        const href = this.getAttribute("href");

        setTimeout(() => {
          window.location.href = href;
        }, 200);
      }
    });
  });

  // Add active class to current nav link
  const currentPath = window.location.pathname;
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Add scroll animations to elements with .animate-on-scroll class
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
});

// Form validation helper
if (document.getElementById("contactForm")) {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const inputs = document.querySelectorAll(
    "#contactForm input, #contactForm textarea"
  );
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        this.classList.add("error");
      } else if (this.type === "email" && !validateEmail(this.value)) {
        this.classList.add("error");
      } else {
        this.classList.remove("error");
      }
    });

    input.addEventListener("focus", function () {
      this.classList.remove("error");
    });
  });
}
