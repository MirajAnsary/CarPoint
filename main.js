document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");
  const body = document.body;
  const html = document.documentElement;

  let isOpen = false;

  toggler.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      navbar.classList.add("show");
      openIcon.classList.add("d-none");
      closeIcon.classList.remove("d-none");

      // Lock scroll
      body.classList.add("no-scroll");
      html.classList.add("no-scroll");
    } else {
      navbar.classList.remove("show");
      openIcon.classList.remove("d-none");
      closeIcon.classList.add("d-none");

      // Unlock scroll
      body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    }
  });

  // Optional: Close when clicking nav-link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) {
        navbar.classList.remove("show");
        openIcon.classList.remove("d-none");
        closeIcon.classList.add("d-none");
        body.classList.remove("no-scroll");
        html.classList.remove("no-scroll");
        isOpen = false;
      }
    });
  });
});
