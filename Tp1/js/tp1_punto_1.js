/**
 * 1.	Repaso Javascript: Definir una matriz de 100 elementos x 100 elementos y completarla con valores enteros random, y 
        resuelva los siguientes incisos: 

a)	Escribir una función que retorne el valor máximo de toda la matriz 
b)	Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo en las filas impares 
c)	Calcular el valor promedio de cada fila y guardarlos en un arreglo. 

 */

"use strict"

let rows = 10;
let columns = 10;

//a)
function puntoAcreateTable(rows, columns) {
        let matriz = [];
        for (let i = 0; i < rows; i++) {
                matriz[i] = [];
                for (let j = 0; j < columns; j++) {
                        matriz[i][j] = Math.floor(Math.random() * 100);
                }
        }
        let valorMax = 0;
        for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                        if (matriz[i][j] >= valorMax) {
                                valorMax = matriz[i][j];
                        }
                }
        }
        console.log(matriz);
        console.log("Valor maximo: " + valorMax);
}

puntoAcreateTable(rows, columns);

//b)
function puntoBcreateTable(rows, columns) {
        let matriz = [];
        for (let i = 0; i < rows; i++) {
                matriz[i] = [];
                for (let j = 0; j < columns; j++) {
                        matriz[i][j] = Math.floor(Math.random() * 100);
                }
        }
        let valorMaxFilPar = 0;
        let valorMinFilImp = matriz[0][0];
        for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                        if (j % 2 == 0) {
                                if (matriz[i][j] >= valorMaxFilPar) {
                                        valorMaxFilPar = matriz[i][j];
                                }
                        } else {
                                if (matriz[i][j] <= valorMinFilImp) {
                                        valorMinFilImp = matriz[i][j];
                                }
                        }
                }
        }

        console.log(matriz);
        console.log("Valor maximo de pares: " + valorMaxFilPar);
        console.log("Valor minimo de impares: " + valorMinFilImp);
}

puntoBcreateTable(rows, columns);

//c)
function puntoCcreateTable(rows, columns) {
        let matriz = [];
        for (let i = 0; i < rows; i++) {
                matriz[i] = [];
                for (let j = 0; j < columns; j++) {
                        matriz[i][j] = Math.floor(Math.random() * 100);
                }
        }
        let promedios = [];
        for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                        let promedio = 0;
                        promedio = ((matriz[i][j]) / i);
                        promedios[j] = promedio;
                }
        }

        console.log(matriz);
        console.log("Promedios: " + promedios);
}

puntoCcreateTable(rows, columns);

