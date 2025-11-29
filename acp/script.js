let intervalId;
let isRunning = false;
let clickcount = 0;

const numberDisplay = document.getElementById("numberDisplay");
const toggleButton = document.getElementById("toogleButton");

function genarateRandomNumber(){
    return Math.floor(Math.random() * 1000) + 1;
}

function updateNumber(){
    numberDisplay.textContent = genarateRandomNumber();
}

toggleButton.addEventListener("click", ()=>{
    clickcount++
    if (clickcount % 2 === 0){
        intervalId = setInterval(updateNumber, 1000);
        isRunning = true
    }
    if (clickcount % 2 === 1){{
        clearInterval(intervalId)
        isRunning = false
    }}
});