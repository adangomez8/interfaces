"use strict";

let menuDesplegable = document.getElementById("menuDesplegable");
let desplegable=true;

let perfil = document.getElementById("perfil");
perfil.addEventListener("click", verPerfil);

let salir = document.getElementById("salir");
salir.addEventListener("click", cerrarSesion);

let logoPerfil = document.getElementById("logoPerfil");
logoPerfil.addEventListener("click", mostrarMenu);

function verPerfil(){
    menuDesplegable.classList.add("oculto")
    menuDesplegable.classList.remove("desocultar")
    document.location.href ="../html/perfil-publicaciones.html";
}

function cerrarSesion(){
    menuDesplegable.classList.add("oculto")
    menuDesplegable.classList.remove("desocultar")
    document.location.href ="../index.html";
}

function mostrarMenu(){
    if(desplegable){
        menuDesplegable.classList.remove("oculto");
        menuDesplegable.classList.add("desocultar");
        desplegable=false;      
    }
    else{
        menuDesplegable.classList.add("oculto");
        menuDesplegable.classList.remove("desocultar");
        desplegable=true;
    }
}