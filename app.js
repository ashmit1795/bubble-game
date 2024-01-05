var timeInterval = 60;
document.querySelector("#timer").innerText = timeInterval;
var score = 0;
var randHit = 0;
let bottomPanel = document.querySelector("#p-bottom");

function makeBubble(){
    let randNum;
    var clutter ="";
    for(var i = 1; i<=70; i++){
        randNum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randNum}</div>`
    }
    bottomPanel.innerHTML = clutter;
}

function scoreIncrementor(){
    score += 10;
    document.querySelector("#score").innerText = score;
}

function genHit(){
    randHit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerText = randHit;
}

function timer(){
    var timerInt = setInterval(()=>{
        timeInterval--;
        if(timeInterval>=0){
            document.querySelector("#timer").innerText = timeInterval;
        }else{
            clearInterval(timerInt);
            document.querySelector("#hit").innerText = `-`;
            bottomPanel.innerHTML = "<h1>Game Over!</h1>"
            // bottomPanel.innerHTML += "<p> Refresh the page again to start the game!</p>"
            bottomPanel.innerHTML += "<button class='btn' type='button' onClick='window.location.reload()'>Play Again</button>"
            
        }
    },1000)
}

function playGame(){
    bottomPanel.addEventListener("click", (evt)=>{
        if(Number(evt.target.innerText) === randHit){
            scoreIncrementor();
            genHit();
            makeBubble();
        }
    })
}

function startGame(){
    var startTimer = 4;
    var startTimerInt = setInterval(()=>{
        startTimer--;
        if(startTimer>=0){
            bottomPanel.innerHTML = `<h1>Your Game is starting in ${startTimer}...</h1>`
        }else{
            clearInterval(startTimerInt);
            makeBubble();
            genHit();
            timer();
            playGame();
            }
    },1000)
}

document.querySelector(".start-btn").addEventListener("click", ()=>{
    startGame();
})

