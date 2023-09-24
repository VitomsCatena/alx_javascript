 // Function to generate dynamic input fields
    function generateInputFields(numFields) {
      const inputContainer = document.getElementById("inputContainer");
      inputContainer.innerHTML = ""; // Clear previous fields

      for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
      }
    }

    // Function to validate the form
    function validateForm(event) {
      const numFields = document.getElementById("numFields").value;
      const inputFields = document.querySelectorAll("#inputContainer input");

      for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
          alert("Please fill in all fields");
          event.preventDefault(); // Prevent form submission
          return;
        }
      }
    }

    // Add event listeners
    document.getElementById("numFields").addEventListener("change", function () {
      const numFields = this.value;
      generateInputFields(numFields);
    });

    document.getElementById("dynamicForm").addEventListener("submit", validateForm);

    // Initialize with one input field
    generateInputFields(1);
