/*
*████─████─███─████─████─████──████─████─███─███────████─█─█─████─█──█─████─████─████──████─███
*█──█─█──█─█───█──█─█──█─█──██─█──█─█──█─█───█──────█──█─█─█─█──█─██─█───██─█──█─█──██─█──█─█──
*█──█─████─███─████─████─█──██─█──█─████─███─███────████─█─█─████─█─██──██──████─█──██─█──█─███
*█──█─█────█───█─█──█──█─█──██─█──█─█─█──█─────█────█──█─███─█──█─█──█─██───█──█─█──██─█──█───█
*████─█────███─█─█──█──█─████──████─█─█──███─███────█──█──█──█──█─█──█─████─█──█─████──████─███
*/

//*************************************************/
//*             Operadores Avanzados              */
//*************************************************/
/*
Sugar Syntax
A medida que el lenguaje va evolucionando con el tiempo, aparecen nuevos operadores que nos permiten resolver tareas recurrentes de forma simplificada. Es normal que vayan surgiendo con las nuevas versiones de JS nuevas herramientas que nos permitan optimizar el código que escribimos.
Sugar Syntax es el nombre que se le da a estos operadores que funcionan como simplificaciones de tareas más complejas. El operador ++ es un ejemplo de esto:

let num = 10


- aumentar en 1 el valor
num = num + 1


- primera simplificacion
num += 1


- o bien
num++


La operación es aumentar el valor de la variable en 1 y tenemos distintas opciones para lograr lo mismo. Salvo la primera, las otras dos son ejemplos de sugar syntax, donde se aplican operadores que se crean para simplificar la tarea anterior. Nótese que el resultado es escribir una operación compleja con mucho menos código, lo cual nos permite pensar soluciones en un nivel más alto, ya que estamos trabajando con un mayor nivel de abstracción resumiendo una tarea compleja en un operador sencillo.
*/

//*************************************************/
//*              Operador ternario                */
//*************************************************/
/*
El operador ternario es una simplificación de la estructura condicional if…else. Cuando nos encontramos frente a una estructura del tipo condición - caso 1 - caso 2, podemos utilizar el operador ternario para simplificarlo. Es decir, el ternario significa que es un condicional que consta sí o sí de tres partes: la condición, el caso de ejecución en caso que se cumpla, y el caso else si no se cumple. Por ejemplo:

let temperatura = 31


if (temperatura > 30) {
  alert("Día caluroso!")
} else {
  alert("Día agradable")
}

El operador ternario tiene la siguiente sintaxis:

condicion  ?  caso1  :  caso2

En este caso, lo que está a la izquierda del signo ? es la condición, la cual resuelve true o false; a la derecha se escribe la instrucción a ejecutar si la condición es verdadera, y luego del : se escribe la instrucción si la condición es falsa. Nótese que es una sintaxis para estructuras simples, donde la condición es generalmente pequeña y los casos a resolver también. Con un operador ternario el ejemplo anterior quedaría así:

temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")

Algo interesante que ofrece el operador ternario es un return implícito para cada caso. Es decir, no sólo ejecuta la instrucción resuelta, sino que hace return de la misma. Esto es muy útil cuando queremos retornar valores de forma condicional, lo cual con una estructura tradicional sería más extenso. Por ejemplo:

let permiso


if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}


if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}

Al tener una variable cuyo valor inicial depende del resultado de un condicional, vemos que primero debemos declarar la variable y luego evaluar cual va a ser el valor a asignarle. Con el operador ternario podemos reducir esto a una sola línea ya que hacemos return de uno de los casos, y por lo tanto lo asignamos en la declaración:

const usuario = {
  nombre: "John Doe",
  edad: 22
}


- declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false


- mostramos el mensaje
permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")

Nótese lo simple y clara que se vuelve la escritura de esta forma cuando trabajamos con condicionales sencillos que se pueden traducir en un operador ternario. Para estructuras más complejas de control de flujos recaemos en la estructura if tradicional y está bien que así sea. Lo importante es remarcar la ventaja de este tipo de operadores y saber aplicarlos con precisión.
*/

//*************************************************/
//*                 Operador AND                  */
//*************************************************/
/*
El operador lógico AND ( && ) también es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera. Es decir, es una reducción de unif sencillo con un solo bloque de ejecución:

const carrito = []


if (carrito.length === 0) {
  console.log("El carrito está vacío!")
}


- con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")

- Todos estos operadores también tienen return implícito, por lo que se puede utilizar para enviar o asignar valores:

const usuario = {
  nombre: "John Doe",
  edad: 14
}


const registroIngreso = usuario.edad >= 18 && new Date()


console.log(registroIngreso)


En este ejemplo, si el usuario tiene edad mayor o igual que 18 se almacena una nueva fecha en la variable. En el caso de que la condición resulte falsa, el operador AND retornará false en cambio

const usuario = {
  nombre: "John Doe",
  edad: 14
}


const registroIngreso = usuario.edad >= 18 && new Date()


console.log(registroIngreso) // FALSE
*/

//*************************************************/
//*                Operador  OR                   */
//*************************************************/
/*
El operador lógico OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita:

operando1 || operando2

El operador OR retorna el operando de la izquierda si no es falsy, y si no retorna el de la derecha. Es decir, si el operador de la izquierda es distinto de 0, null, undefined, NaN, false,  o string vacío; entonces retorna ese operando, y sino retorna el de la derecha. Esto es muy versátil para condicionar asignaciones de variables o de parámetros de forma sencilla.

const usuario1 = {
  nombre: "John Doe",
  edad: 14
}
const usuario2 = null


console.log( usuario1 || "El usuario no existe" )
- { nombre: 'John Doe', edad: 14 }
console.log( usuario2 || "El usuario no existe" )
- El usuario no existe

Es útil cuando quiero inicializar variables de forma condicionada, evaluando algún valor previo. Por ejemplo, si quiero recuperar el último estado de un carrito de compras del usuario almacenado en localStorage al iniciar mi app, debería hacer algo como lo siguiente:

let carrito


let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )


if (carritoLocalStorage) {
  carrito = carritoLocalStorage
} else {
  carrito = []
}

Según si hay algún carrito guardado o no en localSotrage, mi variable carrito se inicia con ese valor recuperado o como un array vacío. Con el operador || puedo simplificar esto en una instrucción sencilla y clara:


const carrito = JSON.parse(localStorage.getItem('carrito')) || []

Si no hay nada guardado en localStorage (es decir, obtengo null en la izquierda) se retorna el array vacío de la derecha, y sino se retorna lo recuperado del LS.
*/

//*************************************************/
//*        Acceso condicional a un objeto         */
//*************************************************/
/*
Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error. Sin embargo, podemos utilizar el operador ? sobre la referencia de un objeto para condicionar su acceso y tener un mejor control de errores.

const usuario = null


console.log( usuario.nombre || "El usuario no existe" )
- Error: "No se pueden leer propiedadesde NULL"


console.log( usuario?.nombre || "El usuario no existe")
- "El usuario no existe"


En este caso, usuario.nombre retorna un error de acceso, ya que no se puede leer propiedades de null; pero usuario?.nombre retorna undefined en cambio, y permite trabajar el acceso de forma condicional evitando errores en la ejecución. 
El operador ? también puede aplicarse sobre propiedades que sean objetos, para evaluar su existencia/validez y controlar los flujos del programa.

const usuario = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado"
  }
}


console.log( usuario?.cursos?.javascript || "La propiedad no existe")

- "aprobado"
console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")

- "La propiedad no existe"
*/