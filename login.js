document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Save username and password in localStorage (make sure to store sensitive data securely)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to the main page after successful login
    window.location.href = "index.html"; // or wherever you want to redirect after login
});

window.onload = function() {
    // Retrieve username and password from localStorage (if they exist)
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Optionally auto-fill the form with saved credentials (for convenience)
    if (storedUsername && storedPassword) {
        document.getElementById("username").value = storedUsername;
        document.getElementById("password").value = storedPassword;
    }
};
