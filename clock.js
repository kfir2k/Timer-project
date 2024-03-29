const clock = document.getElementById("clock");
const startStop = document.getElementById("start-stop");
const clearRound = document.getElementById("clear-round");
const start = document.querySelector(".start");
const stopc = document.querySelector(".stop");
const clear = document.querySelector(".clear");
const round = document.querySelector(".round");
const roundList = document.getElementById("rounds");
const roundContainder = document.getElementById("roundcontainer")

let stateBtn1 = false;
let stateBtn2 = false;

start.innerHTML = "Start";
clear.innerHTML = "Clear";

let count = {
    ms: 0,
    sec: 0,
    min: 0,
}

let goClock = () => {

    stopc.innerHTML = "Stop";

    let intervalID = setInterval(() => {
        if (stateBtn1 === false) {
            clearInterval(intervalID)
            start.innerHTML = "Start";
        }
        clock.innerHTML = `${count.min.toString().padStart(2, '0')}:${count.sec.toString().padStart(2, '0')}:${count.ms.toString().padStart(2, '0')}`
        count.ms++;
        
        if (count.ms === 100) {
            count.ms = 0;
            count.sec++;
            if (count.sec === 60) {
                count.sec = 0;
                count.min++;
            }
        }
    }, 10);
}


let indexOfRound = 0
let printRound = () => {
    indexOfRound++;
    roundList.innerHTML += `<div/>${indexOfRound}) ${count.min.toString().padStart(2, '0')}:${count.sec.toString().padStart(2, '0')}:${count.ms.toString().padStart(2, '0')}<div>`
}
function btn1() {
    
    if (stateBtn1 === false) {
        stateBtn1 = true;
        stateBtn2 = true;
        round.innerHTML = "Round";
        goClock()
    } else {
        stateBtn1 = false;
        stateBtn2 = false;
        clear.innerHTML = "Clear";
    }
}

function btn2() {
    
    if (stateBtn2 === false && stateBtn1 === false) {
        clearedCounter()
    } else {
        round.innerHTML = "Round";
        printRound()
        updateScroll()
    }
}

let clearedCounter = () => {
    clock.innerHTML = "00:00:00";
    count.ms = 0;
    count.min = 0;
    count.sec = 0;
    roundList.innerHTML = "";
    indexOfRound = 0;
}


function updateScroll() {

    window.scrollTo(0, document.body.scrollHeight);
}


window.addEventListener("load", clearedCounter);
startStop.addEventListener("click", btn1);
clearRound.addEventListener("click", btn2);



