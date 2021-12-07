"use strict";

let menuBuscar = document.getElementById("menuDeBusquedas");
let menuDesplegable = document.getElementById("menuDesplegable");
let desplegable=true;
let buscar=true;

let perfil = document.getElementById("perfil");
perfil.addEventListener("click", verPerfil);

let salir = document.getElementById("salir");
salir.addEventListener("click", cerrarSesion);

let logoPerfil = document.getElementById("logoPerfil");
logoPerfil.addEventListener("click", mostrarMenu);

let lupa = document.getElementById("busquedaAvanzada");
lupa.addEventListener("click", menuAvanzado);

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", verBusqueda);

let resultado = document.getElementById("resultado");

function menuAvanzado(){
    if(buscar){
        menuBuscar.classList.remove("oculto");
        menuBuscar.classList.add("desocultar");
        buscar=false;
        if(resultado.classList.contains("desocultar")){
            ocultar();
        }
    }
    else{
        menuBuscar.classList.add("oculto");
        menuBuscar.classList.remove("desocultar");
        ocultar();
    }
}

function cerrarMenuAvanzado(){
    menuBuscar.classList.add("oculto");
    menuBuscar.classList.remove("desocultar");
    buscar=true;
    ocultar();
}

function verBusqueda(){
    resultado.classList.remove("oculto");
    resultado.classList.add("desocultar");
}

function ocultar(){
    resultado.classList.remove("desocultar");
    resultado.classList.add("oculto");
}

function verPerfil(){
    menuDesplegable.classList.add("oculto")
    menuDesplegable.classList.remove("desocultar")
    document.location.href ="../html/perfil-publicaciones.html";
}

function cerrarSesion(){
    menuDesplegable.classList.add("oculto")
    menuDesplegable.classList.remove("desocultar")
    document.location.href ="EntregaFinal/index.html";
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