console.log("Hello World!")

const emailInput = document.getElementById("phone");
emailInput.addEventListener("input", function (event) {
    this.value = this.value.replace(/\D/g, "");
});

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        errorMessage.style.display = "block";
    } else {
        confirmPassword.setCustomValidity("");
        errorMessage.style.display = "none";
    }
}

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);