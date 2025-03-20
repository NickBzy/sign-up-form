console.log("Hello World!")

const emailInput = document.getElementById("phone");
emailInput.addEventListener("input", function (event) {
    this.value = this.value.replace(/\D/g, "");
});