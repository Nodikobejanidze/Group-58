const p = document.getElementById("counter")
const btn = document.getElementById("button")

let count = 0;

function decrement() {
    count--;
    p.textContent = count;
}

button.onclick = decrement;
