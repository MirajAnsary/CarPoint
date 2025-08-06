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

// input field
// input field
// function formatDate() {
//   const input = document.getElementById("inputField");
//   const date = new Date(input.value);
//   if (isNaN(date)) return;

//   const days = String(date.getDate()).padStart(2, "0");
//   const months = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
//   const year = String(date.getFullYear()).slice(2);
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const weekday = date.toLocaleString("en-US", { weekday: "short" });

//   // Proper backticks for template-literal
//   const finalFormat = `${days} ${months}'${year},${hours}:${minutes} ${weekday}`;
//   document.getElementById("formattedText").textContent = finalFormat;
// }

// document.getElementById("submitBtn").addEventListener("click", formatDate);

function formatDate(input) {
  const value = input.value;
  if (!value) return;

  const date = new Date(value);
  if (isNaN(date)) return;

  const days = String(date.getDate()).padStart(2, "0");
  const months = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = String(date.getFullYear()).slice(2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const weekday = date
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();

  const finalFormat = `${days} ${months}'${year}, ${hours}:${minutes} ${weekday}`;
  document.getElementById("formattedText").textContent = finalFormat;
}

//
