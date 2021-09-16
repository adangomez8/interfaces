"use strict"

let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let r;
let g;
let b;
let a = 255;

document.getElementById('original').value=original();
document.getElementById('negativo').value=negative();
document.getElementById('brillo').value=brightness();
document.getElementById('saturacion').value=saturation();
document.getElementById('binario').value=binarization();
document.getElementById('sepia').value=sepia();
document.getElementById('blur').value=blur();

function original() {
    let imagen = new imagen();
    imagen.src = "";
    imagen.onload = function() {
        ctx.drawImagen(imagen, 0, 0);
    }
}