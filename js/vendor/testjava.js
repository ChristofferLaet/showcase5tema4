// Set target date
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 4); // Countdown for 4 days

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    // Stop countdown when time is up
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>Time's up!</h2>";
    }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();