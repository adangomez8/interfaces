//Barra de herramientas con, al menos, lápiz (que pueda elegir color del lápiz) y goma de borrar, y su funcionalidad.
//Permitir iniciar con un lienzo en blanco, o partir de una imagen que será cargada desde disco.
//Aplicar cuatro filtros a la imagen actual, por ejemplo: negativo, brillo, binarización y sepia.
//Aplicar al menos dos de los siguientes filtros a la imagen: Saturación, Detección de Bordes, Blur.
//Permitir guardar en disco la imagen, o descartar la imagen y comenzar con un lienzo vacío.

"use strict"

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    let imageData = ctx.createImageData(width, height);

    let limpiar = document.getElementById("clean");
    let pencil = false;
    let rubber = false;
    let color = "black";
    let lineWidth = 5;
    let dibujar = false;
    ctx.lineJoin = "round";

    limpiar.addEventListener('click', function(evt) {
        dibujar = false;
        //ctx.clearRect(0, 0, cw, ch);
 
      }, false);

    canvas.addEventListener('mousedown', function (evt) { //el mouse dibuja
        dibujar = true;
        //ctx.clearRect(0, 0, cw, ch);
        ctx.beginPath();

    }, false);

    canvas.addEventListener('mouseup', function (evt) { //se suelta el mouse
        dibujar = false;

    }, false);

    canvas.addEventListener("mouseout", function (evt) { //el mouse sale
        dibujar = false;
    }, false);

    canvas.addEventListener("mousemove", function (evt) { //se mueve el mouse
        if (dibujar) {
            let m = oMousePos(canvas, evt);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
        }
    }, false);

    function oMousePos(canvas, evt) { //posicion del mouse
        var ClientRect = canvas.getBoundingClientRect();
        return { //objeto
            x: Math.round(evt.clientX - ClientRect.left),
            y: Math.round(evt.clientY - ClientRect.top)
        }
    }
})