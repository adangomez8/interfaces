"use strict"

//limpiar canvas
let limpiar = document.getElementById("clean");

//goma
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

//limpiar canvas
limpiar.addEventListener('click', function (evt) {
    dibujar = false;
    ctx.clearRect(0, 0, width, height);
}, false);

//funcion de la goma
function borrar() {
    dibujar = false;

    ctx.beginPath();
    ctx.strokeStyle = rubberColor;
    ctx.lineWidth = rubberGrosor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.stroke();
    ctx.closePath();
}