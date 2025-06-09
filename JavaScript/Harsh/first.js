let clickCount = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    clickCount++;
    document.getElementById("clickCount").textContent = clickCount;
});

let timer;
let seconds = 0;

document.getElementById("startTimer").addEventListener("click", function() {
    if (!timer) {
        timer = setInterval(function() {
            seconds++;
            document.getElementById("timer").textContent = seconds;
        }, 1000);
    }
});

document.getElementById("stopTimer").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});

document.getElementById("resetButton").addEventListener("click", function() {
    clickCount = 0;
    seconds = 0;
    document.getElementById("clickCount").textContent = clickCount;
    document.getElementById("timer").textContent = seconds;
    clearInterval(timer);
    timer = null;
});

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme when the page refreshes
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

setTimeout(() => {
    document.querySelector("h1").textContent = "Your Personal Click Counter!";
}, 3000);

document.getElementById("decreaseButton").addEventListener("click", function() {
    if (clickCount > 0) {  // Ensure count doesn’t go negative
        clickCount--;
        document.getElementById("clickCount").textContent = clickCount;
    }
});