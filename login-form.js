// Password Toggle Functionality
document
  .getElementById("passwordToggle")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.getElementById("passwordIcon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.className = "bi bi-eye-slash";
    } else {
      passwordInput.type = "password";
      passwordIcon.className = "bi bi-eye";
    }
  });

// Form Submission Handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  if (email && password) {
    // Simulate login process
    const loginBtn = document.querySelector(".login-btn");
    loginBtn.innerHTML =
      '<i class="bi bi-arrow-clockwise spin"></i> Logging in...';
    loginBtn.disabled = true;

    setTimeout(() => {
      alert(
        `Login successful!\nEmail: ${email}\nRemember me: ${
          rememberMe ? "Yes" : "No"
        }`
      );
      loginBtn.innerHTML = "Login";
      loginBtn.disabled = false;
    }, 1500);
  }
});

// Add spin animation for loading
const style = document.createElement("style");
style.textContent = `
            .spin {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
document.head.appendChild(style);
