let time = 10;
let timer;
let menssageTimer = document.getElementById('menssageTimer');

function startTimer() {
    timer = setInterval(timerCountdown, 1000);
}

function timerCountdown () {
    if(time == 0) {
        clearInterval(timer);
        menssageTimer.innerText = 'Seu tempo acabou!! Tente novamente!!';
        console.log("Acabou");
    } else {
        time--
        menssageTimer.innerText = `${time}`;
        console.log(time);
    }
}

function resetTimer() {
    time = 10;
    startTimer();
}