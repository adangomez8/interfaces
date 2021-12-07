"use stric";

let cant = 15;

let mg = document.getElementById("meGusta");
mg.addEventListener("click", sumar);
let nomg = document.getElementById("noMeGusta");
nomg.addEventListener("click", restar);
let cantidad = document.getElementById("cantMg");

function sumar(){
    cant++;
    cantidad.textContent = cant;
}

function restar(){
    cant--;
    cantidad.textContent = cant;
}