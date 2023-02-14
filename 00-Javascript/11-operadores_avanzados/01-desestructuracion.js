/*
*████──███─███─███─███─███─████─█─█─████─███─█─█─████─████─████─███─████─█──█
*█──██─█───█───█───█────█──█──█─█─█─█──█──█──█─█─█──█─█──█─█──█──█──█──█─██─█
*█──██─███─███─███─███──█──████─█─█─█─────█──█─█─████─████─█─────█──█──█─█─██
*█──██─█─────█─█─────█──█──█─█──█─█─█──█──█──█─█─█─█──█──█─█──█──█──█──█─█──█
*████──███─███─███─███──█──█─█──███─████──█──███─█─█──█──█─████─███─████─█──█
*/

//*************************************************/
//*              Desestructuracion                */
//*************************************************/
/*
Muchas veces queremos acceder a propiedades de objetos y almacenarlas en variables diferentes para un posterior uso. Típicamente haríamos algo como lo siguiente para esto:

const usuario = {
    nombre: "John Doe",
    edad: 32
}


let nombre = usuario.nombre
let edad = usuario.edad

Declaramos variables y en ellas almacenamos los valores de las propiedades. Hacemos esto para trabajar con inmutabilidad, es decir utilizar esos valores sin riesgo de alterar las propiedades del objeto.
Sin embargo, podemos utilizar la desestructuración para simplificar y agilizar este proceso. ¿En qué consiste? Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa. La sintaxis es la siguiente:

let { prop1, prop2 } = objeto

Nótese las llaves a la izquierda del operador =, esto significa que estamos desestructurando un objeto. Significa que estamos creando dos variables, prop1 y prop2, donde se almacenan las propiedades con el mismo nombre del objeto que referenciamos a la derecha. 
Es decir, los nombres de las variables deben coincidir exactamente con los nombres de las propiedades que queremos obtener del objeto. En el ejemplo anterior, podemos desestructurar el objeto de la siguiente forma:

const usuario = {
    nombre: "John Doe",
    edad: 32
}


const { nombre, edad} = usuario


console.log(nombre) // "John Doe"
console.log(edad) // 32

Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined. Cada propiedad que queramos desestructurar del objeto las declaramos separadas por comas:

const usuario = {
    nombre: "John Doe",
    edad: 32
}


const { telefono } = usuario // undefined

Recordemos que que en este caso y en los anteriores, estamos declarando variables con los nombres nombre, edad, y teléfono; por lo que luego las referenciamos con este nombre.
Si queremos acceder a propiedades más internas dentro de un objeto, es decir desestructurar alguna propiedad que sea a la vez un objeto, es posible hacerlo siguiendo el mismo patrón:

const usuario = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
}

const { nombre, telefono: {trabajo} } = usuario


console.log(nombre) // "John Doe"
console.log(trabajo) // 113325555

En este caso, como telefono es un objeto, desestructuramos la propiedad trabajo de éste, dentro de la desestructuración de usuario. Nótese que finalmente se terminan declarando dos variables, nombre y trabajo.

Alias
Para  que la desestructuración funcione debe haber coincidencia con los nombres de las propiedades del objeto. Sin embargo a veces puede que los nombres de las propiedades no sean muy descriptivos para el uso que queremos darle, y por ello podemos desestructurarlas con un alias, es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto. Esto lo hacemos simplemente con el operador : luego del nombre de la propiedad:

const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}


const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
} = item


console.log(id) // 432
console.log(nombre) // "Some product"
console.log(precio) // 5600

En este caso desestructuramos todas las propiedades de item, pero lo almacenamos en variables denominadas id, nombre, precio, a través del alias que indicamos para cada una.
*/


//*************************************************/
//*        Desestructuracion en parametros        */
//*************************************************/
/*
Si en una función recibimos objetos por parámetros, también es posible desestructurarlos directamente en el llamado, definiendo esto al declarar la función. Por ejemplo, supongamos una función que recibe un objeto producto por parámetro y debe trabajar con sus propiedades id y nombre. 

const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}


const desestructurar = (item) => {
    - desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
}


desestructurar(producto) // 10 Curso Javascript

Sabiendo qué es lo que vamos a recibir y qué necesitamos desestructurar, podemos traducir esto con la siguiente lógica:

- desestructurando lo que reciba por parámetro
const desestructurar = ( {id, nombre} ) => {
    console.log(id, nombre)
}


desestructurar(producto) // 10 Curso Javascript

Otro ejemplo, en este caso capturando las posiciones x e y del objeto evento del click sobre la pantalla, mostrando esas posiciones por consola. Esto es muy útil cuando trabajamos con objetos grandes (como el de evento) y sólo necesitamos pocas propiedades de éste:

window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
})

*/

//*************************************************/
//*          Desestructuracion de Arrays          */
//*************************************************/
/*
Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuración de objetos es que la de arrays es posicional. Es decir, declaramos las variables en orden y estas almacenan los valores de las mismas posiciones del array de referencia:

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


const [a, b] = nombres


console.log(a) // "Juan"
console.log(b) // "Julieta"

No funciona aquí la coincidencia por nombres, sino que se toman los valores según la posición. Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array. Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas:

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


- omito las dos primeras posiciones
const [,, a, b] = nombres


console.log(a) // "Carlos"
console.log(b) // "Mariela"
*/


//*************************************************/
//*                   Spread                      */
//*************************************************/
/*
El operador spread ( … ) es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto. Esto significa cambiar la forma en la que presentamos este array u objeto. Por ejemplo, si paso un array por parámetro a alguna función, ésta recibe el array entero como tal:

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

Vemos que se hace console.log del array entero porque eso enviamos por parámetro. Pero si en cambio enviamos un spread del array, veremos lo siguiente:


const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


- spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela


- equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

Vemos que el resultado del spread es equivalente a enviar los cuatro elementos del array por separado como parámetros. Pues ésto es exactamente lo que hace el spread: al aplicarse sobre un array, en vez de enviarlo como array, envía todos sus elementos como parámetros individuales.
Así, si el array nombres tiene 4 elementos, al hacer console.log( nombres ) estamos enviando 1 parámetro, pero al ejecutar console.log( …nombres ) estamos enviando cuatro parámetros a la función.
Esto es útil cuando tenemos datos ordenados dentro de una colección pero trabajamos con funciones que no funcionan recibiendo arrays, sino una serie de parámetros individuales, como puede ser la función Math.max() o Math.min().
Por ejemplo, si tengo un array de números y necesito saber cuál es el mayor o menor, podría intentar lo siguiente:

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]


console.log( Math.max(numeros) ) // NaN

Recibimos NaN porque la función no admite recibir un array por parámetro, sino que necesita recibir una serie de parámetros numéricos. Con el operador spread podemos solucionar esto, y Math.max() recibirá cada elemento del array como un parámetro individual:

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]


console.log( Math.max(...numeros) ) // 92

También podemos hacer spread de un array dentro de otras estructuras que lo admitan, como puede ser otro array o un objeto. Esto nos permite por ejemplo replicar el contenido de un array dentro de otra estructura al desparramar su contenido dentro. Si lo hacemos dentro de un objeto veremos algo interesante, que cada propiedad toma como nombre el índice de los elementos:

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]


- spread de los dos arrays dentro de otro
const nombres = [...nombres1, ...nombres2]


console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]


- spread del array en un objeto
const nombresObj = {
    ...nombres
}


console.log(nombresObj)
- { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }
*/

//*************************************************/
//*             Spread de objetos                 */
//*************************************************/
/*
Se puede hacer spread de objetos también, pero debe hacerse dentro de una estructura que lo permita, como suele ser otro objeto. Un spread aplicado sobre un objeto presentaría cada par de clave-valor separado por comas, y ésto en una función no sería admisible, pero sí puedo serlo dentro de otro objeto.
Esto suele ser útil cuando queremos replicar o modificar estructuras de objetos, ya que nos permite primero listar todas sus propiedades y valores y luego modificar/agregar las que queramos:

const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}


- lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
    ...usuario1
}


console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }


const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}


console.log(usuario3)
- { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

En el último ejemplo vemos que agregamos una propiedad y que modificamos la propiedad curso. Recordemos que no podemos tener dos propiedades con el mismo nombre, y en tal caso prevalece la última declarada, que es lo que ocurre aquí. El spread de usuario1 lista todas las propiedades, incluida curso, dentro de usuario3, y luego la sobreescribimos con un nuevo valor.

Rest Parameters
El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos recibir una cantidad indeterminada de parámetros.
Supongamos que quiero tener una función para sumar cualquier cantidad de números que reciba por parámetro. 
Puedo hacer esto con el operador spread definiendo rest parameters, lo que significa que mi función va a recibir una cantidad indeterminada de parámetros, pero los va a agrupar dentro de un array con el nombre que defina, y con eso trabajará dentro:

function sumar(...numeros) {
    console.log(numeros)
}


sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]

Vemos que con esta sintaxis el parámetro …numeros se define como un array donde se guardan todos los argumentos enviados que coincidan con esa posición.
De esta forma podemos escribir funciones que reciban múltiples parámetros, sin saber con precisión cuántos serán, pudiendo trabajarlos luego como un array dentro de la función.
Siguiendo el ejemplo anterior, podemos tomar este array numeros y retornar la suma de todos los elementos que reciba con un reduce:

function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}


console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450

*/