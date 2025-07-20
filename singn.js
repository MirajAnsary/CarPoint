// Password Toggle Functionality
function setupPasswordToggle(toggleId, inputId, iconId) {
  document.getElementById(toggleId).addEventListener("click", function () {
    const passwordInput = document.getElementById(inputId);
    const passwordIcon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.className = "bi bi-eye-slash";
    } else {
      passwordInput.type = "password";
      passwordIcon.className = "bi bi-eye";
    }
  });
}

// Setup password toggles
setupPasswordToggle("passwordToggle", "password", "passwordIcon");
setupPasswordToggle(
  "confirmPasswordToggle",
  "confirmPassword",
  "confirmPasswordIcon"
);

// File Upload Display
document
  .getElementById("licenseUpload")
  .addEventListener("change", function () {
    const file = this.files[0];
    const uploadDisplay = document.getElementById("uploadDisplay");

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert("File size must be less than 5MB");
        this.value = "";
        uploadDisplay.value = "Maximum Size 5MB";
        return;
      }
      uploadDisplay.value = file.name;
    } else {
      uploadDisplay.value = "Maximum Size 5MB";
    }
  });

// Form Validation
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.classList.add("is-invalid");
  error.style.display = "block";
  error.textContent = message;
}

function hideError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.classList.remove("is-invalid");
  error.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form Submission Handler
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Validate First Name
  const firstName = document.getElementById("firstName").value.trim();
  if (!firstName) {
    showError("firstName", "firstNameError", "First name is required");
    isValid = false;
  } else {
    hideError("firstName", "firstNameError");
  }

  // Validate Last Name
  const lastName = document.getElementById("lastName").value.trim();
  if (!lastName) {
    showError("lastName", "lastNameError", "Last name is required");
    isValid = false;
  } else {
    hideError("lastName", "lastNameError");
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  if (!email || !validateEmail(email)) {
    showError("email", "emailError", "Please enter a valid email address");
    isValid = false;
  } else {
    hideError("email", "emailError");
  }

  // Validate Address
  const address = document.getElementById("address").value.trim();
  if (!address) {
    showError("address", "addressError", "Address is required");
    isValid = false;
  } else {
    hideError("address", "addressError");
  }

  // Validate License Number
  const licenseNumber = document.getElementById("licenseNumber").value.trim();
  if (!licenseNumber) {
    showError(
      "licenseNumber",
      "licenseNumberError",
      "Driving license number is required"
    );
    isValid = false;
  } else {
    hideError("licenseNumber", "licenseNumberError");
  }

  // Validate File Upload
  const fileUpload = document.getElementById("licenseUpload");
  if (!fileUpload.files.length) {
    showError(
      "uploadDisplay",
      "uploadError",
      "Please upload your driving license"
    );
    isValid = false;
  } else {
    hideError("uploadDisplay", "uploadError");
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    showError(
      "password",
      "passwordError",
      "Password must be at least 6 characters"
    );
    isValid = false;
  } else {
    hideError("password", "passwordError");
  }

  // Validate Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    showError(
      "confirmPassword",
      "confirmPasswordError",
      "Passwords do not match"
    );
    isValid = false;
  } else {
    hideError("confirmPassword", "confirmPasswordError");
  }

  // Validate Terms
  const acceptTerms = document.getElementById("acceptTerms").checked;
  if (!acceptTerms) {
    showError(
      "acceptTerms",
      "termsError",
      "You must accept the terms and conditions"
    );
    isValid = false;
  } else {
    hideError("acceptTerms", "termsError");
  }

  if (isValid) {
    // Simulate sign up process
    const signupBtn = document.querySelector(".signup-btn");
    signupBtn.innerHTML =
      '<i class="bi bi-arrow-clockwise spin"></i> Creating Account...';
    signupBtn.disabled = true;

    setTimeout(() => {
      alert(
        "Account created successfully!\n" +
          "Name: " +
          firstName +
          " " +
          lastName +
          "\n" +
          "Email: " +
          email
      );
      signupBtn.innerHTML = "Sign Up";
      signupBtn.disabled = false;
    }, 2000);
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
