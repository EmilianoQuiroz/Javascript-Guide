/*
*███─█─█─█──█─████─███─████─█──█─███─███────████─█──█─████─█──█─███─█───█─████─███
*█───█─█─██─█─█──█──█──█──█─██─█─█───█──────█──█─██─█─█──█─██─█──█──██─██─█──█─█──
*███─█─█─█─██─█─────█──█──█─█─██─███─███────████─█─██─█──█─█─██──█──█─█─█─████─███
*█───█─█─█──█─█──█──█──█──█─█──█─█─────█────█──█─█──█─█──█─█──█──█──█───█─█──█───█
*█───███─█──█─████─███─████─█──█─███─███────█──█─█──█─████─█──█─███─█───█─█──█─███
*/

//*************************************************/
//*              Funciones Anonimas               */
//*************************************************/
/*
Una función anónima es aquella que se define sin nombre, y se utiliza con la finalidad de ser pasada por parámetro, o asignarla a variable. En el caso de referenciarla a una variable, puede llamarse usando el identificador de la variable declarada, es decir el nombre de la variable se emplea como nombre de la función, por ejemplo:

- Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log(suma(15,20))
console.log(resta(15,5))

Pero ¿por qué necesito una función anónima si tengo las funciones normales? Como mencionamos, son más rápidas de escribir, y tienen una aplicación particular. Más adelante en el curso, estudiaremos otras herramientas que nos permitirán crear interfaces HTML, detectar acciones del usuario y animar elementos; la mayoría de estos recursos reciben funciones como parámetro, y siendo esta función de uso exclusivo para el elemento cuestión se opta por declararla como anónima.
También cabe aclarar que si una función es compleja, es decir, cuenta con bastantes instrucciones, no se recomienda declararla como anónima ya que perderíamos el nombre, y si bien tenemos el identificador de la variable para reconocerla, la forma tradicional es más legible y conveniente en este caso.
*/

//?Ejemplo:
// Las funciones anónimas en JavaScript son aquellas que no han sido declaradas con un nombre. Estas declaradas dentro de una variable

// Declaramos la funcion
let sumar = function(a,b){ return a+b};

//Llamamos a la funcion 
resultado = sumar(12,34);

//Mostramos el resltado de la variable resultado
console.log(resultado);
