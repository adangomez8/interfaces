"use strict";

let registrarse = document.getElementById("registrarse");
registrarse.addEventListener("click", crearCuenta);
let cargando = document.getElementById("cargando");
let cargar = document.getElementById("cargar");

function crearCuenta(){
    cargar.classList.remove("oculto");
    cargar.classList.add("cargando");
    cargando.classList.remove("oculto");
    setTimeout(registrar, 4040);
}

function registrar(){
    window.location.href = "html/registrarse.html"
}