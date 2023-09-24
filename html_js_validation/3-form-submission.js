// form-validation.js

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the values entered in the form fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  
  // Get the values from the input fields
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  // Check if the name and email fields are filled
  if (nameValue === "" || emailValue === "") {
    // Display an error message
    displayErrorMessage("Please fill in all required fields");
  } else {
    // Display a success message
    displaySuccessMessage("Form submitted successfully!");
    // Optionally, you can submit the form programmatically here
    // For example: event.target.submit();
  }
}

// Function to display an error message
function displayErrorMessage(message) {
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;

  // Append the error message to the form
  const form = document.getElementById("submitForm");
  form.appendChild(errorMessage);
}

// Function to display a success message
function displaySuccessMessage(message) {
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.textContent = message;

  // Append the success message to the form
  const form = document.getElementById("submitForm");
  form.appendChild(successMessage);
}

// Add an event listener to the form to handle submission
const form = document.getElementById("submitForm");
form.addEventListener("submit", handleFormSubmit);
