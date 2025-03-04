document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let isValid = true;
  
      const name = document.getElementById("user_name");
      const email = document.getElementById("user_email");
      const password = document.getElementById("user_password");
      const confirmPassword = document.getElementById("user_confirm_password");
      const agree = document.getElementById("agree");
  
      clearErrors();
  
      if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
      }
  
      if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "Enter a valid email address");
        isValid = false;
      }
  
      if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters");
        isValid = false;
      }
  
      if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
      }
  
      if (!agree.checked) {
        showError(agree, "You must agree to the privacy policy");
        isValid = false;
      }
  
      if (isValid) {
        alert("Registration Successful!");
        form.reset();
      }
    });
  
    function showError(input, message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.innerText = message;
      input.parentElement.appendChild(errorDiv);
      input.classList.add("input-error"); // Add error styling via CSS
    }
  
    function clearErrors() {
      document.querySelectorAll(".error-message").forEach((el) => el.remove());
      document.querySelectorAll(".input-error").forEach((el) => {
        el.classList.remove("input-error"); // Remove error styling via CSS
      });
    }
  });
  