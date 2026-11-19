
const password = document.getElementById("pass");
const toggle = document.getElementById("toggle");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const specialRule = document.getElementById("special");

const bars = document.querySelectorAll(".bar");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }
});


password.addEventListener("input", function () {

    let value = password.value;

    let checks = [
        value.length >= 8,
        /[A-Z]/.test(value),
        /[0-9]/.test(value),
        /[^A-Za-z0-9]/.test(value)
    ];

    let rules = [
        lengthRule,
        upperRule,
        numberRule,
        specialRule
    ];

    let strength = 0;

    // Update requirements
    rules.forEach(function (rule, index) {

        rule.classList.toggle("valid", checks[index]);

        const check = rule.querySelector(".check");

        check.textContent = checks[index] ? "✓" : "";

        if (checks[index]) {
            strength++;
        }
    });

    // Update strength bars
    bars.forEach(function (bar, index) {

        bar.classList.remove("active", "weak", "medium", "strong");

        if (index < strength) {

            bar.classList.add("active");

            if (strength <= 1) {
                bar.classList.add("weak");
            }
            else if (strength <= 3) {
                bar.classList.add("medium");
            }
            else {
                bar.classList.add("strong");
            }
        }
    });

});
