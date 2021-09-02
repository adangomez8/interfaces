/**6.	Pintar un rectángulo en pantalla, utilizando tres o cuatro colores en un gradiente. Los tres colores deben ser armonías tonales. 
        Puede ser en el eje X o Y. */

"use strict"

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = 510;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 155;
let g = 57;
let b = 73;
let a = 255;

function drawRect(imageData, r, g, b, a) {

    for (let x = 0; x < width; x++) {
        let r;
        let g;
        let b;
        let a = 255;

        if (x <= (width / 4)) {
            
            let coeficiente = 255 / (width / 4);
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
        }else if (x <= ((width / 4)*2)){
            let coeficiente = 255 / (width / 4);
            r = coeficiente * x;
            g = 0;
            b = coeficiente * x;
        }else if (x <= ((width / 4)*3)){
            let coeficiente = 255 / (width / 4);
            r = 0;
            g = coeficiente * x;
            b = coeficiente * x;
        }else{
            let coeficiente = 255 / (width / 4);
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