/*3.	Pintar una región rectangular de un color utilizando la estructura de ImageData**/

"use strict"

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = 200;
let height = 200;
let imageData = ctx.createImageData(width, height);
let x = 0;
let y = 0;
let r = 31;
let g = 105;
let b = 139;
let a = 255;

function drawRect(imageData, r, g, b, a) {              
        for (let x = 0; x < width; x++) {
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
ctx.putImageData(imageData, x, y);