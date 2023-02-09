/*
*████─███─████─█───████────████──████────█───█─█──█─███─█───███
*█──█──█──█──█─█───█──█────█──██─█──█────█───█─█──█──█──█───█──
*█─────█──█────█───█──█────█──██─█──█────█─█─█─████──█──█───███
*█──█──█──█──█─█───█──█────█──██─█──█────█████─█──█──█──█───█──
*████─███─████─███─████────████──████─────█─█──█──█─███─███─███
*/

//*************************************************/
//*            Estructura Do while                */
//*************************************************/
/*
El ciclo while puede no realizar repetición alguna si el condicional resulta falso (false) en el primer ciclo. A veces existe la necesidad de emplear una estructura que garantice al menos una interpretación del bloque de instrucciones de la estructura; en ese caso, usamos do...while, que funciona de forma similar al while, sólo que el condicional se evalúa al final de la iteración y no al comienzo, permitiendo ejecutar al menos una vez el conjunto de instrucciones:

let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)

A pesar de que la variable posee el valor false, el mensaje por consola se visualiza una vez, ya que la comparación que determina la continuidad del ciclo está luego de la palabra reservada while.
La estructura do...while puede simplificar el proceso de solicitud de entradas al usuario, ya que podemos solicitar las mismas, evaluarlas, y luego determinar si se realiza la repetición siguiente o no. Contrario al while, que al solicitar de  entrada inicial se da lugar a la posibilidad de que el bucle no se ejecute jamás. 
Veamos ahora un ejemplo de cómo usar do...while para asegurarnos de que el usuario siempre ingrese un número:
*/

//?Ejemplo
//Al contrario que el bucle while , que comprueba la condición antes de entrar en el bucle, el bucle do - while la evalúa al final del bucle. Esto implica que el bucle se ejecutará al menos una vez.

let contador = 1;

do{
    /* Ejecutamos este bloque de codigo una vez */
    console.log(contador);
    contador++;
}
while(contador < 0);/* Seguimos ejecutando el bloque mientras se cumpla la siguiente condicion */
