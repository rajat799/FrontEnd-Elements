// script.js
let display = document.getElementById('display');

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value); // Use eval to calculate the expression
  } catch (error) {
    display.value = 'Error';
  }
}