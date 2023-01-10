let countElement = document.getElementById("count");
let count = 0;

function increment(){
    count += 1;
    countElement.textContent = count;
}

function decrement(){
    count -=1;
    countElement.textContent = count;
}

// countElement.textContent = 5