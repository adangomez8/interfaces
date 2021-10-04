let canvasJ1 = document.querySelector('#canvas_jugador1');
let canvasJ2 = document.querySelector('#canvas_jugador2');
let ctxj1 = canvasJ1.getContext('2d');
let ctxj2 = canvasJ2.getContext('2d');
let canvasj1Width = canvasJ1.width;
let canvasj1Height = canvasJ1.height;
let canvasj2Width = canvasJ2.width;
let canvasj2Height = canvasJ2.height;

const CANT_FICH = 25;

let tablero = [];

let isMouseDown = false;

function addFigure(){
    /*agregarFichaCuadrada(); 
    }*/
    agregarFichaRedonda();
    drawFigure();
}

//REDIBUJA EL FONDO 
function drawFigure(){
    clearCanvas();
    for (let i=0; i<tablero.length; i++){
        tablero[i].draw();
    }
}

function agregarFichaCuadrada(){
    let posXj1 = Math.round(Math.random() * canvasj1Width);
    let posYj1 = Math.round(Math.random() * canvasj1Height);
    let colorj1 =  "red";

    let posXj2 = Math.round(Math.random() * canvasj2Width);
    let posYj2 = Math.round(Math.random() * canvasj2Height);
    let colorj2 =  "yellow";

    
    let fichaCuadradaj1 = new FichaCuadrada(posXj1, posYj1, Math.round(Math.random() * 50), Math.round(Math.random() * 50), colorj1, ctxj1);
    tablero.push(fichaCuadradaj1);
    
    let fichaCuadradaj2 = new FichaCuadrada(posXj2, posYj2, Math.round(Math.random() * 50), Math.round(Math.random() * 50), colorj2, ctxj2);
    tablero.push(fichaCuadradaj2);
}

function agregarFichaRedonda(){
    let posXj1 = Math.round(Math.random() * canvasj1Width);
    let posYj1 = Math.round(Math.random() * canvasj1Height);
    let colorj1 =  "red";

    let posXj2 = Math.round(Math.random() * canvasj1Width);
    let posYj2 = Math.round(Math.random() * canvasj1Height);
    let colorj2 =  "yellow";

    let fichaRedondaj1 = new FichaRedonda(posXj1, posYj1, 12, colorj1, ctxj1);
    tablero.push(fichaRedondaj1);

    let fichaRedondaj2 = new FichaRedonda(posXj2, posYj2, 12, colorj2, ctxj2);
    tablero.push(fichaRedondaj2);
}

function onMouseDown(e){
    isMouseDown = true;
    drawFigure();
}

function onMouseUp(e){
    isMouseDown = false;
}

function onMouseMove(e){
        drawFigure();
}

function clearCanvas(){
    ctxj1.fillStyle = 'RGB(182, 204, 102)';
    ctxj1.fillRect(0, 0, canvasj1Width, canvasj1Height);
}

function addtablero(){
    addFigure();
    if(tablero.length < CANT_FICH){
        setTimeout(addtablero, 333);
    }
}

setTimeout(() =>{
    addtablero();
}, 50);


canvasJ1.addEventListener('mousedown', onMouseDown, false);
canvasJ1.addEventListener('mouseup', onMouseUp, false);
canvasJ1.addEventListener('mousemove', onMouseMove, false);

canvasJ2.addEventListener('mousedown', onMouseDown, false);
canvasJ2.addEventListener('mouseup', onMouseUp, false);
canvasJ2.addEventListener('mousemove', onMouseMove, false);