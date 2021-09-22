"use strict"

//cargar imagen
let imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", loadPicture);

//descargar imagen
let btn = document.getElementById("download");
btn.addEventListener("click", savePicture);

//cargar imagen
function loadPicture(e) {
    //limpiar(); //limpia el canvas

    let urlImagen = e.target.files[0]; //crea una url de la img
    let reader = new FileReader();
    let image = new Image();
    image.title = urlImagen.name;
    reader.onload = function (e) {
        image.src = e.target.result;
        image.onload = function () {

            let imgWidth = image.width;
            let imgHeight = image.height;

            if (imgWidth < imgHeight) { // ajusta para mantener el aspecto de la imagen original, si la imagen tiene más alto que ancho
                let proportion = (height * 100) / imgHeight;
                imgWidth = imgWidth * (proportion / 100);
                imgHeight = imgHeight * (proportion / 100);
            } else if (imgWidth > imgHeight) {  // ajusta para mantener el aspecto de la imagen original, si la imagen tiene más ancho que alto
                let proportion = (width * 100) / imgWidth;
                imgWidth = imgWidth * (proportion / 100);
                imgHeight = imgHeight * (proportion / 100);
            } else { // ajusta para mantener el aspecto de la imagen original, si la imagen tiene mismo alto que ancho
                let proportionWidth = (width * 100) / imgWidth;
                let proportionHeight = (height * 100) / imgHeight;
                imgWidth = imgWidth * (proportionWidth / 100);
                imgHeight = imgHeight * (proportionHeight / 100);
            }

            ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
            ctx.getImageData(0, 0, width, height);
        };
    };
    reader.readAsDataURL(urlImagen);
};
function getImageData () {
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
};

//descargar imagen
function savePicture() {
    var link = window.document.createElement('a'),
        url = canvas.toDataURL(),
        file = 'img.jpg';

    link.setAttribute('href', url);
    link.setAttribute('drownloadImg', file);
    link.style.visibility = 'hidden';
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
};