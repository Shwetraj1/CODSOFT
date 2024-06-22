let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
  }
}