class Cronometro {
    minutos;
    segundos;
    ticker;

    constructor(minutos, segundos) {
        this.minutos = minutos;
        this.segundos = segundos;
        setTime(minutos, segundos);
        this.countDown();
    }

    //cuenta regresiva del cronometro
    countDown() {
        let minutos = this.minutos;
        let segundos = this.segundos;

        this.ticker = setInterval(function () {
            if (!endedGame) {
                if (minutos == 0 && segundos == 0) {
                    timeOut(this.ticker, "Se terminó el tiempo.");
                } else {
                    if (segundos != 0) {
                        segundos--;
                    } else {
                        minutos--;
                        segundos = 59;
                    }
                }
                setTime(minutos, segundos);
            } else stopTimer(this.ticker);
        }, 1000);
    }
}

//detiene el cronometro
function stopTimer(ticker) {
    clearInterval(ticker);
    fichaSelected = null;
}

//se termino el tiempo
function timeOut(ticker, reason) {
    clearInterval(ticker);
    fichaSelected = null;
    endedGame = true;
    endGame(reason);
}