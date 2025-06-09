let count = 0;

const countDisplay = document.getElementById("count");

function updateDisplay() {
    countDisplay.textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}

document.body.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        e.preventDefault();
        increment();
    }
});
