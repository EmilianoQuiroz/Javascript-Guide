/*
*████─███─████─█───████────█───█─█──█─███─█───███
*█──█──█──█──█─█───█──█────█───█─█──█──█──█───█──
*█─────█──█────█───█──█────█─█─█─████──█──█───███
*█──█──█──█──█─█───█──█────█████─█──█──█──█───█──
*████─███─████─███─████─────█─█──█──█─███─███─███
*/

//*************************************************/
//*              Estructura while                 */
//*************************************************/
/*
Cuando existe la necesidad de utilizar un bucle, pero su repetición está condicionada por el valor de una o más variables no numéricas, la estructura while es más apropiada. 
Mientras la condiciòn se evalúe como verdadera, se repetirá el bloque de instrucciones definido (cabe aclarar que hay que prestar especial cuidado al momento de codificar el condicional). Cuando usamos while, asumimos que en algún momento la repetición va a finalizar; si la comparación no se realiza adecuadamente, como se visualiza en el ejemplo siguiente, podemos generar el llamado “bucle infinito”, fenómeno que implica problemas en la ejecución de nuestro programa, ya que nunca finaliza la repetición del bloque, “colgando” la aplicación:

let repetir = true;
while(repetir){
    console.log("Al infinito y...¡Más allá!");
}

Entonces, cuando usamos while sabemos que el valor de la variable comparada va cambiar en algún momento, de forma tal que el ciclo se interrumpe. Analicemos dicho funcionamiento desde un ejemplo, imaginando que tenemos que solicitar un valor al usuario hasta que tipee escape (“ESC”); así,  el código en cuestión podría ser: 

let entrada = prompt("Ingresar un dato");

-Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    - Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

Por cada ciclo se informa por alert al usuario la entrada capturada, y se solicita una nueva entrada. Antes de iniciar el próximo ciclo, nos preguntamos en la comparación si el usuario NO escribió “ESC”. Observemos que estamos usando el operador de comparación distinto (!=), y el único valor que puede dar falso tal comparación es que el usuario ingrese exactamente “ESC”; entonces, el bucle se repite mientras el usuario NO ingresa “ESC”.
*/

//?Ejemplo:

//Para ejecutar el ciclo vamos a necesitar de una variable llamanda "contador", esta variable nos va a permitir terminar el ciclo en cierto momento

let contador = 1;

while(contador <= 3)/* En la condicion indicamos que si el contador es menor o igual que 3 se ejecutara el siguiente codigo */
{
    console.log(contador);/* Imprimimos la variable "contador" */
    contador++;/* Le sumamos un valor a contador por cada vez que se repita el bucle */
}
