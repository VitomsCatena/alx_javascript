// validation.js

// Function to validate the email format
function validateEmail() {
  // Retrieve the value entered in the email input field
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  // Regular expression to check for a valid email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the email format is valid
  if (emailRegex.test(emailValue)) {
    // Allow form submission
    return true;
  } else {
    // Display error message
    const errorElement = document.getElementById("error");
    errorElement.textContent = "Please enter a valid email address.";
    errorElement.style.color = "red";

    // Prevent form submission
    return false;
  }
}

// Add an event listener to the form to trigger validation on submission
document.getElementById("emailForm").addEventListener("submit", function (event) {
  // Call the validateEmail function
  if (!validateEmail()) {
    // Prevent default form submission behavior
    event.preventDefault();
  }
});
