const targetDate = new Date("July 1, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").textContent = "Time's up!";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes and " +
    seconds +
    " seconds";
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
