const clock = document.getElementById("clock");
const startStop = document.getElementById("start-stop");
const clearRound = document.getElementById("clear-round");
const start = document.querySelector(".start")
const stopc = document.querySelector(".stop")
const clear = document.querySelector(".clear")
const round = document.querySelector(".round")

let stateBtn1 = false
let stateBtn2 = false

start.innerHTML = "start";


let count = {
    ms: 0,
    sec: 0,
    min: 0,
}

let goClock = () => {

    stopc.innerHTML = "stop";


    let intervalID = setInterval(() => {
        if (stateBtn1 === false) {
            clearInterval(intervalID)
            start.innerHTML = "start";
        }

        clock.innerHTML = `${count.min.toString().padStart(2, '0')}:${count.sec.toString().padStart(2, '0')}:${count.ms.toString().padStart(2, '0')}`

        count.ms++
        console.log(count);
        if (count.ms === 100) {
            count.ms = 0;
            count.sec++
            if (count.sec === 60) {
                count.sec = 0;
                count.min++
            }

        }



    }, 10);




}



function btn1() {
    if (stateBtn1 === false) {
        stateBtn1 = true
        goClock()
    } else {
        stateBtn1 = false
    }
    console.log(stateBtn1);
}



let clearedCounter = () => clock.innerHTML = "00:00:00"
window.addEventListener("load", clearedCounter);
startStop.addEventListener("click", btn1)



