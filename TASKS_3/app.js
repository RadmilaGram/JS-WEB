const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const inputCounter = document.getElementById("counter");

function updateButtons() {
  const val = parseInt(inputCounter.value, 10);
  decreaseButton.disabled = val <= 0;
  increaseButton.disabled = val >= 9;
}

decreaseButton.onclick = () => {
  let currentValue = parseInt(inputCounter.value, 10);
  if (currentValue > 0) {
    inputCounter.value = currentValue - 1;
    updateButtons();
  }
};

increaseButton.onclick = () => {
  let currentValue = parseInt(inputCounter.value, 10);
  if (currentValue < 9) {
    inputCounter.value = currentValue + 1;
    updateButtons();
  }
};

updateButtons();
