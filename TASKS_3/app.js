const decreaseButton = document.getElementsById;
const increaseButton = document.getElementById;
const inputCounter = document.getElementById;

function updateButton() {
  const val = parseInt(inputCounter.value, 10);
  decreaseButton.disabled = val <= 0;
  increaseButton.disabled = val >= 9;
}
