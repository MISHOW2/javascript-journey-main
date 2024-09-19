document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let email = document.getElementById('email').value;
  let feedback = document.getElementById('feedback');

  // Simulate async form validation using Promises
  validateForm(name, age, email)
    .then((message) => {
      feedback.style.color = "green";
      feedback.textContent = message; // Success feedback
    })
    .catch((error) => {
      feedback.style.color = "red";
      feedback.textContent = error; // Error feedback
    });
});

// Function to validate form using Promises
function validateForm(name, age, email) {
  return new Promise((resolve, reject) => {
    // Simulate delay for async validation (e.g., checking against a database)
    setTimeout(() => {
      if (name !== "" && age > 0 && validateEmail(email)) {
        resolve(`Success! Name: ${name}, Age: ${age}, Email: ${email} is valid.`);
      } else {
        reject('Error: Invalid input. Please check the fields again.');
      }
    }, 2000); // Simulate 2-second delay
  });
}

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
