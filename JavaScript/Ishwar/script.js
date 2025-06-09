
let count = 0;
function increase() {
  count++;
  document.getElementById('count').innerText = count;
}
function decrease() {
  count--;
  document.getElementById('count').innerText = count;
}
function resetCounter() {
  count = 0;
  document.getElementById('count').innerText = count;
}


let time = 0;
let timer = null;

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      time++;
      document.getElementById('time').innerText = time;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  document.getElementById('time').innerText = time;
}
