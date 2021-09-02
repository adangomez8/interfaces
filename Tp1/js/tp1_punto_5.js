/**5.	Pintar un rectángulo en pantalla, utilizando tres colores en un gradiente: 
        De negro a amarillo en la primera mitad del ancho del rectángulo, y de amarillo a rojo, en la segunda mitad. 
        Por otro lado, en Y el degrade se mantiene constante.  */

"use strict"

let canvas =/**@type {HTMLCanvasElement} */  document.querySelector("#canvas");

let ctx = canvas.getContext("2d");
let width = 510;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 255;
let b = 0;
let a = 255;

function drawRect(imageData, r, g, b, a) {

    for (let x = 0; x < width; x++) {
        let r;
        let g;
        let b;
        let a = 255;

        if (x <= (width / 2)) {
            
            let coeficiente = 255 / (width / 2);
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
        }else{
            let coeficiente = 255 / (width / 2);
            r = coeficiente * x;
            g = 0;
            b = 0;
        }
        

        for (let y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b, a);
        }

    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    let i = (x + y * imageData.width) * 4;
    imageData.data[i + 0] = r;
    imageData.data[i + 1] = g;
    imageData.data[i + 2] = b;
    imageData.data[i + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);