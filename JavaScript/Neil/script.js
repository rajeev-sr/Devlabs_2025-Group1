let clickCount = 0
let time = 0


document.getElementById("countAdd").addEventListener("click", function() {
    clickCount++
    document.getElementById("clickCount").textContent = clickCount
})
document.getElementById("countSub").addEventListener("click", function() {
    if(clickCount>0)
        clickCount--
    document.getElementById("clickCount").textContent = clickCount
})
document.getElementById("countReset").addEventListener("click", function() {
    clickCount = 0
    document.getElementById("clickCount").textContent = clickCount
})

let timer = null;

const startBtn = document.getElementById("timeStart")
const stopBtn = document.getElementById("timeStop")

document.getElementById("timeStart").addEventListener("click", function() {
    if (!timer) {
        startBtn.classList.add("disabled", "grey")
        startBtn.classList.remove("green")
        stopBtn.classList.remove("disabled", "grey")
        stopBtn.classList.add("red")
        timer = setInterval(function() {
            time++
            document.getElementById("time").textContent = time
        }, 1000)
    }
})
document.getElementById("timeStop").addEventListener("click", function() {
    stopBtn.classList.add("disabled", "grey")
    stopBtn.classList.remove("red")
    startBtn.classList.remove("disabled", "grey")
    startBtn.classList.add("green")
    clearInterval(timer)
    document.getElementById("time").textContent = time
    timer = null
document.getElementById("timeReset").addEventListener("click", function() {
    stopBtn.classList.add("disabled", "grey")
    stopBtn.classList.remove("red")
    startBtn.classList.remove("disabled", "grey")
    startBtn.classList.add("green")
    clearInterval(timer)
    time = 0
    document.getElementById("time").textContent = time
    timer = null
})
})