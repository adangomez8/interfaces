"use strict";

let salta = false;
let camina = false;
let morir = false;

let puntos = 0;
let cronometro = null;
let interval;
const MiliSegundos = 1000;

let jugando = false;
let fin = false;

let mario = document.querySelector("#mario");
let tuberia = document.querySelector("#tuberia");
let moneda = document.querySelector("#moneda");

let fondo = document.getElementById("fondo");
let planta = document.getElementById("planta");
let piso = document.getElementById("piso");

let puntaje = document.getElementById("puntos");
let time = document.getElementById("tiempo");
let t = document.getElementById("cartel2");
let exp = document.querySelector("#explicacion");

let btn1 = document.querySelector(".reiniciar");
btn1.addEventListener("click", reiniciar);
let btn2 = document.querySelector(".iniciar");
btn2.addEventListener("click", iniciar);

/*reinicia el juego*/
function reiniciar() {
  window.location.reload();
}

/*inicia el juego*/
function iniciarJuego() {
  jugando = true;
  if (jugando) {
    reacomodarClases();
    setInterval(detectarChoque, 500);
  }
  tiempoDeJuego();
}

/*acomoda los elementos necesarios para poder empezaar a jugar*/
function reacomodarClases() {
  btn1.classList.remove("iniciar");
  btn1.classList.add("ocultar");
  mario.classList.remove("ocultar");
  moneda.classList.remove("ocultar");
  tuberia.classList.remove("ocultar");
  mario.classList.add("camina");
  moneda.classList.add("moneda");
  tuberia.classList.add("tuberia");
  explicacion.classList.add("ocultar");
}

/*detecta si mario choco contra un obstaculo*/
function detectarChoque() { }

/*mario salta al presionar la flecha arriba*/
document.addEventListener("keydown", event => {
  if (event.code == "ArrowUp") {
    saltar = true;
    saltar(salta)
  }
});

function saltar(salta) {
  if (salta) {
    mario.setAttribute("class", "salta");
  }
  else
    mario.setAttribute("class", "camina");
}
mario.addEventListener("animationend", function () { saltar(false) })

/*
function caminarParaAtras(camina){
    if(camina){
    mario.setAttribute("class","caminaParaAtras");
    }
}*/

/*muestra lo que queda tiempo para terminar el juego*/
function tiempoDeJuego() {
  if (interval != null) {
    clearInterval(interval);
  }
  cronometro = new Tiempo(10, t);
  if (fin == false) {
    interval = setInterval(function () {
      cronometro.calcularTiempo();
      if (cronometro.calcularTiempo() < 60 && cronometro.calcularTiempo() > 0) {
        t.setAttribute("class", "tiempoRojo");
      }
    }, MiliSegundos);
  }
}

/*fin del juego*/
function finJuego() {
  jugando = false;
  fin = true;
  pausarAnimaciones();
  clearInterval(interval);
  cronometro.detenerTiempo();
  btn2.classList.remove("ocultar");
  btn2.classList.add("desocultar");
}

/*pausa las animaciones al terminar el juego*/
function pausarAnimaciones() {

  mario.style.animationPlayState = "paused";
  tuberia.style.animationPlayState = "paused";
  fondo.style.animationPlayState = "paused";
  planta.style.animationPlayState = "paused";
  piso.style.animationPlayState = "paused";
  moneda.style.animationPlayState = "paused";

}

/*va sumando los puntos*/
function sumarPuntos() {
  puntos++;
  puntaje.innerHTML = puntos;
}

