"use strict";

let salta = false;
let camina = false;

let muere = false;

let puntos = 0;
let puntaje = document.getElementById("puntos");

let mario = document.querySelector("#mario");
//let tuberia = document.querySelector("#tuberia");
let moneda = document.querySelector("#moneda");
let flor = document.querySelector("#flor");
let enemigo = document.querySelector("#enemigo");

let fondo = document.getElementById("fondo");
let planta = document.getElementById("planta");
let piso = document.getElementById("suelo");

let explicacion = document.querySelector("#explicacion");

let btn1 = document.querySelector(".reiniciar");
btn1.addEventListener("click", reiniciar);
let btn2 = document.querySelector(".iniciar");
btn2.addEventListener("click", iniciarJuego);

let elegirPersonaje = document.querySelector(".elegirPersonaje");
let avatar1 = document.querySelector(".avatar1");
avatar1.addEventListener("click", elegirAvatar1);
let avatar2 = document.querySelector(".avatar2");
avatar2.addEventListener("click", elegirAvatar2);

let avatar = null;
let mapa = null;

let mapa1 = document.querySelector(".mapa1");
mapa1.addEventListener("click", elegirMapa1);
let mapa2 = document.querySelector(".mapa2");
mapa2.addEventListener("click", elegirMapa2);

let vidas = 3;
let cantVidas = document.getElementById("cantVidas");

/*permite seleccionar a mario*/
function elegirAvatar1() {
  avatar = "avatar1";
  avatar1.setAttribute("class", "ocultar");
  avatar2.setAttribute("class", "ocultar");
}

/*permite seleccionar a luigi*/
function elegirAvatar2() {
  avatar = "avatar2";
  mario.classList.remove("marioCamina");
  mario.classList.add("luigiCamina");
  avatar1.setAttribute("class", "ocultar");
  avatar2.setAttribute("class", "ocultar");
}

/*permite elegir el mapa de dia*/
function elegirMapa1() {
  mapa = "fondo1";
  fondo.classList.remove("fondo2");
  fondo.classList.add("fondo1");
  mapa1.setAttribute("class", "ocultar");
  mapa2.setAttribute("class", "ocultar");
}

/*permite elegir el mapa de noche*/
function elegirMapa2() {
  mapa = "fondo2";
  fondo.classList.remove("fondo1");
  fondo.classList.add("fondo2");
  mapa1.setAttribute("class", "ocultar");
  mapa2.setAttribute("class", "ocultar");
}

/*reinicia el juego*/
function reiniciar() {
  window.location.reload();
}

/*inicia el juego*/
function iniciarJuego() {
 if (avatar != null && mapa != null) {
    elegirPersonaje.setAttribute("class", "ocultar");
    explicacion.classList.add("ocultar");
    setInterval(chocaEnemigo, 500);
    setInterval(chocaFlor, 500);
    setInterval(agarrarMoneda, 500);
    reacomodarClases();
  }
}

/*acomoda los elementos necesarios para poder empezaar a jugar*/
function reacomodarClases() {
  btn2.classList.remove("iniciar");
  btn2.classList.add("ocultar");
  mario.classList.remove("ocultar");
  moneda.classList.remove("ocultar");
  //tuberia.classList.remove("ocultar");
  flor.classList.remove("ocultar");
  enemigo.classList.remove("ocultar");

  if (avatar == "avatar1") {
    mario.classList.add("marioCamina");
  }
  else {
    mario.classList.add("luigiCamina");
  }

  moneda.classList.add("moneda");
  //tuberia.classList.add("tuberia");
  flor.classList.add("flor");
  enemigo.classList.add("enemigo");
  explicacion.classList.add("ocultar");
}

/*pausa las animaciones al terminar el juego*/
function pausarAnimaciones() {

  mario.style.animationPlayState = "paused";
  //tuberia.style.animationPlayState = "paused";
  fondo.style.animationPlayState = "paused";
  planta.style.animationPlayState = "paused";
  piso.style.animationPlayState = "paused";
  moneda.style.animationPlayState = "paused";
  flor.style.animationPlayState = "paused";
  enemigo.style.animationPlayState = "paused";
}

function ocultarAnimaciones() {
  moneda.classList.add("ocultar");
  //tuberia.classList.remove("ocultar");
  flor.classList.remove("ocultar");
  enemigo.classList.remove("ocultar");
}


function chocaEnemigo() {
  let posMario = mario.getBoundingClientRect();
  let posEnemigo = enemigo.getBoundingClientRect();

  let widthEnemigo = posEnemigo.left + posEnemigo.width;
  let heightEnemigo = posEnemigo.top + posEnemigo.height;
  let widthMario = posMario.left + posMario.width;
  let heightMario = posMario.top + posMario.height;

  if (posMario.left <= widthEnemigo && posMario.top <= heightEnemigo && widthMario >= posEnemigo.left && heightMario >= posEnemigo.top) {
    pierdeVida();
    if (vidas == 0) {
      pausarAnimaciones();
      ocultarAnimaciones();
      finJuego();
      muere = true;
    }
  }
}

function chocaFlor() {
  let posMario = mario.getBoundingClientRect();
  let posFlor = flor.getBoundingClientRect();

  let widthFlor = posFlor.left + posFlor.width;
  let heightFlor = posFlor.top + posFlor.height;
  let widthMario = posMario.left + posMario.width;
  let heightMario = posMario.top + posMario.height;

  if (posMario.left <= widthFlor && posMario.top <= heightFlor && widthMario >= posFlor.left && heightMario >= posFlor.top) {
    pierdeVida();
    if (vidas == 0) {
      pausarAnimaciones();
      ocultarAnimaciones();
      finJuego();
      muere = true;
    }
  }
}

function pierdeVida() {
  if (!muere) {
    vidas--;
    cantVidas.innerHTML = vidas;
  }
}

/*mario salta al presionar la flecha arriba o camina presionando la tecla a la derecha*/
document.addEventListener("keydown", event => {
  if (!muere) {
    if (event.code == "ArrowUp") {
      salta = true;
      cambiarAnimacion()
    }
    else {
      camina = true;
      cambiarAnimacion();
    }
  }
});

function cambiarAnimacion() {
  if (salta) {
    if (avatar == "avatar1") {
      mario.setAttribute("class", "marioSalta");
    }
    else {
      mario.setAttribute("class", "luigiSalta");
    }
  } else if (avatar == "avatar1") {
    mario.setAttribute("class", "marioCamina");
  }
  else {
    mario.setAttribute("class", "luigiCamina");
  }
}
mario.addEventListener("animationend", function () {
  salta = false;
  cambiarAnimacion()
})

/*fin del juego*/
function finJuego() {
  btn1.classList.remove("ocultar");
  btn1.classList.add("desocultar");
}

/*va sumando los puntos*/
function sumarPuntos() {
  puntos += 5;
  puntaje.innerHTML = puntos;
}

/*verifica si agarro la moneda y suma puntos en caso de agarrarla*/
function agarrarMoneda() {
  let posCamina = mario.getBoundingClientRect();
  let posMoneda = moneda.getBoundingClientRect();
  let caminaW = posCamina.left + posCamina.width;
  let caminaH = posCamina.top + posCamina.height;
  let monedaW = posMoneda.left + posMoneda.width;

  if (posCamina.left <= monedaW && posCamina.top <= posMoneda.top && caminaW >= posMoneda.left && caminaH >= posMoneda.top) {
    sumarPuntos();
    moneda.setAttribute("class","agarraMoneda");
    setTimeout(mostrarMoneda, 2000);
  }
}

function mostrarMoneda() {
  moneda.setAttribute("class", "moneda");
}
