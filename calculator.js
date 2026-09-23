let display = document.getElementById('display');
let buttons = document.querySelectorAll('#keys button');

function displaytext(value) {
    display.value += value;
    console.log('Value:', value);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        console.error('Calculation error:', error);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            displaytext(value);
        }
    });
});
    