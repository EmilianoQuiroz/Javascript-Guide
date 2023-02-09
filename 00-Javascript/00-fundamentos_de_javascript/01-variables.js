/*
*█─█─████─████─███─████─████──█───███─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█─█─█──█─█──█──█──█──█─█──██─█───█───█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*█─█─████─████──█──████─████──█───███─███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*███─█──█─█─█───█──█──█─█──██─█───█─────█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*─█──█──█─█─█──███─█──█─████──███─███─███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//**************************************************/
//*            Variables en Javascript             */
//**************************************************/
/*
Variables
Vamos a aprender ahora nuestras primeras palabras reservadas. Los términos a continuación se utilizan para crear elementos con valores asociados, a los cuales los conocemos por el nombre de variables. Es decir, una variable es un espacio reservado en la memoria dónde almacenamos algún tipo de dato, y que puede variar con el tiempo y transcurso de nuestra aplicación (de ahí su nombre variable).
Constantemente estamos trabajando con datos y operaciones de diverso tipo y transformándolos durante la ejecución. Esta información la almacenamos en estos contenedores que llamamos variables, a fin de tenerla disponible luego y llamarla cuando lo necesitemos.
Declaración y asignación
Al trabajar con variables tenemos que diferenciar estos dos procesos que llamamos declaración y asignación. 
Declarar una variable significa crearla. Para esto usamos la palabra reservada var, let o const (ya veremos las diferencias). Escribimos una de estas palabras claves seguido del nombre de nuestra variable (este nombre es el que usamos para referenciar luego a la variable creada y acceder a sus valores almacenados):
	var nombre
	let apellido
	const telefono

Recordemos que para los nombres de nuestras variables no debemos utilizar ni espacios ni caracteres especiales (ñ, acentos, etc.). La palabra var corresponde a la versión ES5 para crear variables y actualmente se encuentra en desuso, ya que fue reemplazada por las palabras let y const de ES6 que implementan mejoras en el control de variables, y se recomienda utilizar exclusivamente estas dos últimas, evitando la primera.
Estas variables creadas en el ejemplo anterior están vacías; se declararon como corresponde pero no almacenan ningún valor. Para eso está el proceso de asignación, que es cuando definimos qué valores queremos guardar en ellas.

Tipos de valores 
Podemos asociar distintos valores a una variable en JavaScript. Para empezar trabajaremos con los tipos de datos más comunes, que son las cadenas de texto y los números; en programación conocidos como tipos de dato string y number respectivamente:

Number: un valor numérico puede ser entero o decimal; cuando es entero se le dice “integer”, mientras que se lo denomina “float” cuando es decimal. 
String: por otro lado, un string o cadena de texto, es un valor compuesto por uno o más caracteres, y se caracteriza porque se define siempre entre comillas simples o dobles.

Es importante aclarar que en JavaScript las variables pueden guardar cualquier tipo de valores. Esto significa que si asignar primero un número no impide luego asignar un string a la misma variable. A esta característica en los lenguajes de programación se la llama “tipado dinámico”, e implica que las variables pueden guardar cualquier valor, sin que sea necesario especificar qué tipo de dato contiene la variable en la declaración de la misma.
Conociendo ésto ya podemos asignar valores a nuestras variables anteriores. La asignación de un valor a una variable se hace mediante el operador = (igual), siguiendo la sintaxis de variable = valor. Es decir, yo escribo la referencia a mi variable por su nombre, seguido del operador = , que significa asignación, y luego el valor que quiero guardar en esa variable. Por ejemplo, 

siguiendo los ejemplos anteriores:
	
asignando valores tipo string
	nombre = “John”
	apellido = “Doe”
	
    y asignando valores number
	telefono = 11333444

Nótese que el valor asignado en telefono no contiene espacios u otros caracteres como podría hacerse con normalmente con un teléfono, porque el number es siempre número entero o decimal y no contempla esos caracteres. Para ese fin podría almacenar el teléfono como un string, supongamos de la froma “+54 9 (011) 555-4444”, entendiendo que los caracteres numéricos forman parte de la cadena de texto.

También se puede simplificar el proceso anterior y asignar valores a una variable en el mismo momento en que la declaro:
const nombre = “John”
	const apellido = “Doe”
	let telefono = 11333444
*/

//**************************************************/
//*          let y const en  Javascript            */
//**************************************************/
/*
Las declaraciones con let y const tienen controles adicionales para las variables. Principalmente impiden que se puedan crear dos variables con el mismo nombre. El uso de var permitía este comportamiento y era propenso a generar errores, de ahí su posterior modificación. 
Una variable declarada con let puede recibir múltiples asignaciones en el transcurso de la aplicación, es decir que puede cambiar de valor varias veces. Mientras que una variable declarada como const (de constante) solo puede recibir una única asignación al momento de su declaración, impidiendo que su valor se modifique luego. Usos prácticos de esto se verán a lo largo del curso.

Operaciones básicas  con variables numéricas
Si tenemos variables con valores numéricos, podemos hacer operaciones matemáticas entre ellas. Es decir sumarlas, restarlas, multiplicarlas, dividirlas, etc. Para ésto utilizamos otros tipos de operadores, que son los símbolos matemáticos típicos, y lo hacemos siguiendo la lógica matemática tradicional. Ejemplo:
*/


var   numeroA = 1;
let   numeroB = 2;
const NUMEROC = 3;

//Suma  de dos números (1 + 2 = 3)
let resultadoSuma  = numeroA + numeroB;
//Resta de dos números (2 - 1 = 1)
let resultadoResta = numeroB - numeroA;
//Producto de dos números (2 * 3 = 6)
let resultadoProducto = numeroB * NUMEROC;

//**************************************************/
//*          Promp y alert  Javascript             */
//**************************************************/
/*
Prompt
Ahora vamos aprender tres herramientas del lenguaje JavaScript que nos permiten interactuar con el usuario:
La primera es la instrucción prompt(), con la cual podemos solicitar un dato al usuario. Cuando la usamos, se visualiza en el navegador un cuadro de texto que pide un dato. Se busca asignar el valor ingresado por prompt() a una variable. Dicho valor que el usuario escribe es siempre una cadena de caracteres, es decir que se recibe como string. No podemos hacer operaciones matemáticas con strings, necesitamos que sean de tipo number para ello. Por lo tanto, si queremos recibir números por prompt debemos transformarlos, o parsearlos, a tipo number con una función particular.
Veamos primero un ejemplo de cómo usar  prompt: 

let nombreIngresado = prompt("Ingrese su nombre");

El usuario puede ingresar cualquier valor en este cuadro, y no puede limitarse el tipo de valor ingresado.  A los datos que ingresa mediante prompt se los conoce con el nombre de entradas, porque son datos que ingresan a la aplicación por la acción del usuario para ser procesados.

Consola
Si queremos mostrar el resultado de una variable tenemos dos formas de hacerlo. La primera, muy útil para el programador, es utilizar la instrucción console.log(), la cual permite visualizar en la consola del navegador el valor asignado, una variable, o un valor cualquiera especificado entre los paréntesis. Veamos un ejemplo de cómo usar console.log:

console.log("Mensaje de prueba");

let nombre = “John Doe”

console.log(nombre)

La consola es una herramienta fundamental para cualquier desarrollador ya que nos permite ir evaluando los datos almacenados en nuestras variables en diversos momentos, y con esto llevar control del correcto funcionamiento de nuestra aplicación.

Alert
La segunda forma de mostrar al usuario el resultado de una variable es mediante la instrucción alert(), la cual hace aparecer un cuadro de texto con el valor asignado de una variable, o un valor cualquiera especificado entre los paréntesis. Veamos un ejemplo de cómo usar alert: 

    alert("¡Hola Mundo!");

El usuario visualizará el valor en un cuadro hasta que presione aceptar. A los datos que mostramos  mediante alert se los conoce con el nombre de “salidas”, porque salen de la aplicación por el resultado de un procesamiento, siendo visibles para el usuario. 
El procesamiento implica una o más instrucciones que transforman el dato ingresado por el usuario (entrada) en información de valor, para él y la muestra (salida).
*/
