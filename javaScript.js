// get the display input element
const display = document.getElementById("display");

// fuction to display
function appendToDisplay(input) {
  display.value += input;
}

// calculate
function calculate() {
  display.value = eval(display.value);
}

// Clear the entire dispaly, resulting to an empty string
function allClearDisplay() {
  display.value = "";
}

// delete the last character from the display
function deleteDisplay() {
  display.value = display.value.slice(0, -1);
}
/**
 * Clears the display (acts like a simple clear function).
 */
function clearDisplay() {
  display.value = "";
}
