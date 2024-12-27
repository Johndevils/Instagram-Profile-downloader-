// Function to validate email
function validateEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const resultMessage = document.getElementById("resultMessage");

    // Regex to check valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate and display result
    if (emailRegex.test(email)) {
        resultMessage.textContent = "Valid Email Address!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Invalid Email Address.";
        resultMessage.style.color = "red";
    }
}
