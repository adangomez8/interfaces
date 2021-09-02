/**4.	Especificar la función para pintar un cuadrado utilizando un gradiente de la siguiente forma:  */

"use strict"

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = 510;
let height = 500;
let imageData = ctx.createImageData(width, height);
let x=0;
let y=0;
let color=0;
let a=255;

function drawRect(imageData, a) {

    for (let x = 0; x < width; x++) {         
        for (let y = 0; y < height; y++) {
        
            let color = y*(255/height);
            setPixel(imageData, x, y, color, color, color, a);
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

drawRect(imageData, a);
ctx.putImageData(imageData, x, y);
