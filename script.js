document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        let isValid = true;
        let messages = [];
        if (username.length < 3) {
            isValid = false;
            messages.push("Your username is less than 3 characters!");
        }
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Your email does not contain (@) or (.)!");
        }
        if (password.length < 8) {
            isValid = false;
            messages.push("Your password is short!");
        }
        feedbackDiv.style.display = "block";
        if (isValid == true) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } if (isValid == false) {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});