"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var Nro = rls.questionInt("ingrese numero<: ");
var Cont = 0;
var porcentaje;
var positivos = 0;
while (Nro != 0) {
    Cont++;
    if (Nro > 0)
        positivos++;
    Nro = rls.questionInt("ingrese numero: ");
}
console.log("cantidad de numeros positivos: ", +positivos);
porcentaje = positivos * 100 / Cont;
console.log("El porcentaje de positivos es: ", +porcentaje);
