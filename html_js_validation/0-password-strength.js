// Function to validate the password
function validatePassword() {
  const passwordInput = document.getElementById("password");
  const errorParagraph = document.getElementById("error");

  const password = passwordInput.value;

  // Regular expressions to check the criteria
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Check each criterion
  if (
    !lengthRegex.test(password) ||
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharRegex.test(password)
  ) {
    // Password does not meet all criteria
    errorParagraph.textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
    errorParagraph.style.display = "block";
    event.preventDefault(); // Prevent form submission
  } else {
    // Password meets all criteria
    errorParagraph.style.display = "none";
  }
}

// Attach the event listener to the form
const passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", validatePassword);
