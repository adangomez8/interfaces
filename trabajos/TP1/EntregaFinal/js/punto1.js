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
    let pencil = false;
    let rubber = false;
    let color = "black";
    let lineWidth = 5;
})