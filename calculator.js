let display = document.getElementById("display");

function displayValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}