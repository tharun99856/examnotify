console.log("✅ JavaScript is loaded!");
// Show/Hide password functionality
document.getElementById("show-password").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    if (this.checked) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the form values
    const name = document.getElementById("name").value;
    const state = document.getElementById("state").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Store the user information in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("state", state);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful! Please login again.");

    // Redirect to the login page after successful signup
    window.location.href = "login.html";  // Redirect to login page
});
