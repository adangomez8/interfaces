"use strict"

//boton cargar imagen
let imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", loadPicture);

//boton descargar imagen
let btnDescargar = document.getElementById("download");
btnDescargar.addEventListener("click", savePicture);

//cargar una imagen al canvas desde el disco
function loadPicture(e) {
  limpiar();
  ctx.canvas.width = width;
  ctx.canvas.height = height;       //se limpia canvas
  let urlImagen = e.target.files[0];//se toma la URL de la imagen con el target del evento
  let reader = new FileReader();
  let image = new Image();
  image.title = urlImagen.name;
  reader.onload = function (e) {
    image.src = e.target.result;
    image.onload = function () {

      let imgWidth = image.width;
      let imgHeight = image.height;

      //ajusta la imagen al canvas si la imagen es mas grande que el canvas
      if (imgWidth < imgHeight) { // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más alto que ancho
        let proportion = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportion / 100);
        imgHeight = imgHeight * (proportion / 100);
      } else if (imgWidth > imgHeight) {  // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene más ancho que alto
        let proportion = (width * 100) / imgWidth;
        imgWidth = imgWidth * (proportion / 100);
        imgHeight = imgHeight * (proportion / 100);
      } else { // ajusta,para mantener el aspecto de la imagen original, si la imagen tiene mismo alto que ancho
        let proportionWidth = (width * 100) / imgWidth;
        let proportionHeight = (height * 100) / imgHeight;
        imgWidth = imgWidth * (proportionWidth / 100);
        imgHeight = imgHeight * (proportionHeight / 100);
      }
      //ajusta el canvas a la imagen si la imagen es más chica en ancho que el ancho del canvas
      if (width > imgWidth) {
        ctx.canvas.width = imgWidth;
      }
      //ajusta el canvas a la imagen si la imagen es más chica en alto que el alto del canvas
      else if (height > imgHeight) {
        ctx.canvas.height = imgHeight;
      }

      ctx.drawImage(image, 0, 0, imgWidth, imgHeight);//dibuja la imagen en el contexto ctx 
      copia = ctx.getImageData(0, 0, width, height);

    };
  };
  reader.readAsDataURL(urlImagen);// codifico los datos como la URL de la imagen

}

//descargar la imagen actual con el contexto del canvas
function savePicture() {
  let dnld = document.getElementById("downloadImg");
  let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // devuelve la matriz 
  dnld.setAttribute("href", image);
};