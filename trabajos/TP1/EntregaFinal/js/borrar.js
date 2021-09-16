"use strict"

let limpiar = document.getElementById("clean");
let rubber = false;
let rubberColor = 'white';
let rubberGrosor = 15;

let btnRubber = document.querySelector("#rubber");
btnRubber.addEventListener("click", function () {
    pencil = false;
    rubber = true;

    borrar();
});

limpiar.addEventListener('click', function (evt) {
    dibujar = false;
    ctx.clearRect(0, 0, width, height);
}, false);

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