const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
var displayValue = "";

numbers.forEach((number) => {
    number.addEventListener("mousedown", (element) => {
        element.target.style.opacity = "0.6";
    });
    number.addEventListener("mouseup", (element) => {
        element.target.style.opacity = "1";
        if (
            displayValue.length <= 10 &&
            element.target.value == "." &&
            displayValue.includes(".")
        ) {
            display.textContent = displayValue;
        } else if (displayValue.length < 10) {
            displayValue += element.target.value;
        }
        display.textContent = displayValue;
    });
});

operators.forEach((operator) => {
    operator.addEventListener("mousedown", (element) => {
        element.target.style.opacity = "0.6";
    });
});

clear.addEventListener("mousedown", (element) => {
    element.target.style.opacity = "0.6";
});

clear.addEventListener("mouseup", (element) => {
    displayValue = "";
    display.textContent = 0;
    element.target.style.opacity = "1";
});

equal.addEventListener("mouseup", (element) => {
    console.log(displayValue);
});

function add(num1, num2) {
    return Math.round((num1 + num2) * 10) / 10;
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 10) / 10;
}

function multiply(num1, num2) {
    return Math.round(num1 * num2 * 10) / 10;
}

function divide(num1, num2) {
    return Math.round((num1 / num2) * 10) / 10;
}
