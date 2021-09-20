//Barra de herramientas con, al menos, lápiz (que pueda elegir color del lápiz) y goma de borrar, y su funcionalidad.
//Permitir iniciar con un lienzo en blanco, o partir de una imagen que será cargada desde disco.
//Aplicar cuatro filtros a la imagen actual, por ejemplo: negativo, brillo, binarización y sepia.
//Aplicar al menos dos de los siguientes filtros a la imagen: Saturación, Detección de Bordes, Blur.
//Permitir guardar en disco la imagen, o descartar la imagen y comenzar con un lienzo vacío.

"use strict"

document.addEventListener("DOMContentLoaded", function () {
})
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let imageData = ctx.createImageData(width, height);

//lapiz
let pencil = false;
let dibujar = false;
ctx.lineJoin = "round";
ctx.lineWidth = 0.5;

function draw(e) {

    let x = e.layerX;
    let y = e.layerY;

    if (dibujar === true) {//Triple para que iguale en valor y el tipo
        ctx.lineTo(x, y); // Dibuja la linea hasta x2, y2
        ctx.stroke(); // Indica que van a hacer solamente lineas
    }
}

//evento lapiz
let btnPencil = document.querySelector("#pencil");
btnPencil.addEventListener("click", function () {
    pencil = true;
    rubber = false;
    movilidad();
});

//movilidad del mouse
function movilidad() {

    canvas.addEventListener('mousedown', function (evt) { //el mouse dibuja
        let x = evt.layerX;
        let y = evt.layerY;
        dibujar = true;
        ctx.beginPath();
        ctx.moveTo(x, y)
        canvas.addEventListener('mousemove', draw);//se mueve el mouse
    });

    canvas.addEventListener('mouseup', function (evt) { //se suelta el mouse
        ctx.closePath(); //Cierra la ruta
        dibujar = false;

    });

    canvas.addEventListener("mouseout", function (evt) { //el mouse sale
        dibujar = false;
    });
}

function defColor(color) { // funcion para el color
    ctx.strokeStyle = color.value;
}

function defGrosor(grosor) { //funcion para el grosor de la linea
    ctx.lineWidth = grosor.value;
}