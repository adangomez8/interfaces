class Cronometro {
    minutos;
    segundos;
    ticker;

    constructor(minutos, segundos) {
        this.minutos = minutos;
        this.segundos = segundos;
        setTime(minutos, segundos);
        this.calcularTiempo();
    }

    //cuenta regresiva del cronometro
    calcularTiempo() {
        let minutos = this.minutos;
        let segundos = this.segundos;

        this.ticker = setInterval(function () {
            if (!endedGame) {
                if (minutos == 0 && segundos == 0) {
                    timeOut(this.ticker, "Se terminó el tiempo. Tu puntaje fue: " + puntos);
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

    //detiene el cronometro
    stopTimer(ticker) {
        clearInterval(ticker);
    }

    //se termino el tiempo
    timeOut(ticker, reason) {
        clearInterval(ticker);
        this.cronometro.innerHTML = 'Fin del juego';
        t.setAttribute("class", "oculto");
    }
}