import * as rls from "readline-sync"
let Nro: number = rls.questionInt ("ingrese numero<: ");
let Cont = 0;
let porcentaje: number;
let positivos: number = 0;

while (Nro !=0){ 
Cont ++;
if(Nro>0) positivos ++;
Nro = rls.questionInt ("ingrese numero: ");
}
console.log("cantidad de numeros positivos: ", + positivos);
porcentaje = positivos * 100 / Cont;
console.log ("El porcentaje de positivos es: ", + porcentaje);

