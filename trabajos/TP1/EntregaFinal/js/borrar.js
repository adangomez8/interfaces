"use strict"
//evento y funcion que limpia el lienzo
let btn_limpiar = document.getElementById('clean');
btn_limpiar.addEventListener('click', limpiar);
function limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//variables de la goma
let rubber = false;
let rubberColor = 'white';
let rubberGrosor = 15;

//evento goma
let btnRubber = document.querySelector("#rubber");
btnRubber.addEventListener("click", function () {
    pencil = false;
    rubber = true;
    borrar();
});

//funcion que haces que la goma borre lo que esta dibujando en el lienzo
function borrar(x1, y1, x2, y2) {
    dibujar = false;

    ctx.beginPath();
    ctx.strokeStyle = rubberColor;
    ctx.lineWidth = rubberGrosor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}