/*
*███─█─█─█──█─████─███─████─█──█─███─███────███─█───███─████─█──█─████
*█───█─█─██─█─█──█──█──█──█─██─█─█───█──────█───█───█───█──█─█──█─█──█
*███─█─█─█─██─█─────█──█──█─█─██─███─███────███─█───███─█────████─████
*█───█─█─█──█─█──█──█──█──█─█──█─█─────█────█───█───█───█──█─█──█─█──█
*█───███─█──█─████─███─████─█──█─███─███────█───███─███─████─█──█─█──█
*/

//*************************************************/
//*               Funciones Flecha                */
//*************************************************/
/*
Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada. Están disponibles desde la versión ES6 de JavaScript; no usan la palabra function, pero usamos => (flecha) entre los parámetros y el bloque:

const suma  = (a, b) => { return a + b }
- Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b 
console.log(suma(15,20))
console.log(resta(20,5))

Pero ¿por qué necesito una función fecha si tengo las funciones normales y anónimas? Mencionamos que las funciones flecha son una forma más acotada de declarar funciones anónimas, incluso para funciones de una sola línea con un return podemos optar por codificar la función flecha sin cuerpo (es decir, omitiendo las llaves y el return porque se asumen por el intérprete). Esta forma más acotada permite que las funciones que reciban otras funciones como parámetro, compuestas de una sola línea, sean más legibles. Es común tener funciones de una sola línea para hacer un cálculo (suma, resta, etcétera) o realizar comparaciones reiterativas (igualdad de dos valores, desigualdad, entre otras).
Otra razón de aplicación de funciones flecha es emplear programación funcional en la construcción de aplicaciones modernas. Veamos entonces un ejemplo de cómo un procesamiento del cálculo de precio se codifica empleando funciones flechas:

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

- Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21;
let precioProducto  = 500; 
let descuento = 50;  

- Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
console.log(nuevoPrecio);

Como podemos notar, para calcular nuevoPrecio empleamos 3 funciones:

1. La función resta nos permite restar el monto de descuento al valor del primer parámetro.
2. Pero el valor de la resta se obtiene desde la llamada suma, es decir, restamos al valor que obtenemos llamando a suma como primer parámetro.
3. Luego suma el primer parámetro que es el precio del producto, y el valor a sumar es el resultado del cálculo de iva mediante la función iva.

Esta operación realiza el siguiente cálculo matemático gracias a estas llamadas: 
((500 + (500 * 0.21)) - 50)
*/

//?Ejemplo:
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

const sumar = (a,b) => a + b;

//Omitimos la palabra reservada function, luego a una constante le asignamos la función
//Le asignamos entre parentesis los parametros y luego seguido de los caracteres "=>" ponemos el cuerpo de la función

//Llamamos a la funcion 
let resultado = sumar(23,32);

//Mostramos el resultado
console.log(resultado);
