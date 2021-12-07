"use strict";

function iniciarSesion(){
    document.location.href = "../html/inicio.html";
}

let registrarse = document.getElementById("registrarse");
registrarse.addEventListener("click", crearCuenta);

function crearCuenta(){
    document.location.href = "../html/registrarse.html";
}

let ingresar = document.getElementById("iniciarSesion");
ingresar.addEventListener("click", iniciarSesion);

function iniciarSesion(){
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");
    let error1 = document.getElementById("error");
    let error2 = document.getElementById("error1");

    let emailOK = false;
    let contraseñaOK = false;

    if(email.value == "sasha@123" || email.value == "adan@123"){ //verifica que es usuario sea valido
        email.classList.remove("error")
        error1.classList.remove("mensaje");
        error1.classList.add("msjOculto");
        emailOK = true;
    }
    else if(email.value.length == 0){
        email.classList.add("error");
        error1.classList.remove("msjOculto");
        error1.classList.add("mensaje");
        error1.innerHTML = "*Por favor complete los campos."
    }
    else{
        email.classList.add("error");
        error1.classList.remove("msjOculto");
        error1.classList.add("mensaje");
        error1.innerHTML = "*El email que has introducido es incorrecto."
    }

    //verifico si la contraseña es valida
    if(contraseña.value == "123"){
        contraseña.classList.remove("error");
        error2.classList.add("msjOculto");
        error2.classList.remove("mensaje");
        contraseñaOK = true;
    }
    else if(contraseña.value.length == 0){
        contraseña.classList.add("error");
        error2.classList.remove("msjOculto");
        error2.classList.add("mensaje");
        error2.innerHTML = "*Por favor complete los campos." 
    }
    else{
        contraseña.classList.add("error");
        error2.classList.remove("msjOculto");
        error2.classList.add("mensaje");
        error2.innerHTML = "*La contraseña que has introducido es incorrecta."
    }

    //verifica que la contraseña y el email sean correctos y lo redirijo al inicio
    if(emailOK && contraseñaOK){
        iniciarSesion();
    }
}