"use strict"

//cargar imagen
document.getElementById("upload").addEventListener('change', loadPicture);

//descargar imagen
document.getElementById("download").addEventListener('click', save)

//cargar imagen
function loadPicture(e) {
    limpiar(); //limpia el canvas

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
            copia = ctx.getImageData(0, 0, width, height);
            atras = copia;
        };
    };
    reader.readAsDataURL(urlImagen);
};

public.getImageData = function () {
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
};

//descargar imagen
public.save = function () {
    var link = window.document.createElement('a'),
        url = canvas.toDataURL(),
        filename = 'img.jpg';

    link.setAttribute('href', url);
    link.setAttribute('drownload', filename);
    link.style.visibility = 'hidden';
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
};