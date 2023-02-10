/*
*███─█──█─████──███─██─██─████─███
*─█──██─█─█──██─█────███──█──█─█──
*─█──█─██─█──██─███───█───█──█─███
*─█──█──█─█──██─█────███──█──█─█──
*███─█──█─████──███─██─██─████─█──
*/

/*
El método indexOf() nos permite obtener el índice de un elemento en un array siempre y cuando éste exista en el mismo. Recibe por parámetro el elemento que queremos buscar en el array y de existir nos retorna su índice. En el caso de que el elemento no exista, nos retornará como valor un -1 que significa que no se encontró el elemento buscado:
*/

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Miguel') ) // ⇒ 2
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1

/*
Sabiendo que si el valor que le paso no se encuentra en el array obtengo un -1, puedo usar esto para condicionar una función que me permita eliminar cualquier elemento del array pasándolo por parámetro, en una combinación del método indexOf() con el método splice():
*/

const nombres2 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre)
    if (index != -1 ) {
        nombres2.splice(index, 1)
    } 
}

/*
En este ejemplo escribo una función que reciba un nombre por parámetro. Hago un indexOf sobre el array de ese nombre para obtener el índice del mismo en el array. Si el index obtenido es diferente de -1 (lo que significa que existe el elemento en el array) hago un splice con ese índice y borro un elemento desde esa posición; o sea borro exactamente el elemento que pasé por parámetro.
*/


