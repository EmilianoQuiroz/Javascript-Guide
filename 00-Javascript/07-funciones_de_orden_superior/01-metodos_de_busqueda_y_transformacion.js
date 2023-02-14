/*
*█───█─███─███─████─████──████─███────████──███────████──█─█─███─████──█─█─███─████──████────██─██────███─████─████─█──█─███─███─████─████─█───█─████─████─███─████─█──█
*██─██─█────█──█──█─█──██─█──█─█──────█──██─█──────█──██─█─█─█───█──█──█─█─█───█──██─█──█─────███──────█──█──█─█──█─██─█─█───█───█──█─█──█─██─██─█──█─█──█──█──█──█─██─█
*█─█─█─███──█──█──█─█──██─█──█─███────█──██─███────████──█─█─███─█─██──█─█─███─█──██─████──────█───────█──████─████─█─██─███─███─█──█─████─█─█─█─████─█─────█──█──█─█─██
*█───█─█────█──█──█─█──██─█──█───█────█──██─█──────█──██─█─█───█─█──█──█─█─█───█──██─█──█──────█───────█──█─█──█──█─█──█───█─█───█──█─█─█──█───█─█──█─█──█──█──█──█─█──█
*█───█─███──█──████─████──████─███────████──███────████──███─███─█████─███─███─████──█──█──────█───────█──█─█──█──█─█──█─███─█───████─█─█──█───█─█──█─████─███─████─█──█
*/

//*************************************************/
//*      Metodos de buaqueda y transformacion     */
//*************************************************/
/*
Javascript incorpora nativamente varias funciones de orden superior. Específicamente veremos a continuación métodos para operar sobre arrays que trabajan con esta lógica. Los siguientes métodos funcionan siempre iterando sobre el array correspondiente, y reciben una función por parámetro, la cual recibe a la vez el elemento del array que se está iterando. Cada uno de los métodos siguientes están pensados para solucionar problemas recurrentes con los arrays, como puede ser buscar un elemento bajo una condición, filtrar el array, transformarlo, reordenarlo, etc.
*/

//*************************************************/
//*                    For each                   */
//*************************************************/
/*
El método forEach() es similar al ejemplo porCadaUno anterior. Itera sobre el array de referencia y por cada elemento del array ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:
*/

const numeros = [1, 2, 3, 4, 5, 6]


numeros.forEach( (num)=> {
    console.log(num)
} )

//*************************************************/
//*                     Find                      */
//*************************************************/
/*
El método find() recibe una función de comparación por parámetro (es decir, una función que captura el elemento que se está recorriendo y retorne true o false según la comparación que ejecuta). El método retorna el primer elemento del array que cumpla con esa condición:
*/

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]


const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")


console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

/*
Nótese que el find retorna el primer elemento del array que cumpla con la condición enviada, de ahí que podemos almacenarlo en una variable o usarlo de referencia para otro proceso. Si no hay ninguna coincidencia en el array, el método find retorna undefined.
*/

//*************************************************/
//*                    Filter                     */
//*************************************************/
/*
El método filter() recibe, al igual que el find, una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. En caso de no haber coincidencias, retornará un array vacío:
*/

const cursosProgramacion = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]


const resultadoBusqueda = cursosProgramacion.filter((el) => el.nombre.includes('JS'))
const resultadoBusqueda2 = cursosProgramacion.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []

//*************************************************/
//*                     Some                      */
//*************************************************/
/*
El método some() funciona igual que el find(), recibiendo una función de búsqueda, con la diferencia que en vez de retornar el elemento encontrado, el método some retorna true o false según el resultado de la iteración de búsqueda:
*/

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false

//*************************************************/
//*                     Map                       */
//*************************************************/
/*
El método map() se utiliza para crear un nuevo array con todos los elementos del array original, transformados según las operaciones de la función enviada por parámetro. El nuevo array obtenido tiene la misma cantidad de elementos que el array original, pero los elementos que se almacenan son el return de la función enviada por parámetro:
*/

const cursosProgramacionMap = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]


const nombres = cursosProgramacionMap.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

/*
En este ejemplo los elementos del nuevo array son el return de la función enviada al map: la función retorna la propiedad nombre de cada elemento y eso es lo que se almacena en el nuevo array nombres.
Este método se utiliza mucho para transformación de arrays, ya que genera un nuevo array recorriendo el primero. Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado:
*/

const actualizado = cursosProgramacionMap.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})


console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */


//*************************************************/
//*                   Reduc                       */
//*************************************************/
/*
El método reduce() nos permite obtener un único valor tras iterar sobre el array. Es decir, funciona como un método que resume el array a un único valor de retorno. Se utiliza mucho cuando, por ejemplo, queremos acumular la suma de alguna propiedad de los elementos almacenados, u obtener algún resultado general sobre todo el array. 
A diferencia de los métodos anteriores, el método reduce recibe dos parámetros. El primero es la función que ordena qué queremos resumir del array, y recibe primero un parámetro que funciona como acumulador y el segundo es el elemento del array que iteramos. 
*/

const numerosReduce = [1, 2, 3, 4, 5, 6]
const total = numerosReduce.reduce((acumulador, elemento) => acumulador + elemento, 0)


console.log(total) // 21

/*
En este ejemplo, en el acumulador sumamos cada elemento del array, y al terminar la iteración nos devuelve ese resultado. El segundo parámetro del reduce, que aquí se ve como 0, es el valor inicial del acumulador.
Con esto podría, por ejemplo, pensando en un simulacro de compra, sumar el precio de todos los productos elegidos:
*/

const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]


const totalMiCompra = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) // 66250

//*************************************************/
//*                    Sort                       */
//*************************************************/
/*
El método sort() nos permite reordenar un array según un criterio que definamos. Este método es destructivo, es decir que modifica el array sobre el cual se llama. El método recibe una función de comparación por parámetro que recibe dos elementos del array a la vez. La función debe retornar un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.
Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente:
*/

const numerosSort = [ 40, 1, 5, 200 ];
numerosSort.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numerosSort.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

/*
Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascendente o descendente:
*/

const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})

