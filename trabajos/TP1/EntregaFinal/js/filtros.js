"use strict"

let r;
let g;
let b;
let a = 255;
let copia;

//imagen original
let btnOriginal = document.getElementById("original");
btnOriginal.addEventListener("click", original);

function original() {
    if (copia != null) {
        ctx.putImageData(copia, 0, 0);
    }
}

//filtro negativo
let btnNegative = document.getElementById("negativo");
btnNegative.addEventListener("click", negative);

function negative() {
    //Obtengo la información de la imagen que esta en el contexto del canvas
    let imageData = ctx.getImageData(0, 0, width, height);
    // Se recorre la imagen y le setea los pixeles
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b);
        }
    }
    //Función que setea cada pixel r g y b de la imagen según un criterio
    function setPixel(imageData, x, y, r, g, b) {
        //Saco la cuenta de cual sería mi indice
        let index = (x + y * imageData.width) * 4;
        //Asigno un valor a r g y b
        r = imageData.data[index + 0];
        g = imageData.data[index + 1];
        b = imageData.data[index + 2];
        /**Le resto 255 a cada color del pixel para obtener su opuesto
        *y así formar el negativo en la imagen
        */
        imageData.data[index + 0] = 255 - r;
        imageData.data[index + 1] = 255 - g;
        imageData.data[index + 2] = 255 - b;
    }
    //Muestro la imagen en el contexto
    ctx.putImageData(imageData, 0, 0);
}


//filtro brillo
let btnBrillo = document.getElementById("brillo");
btnBrillo.addEventListener("click", brightness);
function brightness() {
    //Obtengo la información de la imagen que esta en el contexto del canvas
    let imageData = ctx.getImageData(0, 0, width, height);
    //Función que recorre la imagen y le setea los pixeles
    function draw(imageData, r, g, b) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                setPixel(imageData, x, y, r, g, b);
            }
        }
    }
    draw(imageData, r, g, b);
    //Función que setea cada pixel r g y b de la imagen según un criterio
    function setPixel(imageData, x, y, r, g, b) {
        //Saco la cuenta de cual sería mi indice
        let index = (x + y * imageData.width) * 4;
        //Asigno un valor a r g y b
        r = imageData.data[index + 0];
        g = imageData.data[index + 1];
        b = imageData.data[index + 2];
        /**Le sumo una cantidad igual a cada pixel asumiendo que acercarse 
        *a blanco es obtener más brillo y así lograr el filtro
        */
        imageData.data[index + 0] = r + 10;
        imageData.data[index + 1] = g + 10;
        imageData.data[index + 2] = b + 10;
    }
    //Muestro la imagen en el contexto
    ctx.putImageData(imageData, 0, 0);
}

//filtro de saturacion
let btnSaturacion = document.getElementById("saturacion");
btnSaturacion.addEventListener("click", saturation);
function saturation() {
    //Obtengo la información de la imagen que esta en el contexto del canvas
    let imageData = ctx.getImageData(0, 0, width, height);
    //Función que recorre la imagen y le setea los pixeles
    function draw(imageData, r, g, b) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                setPixel(imageData, x, y, r, g, b);
            }
        }
    }
    draw(imageData, r, g, b);
    //Función que setea cada pixel r g y b de la imagen según un criterio
    function setPixel(imageData, x, y, r, g, b) {
        //Saco la cuenta de cual sería mi indice
        let index = (x + y * imageData.width) * 4;
        //Asigno una variable de contraste fija para ir incrementando
        let contraste = 100;
        /**Después saco el factor de ese contraste, es decir cuanto vamos a ir
        * aumentandolo según esta cuenta matematica
        */
        let factor = (259 * (contraste + 255)) / (255 * (259 - contraste));
        //Asigno un valor a r g y b
        r = imageData.data[index + 0];
        g = imageData.data[index + 1];
        b = imageData.data[index + 2];
        /**Al final asigno el valor de los pixeles r g y b multiplicando 
         * el factor por r - 128 (la mitad de 255) y luego sumandole 128
         * para así lograr la combinación de los complementarios
         */
        imageData.data[index + 0] = factor * (r - 128) + 128;
        imageData.data[index + 1] = factor * (g - 128) + 128;
        imageData.data[index + 2] = factor * (b - 128) + 128;
    }
    //Muestro la imagen en el contexto
    ctx.putImageData(imageData, 0, 0);
}

//filtro binarizacions
let btnBinarizacion = document.getElementById("binario");
btnBinarizacion.addEventListener("click", binarization);
function binarization() {
    //Obtengo la información de la imagen que esta en el contexto del canvas
    let imageData = ctx.getImageData(0, 0, width, height);
    //Función que recorre la imagen y le setea los pixeles
    function draw(imageData, r, g, b) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                setPixel(imageData, x, y, r, g, b);
            }
        }
    }
    draw(imageData, r, g, b, a);
    //Función que setea cada pixel r g y b de la imagen según un criterio
    function setPixel(imageData, x, y, r, g, b) {
        //Saco la cuenta de cual sería mi indice
        let index = (x + y * imageData.width) * 4;
        //Máximo que puede tomar un pixel y el valor sobre el cual divido
        let max = 255;
        let div = 3;
        //Asigno un valor a r g y b
        r = imageData.data[index + 0];
        g = imageData.data[index + 1];
        b = imageData.data[index + 2];
        /**Si el valor de mi r g y b divido entre 3 es menor que el máximo
         * dividio entre 3 asigno el color negro, si no asigno el color blanco
         * para así poder lograr el efecto de binarización
        */
        if (((r + g + b) / div) < (max / div)) {
            r = 0;
            g = 0;
            b = 0;
        } else {
            r = 255;
            g = 255;
            b = 255;
        }
        //Asigno el valor de cada pixel con el nuevo valor de r g y b
        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
    }
    //Muestro la imagen en el contexto
    ctx.putImageData(imageData, 0, 0);
}

let btnSepia = document.getElementById("sepia");
btnSepia.addEventListener("click", sepia);
//filtro sepia
function sepia() {
    //Obtengo la información de la imagen que esta en el contexto del canvas
    let imageData = ctx.getImageData(0, 0, width, height);
    //Función que recorre la imagen y le setea los pixeles
    function draw(imageData, r, g, b) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                setPixel(imageData, x, y, r, g, b);
            }
        }
    }
    draw(imageData, r, g, b);
    //Función que setea cada pixel r g y b de la imagen según un criterio
    function setPixel(imageData, x, y, r, g, b) {
        //Saco la cuenta de cual sería mi indice
        let index = (x + y * imageData.width) * 4;
        //Asigno un valor a r g y b
        r = imageData.data[index + 0];
        g = imageData.data[index + 1];
        b = imageData.data[index + 2];
        /**Asigno un nuevo tono a r g y b sacado con una cuenta matematica
        *ya existente para poder así lograr el sepia
        */
        imageData.data[index + 0] = (r * .393) + (g * .769) + (b * .189);
        imageData.data[index + 1] = (r * .349) + (g * .686) + (b * .168);
        imageData.data[index + 2] = (r * .272) + (g * .534) + (b * .131);
    }
    //Muestro la imagen en el contexto
    ctx.putImageData(imageData, 0, 0);
}

//filtro blur

let btnBlur = document.getElementById("blur");
btnBlur.addEventListener("click", blur);
function blur(){

}