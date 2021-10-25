"use strict";

let mario = document.querySelector("#mario");
let salta = false;
let camina = false;



window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        break;
      case "ArrowUp":
        salta = true;
        saltar(salta);
        break;
      case "ArrowLeft":
        camina = true;
        caminarParaAtras(camina);
        break;
      case "ArrowRight":
        camina = true;
        caminar(camina);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

function saltar(salta){
    if(salta){
    mario.setAttribute("class","salta");
    }
}

function caminar(camina){
    if(camina){
    mario.setAttribute("class","camina");
    }
}

function caminarParaAtras(camina){
    if(camina){
    mario.setAttribute("class","caminaParaAtras");
    }
}