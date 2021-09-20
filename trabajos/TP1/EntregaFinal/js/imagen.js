"use strict"

//cargar imagen
document.getElementById("upload").addEventListener("change", loadPicture);

//descargar imagen
document.getElementById("download").addEventListener("click", save)

//cargar imagen
public.loadPicture = function () {
    var img = new Image();
    img.src = 'imagen1.jpg';

    img.onload = function () {
        ctx.drawImagen(img, 0, 0);
    }
};

public.getImageData = function(){
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