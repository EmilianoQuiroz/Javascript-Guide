/*
*███─████─█───███─████─███
*█───█──█─█────█──█──█─█──
*███─████─█────█──█────███
*──█─█────█────█──█──█─█──
*███─█────███─███─████─███
*/

//*************************************************/
//*         Metodo Splice en Javascritp           */
//*************************************************/
/*
El método splice() nos permite eliminar uno o varios elementos de un array en cualquier posición (a diferencia del pop o shift que sólo eliminan al inicio o final). Este método modifica el array original sobre el cuál lo llamo. Splice recibe en principio 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición:
*/

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']

/*
En este ejemplo le digo al método splice(1, 2), que se posicione en el índice 1 del array y desde allí elimine 2 elementos. Esto termina eliminando los elementos en la posición 1 y 2 del array. Si llamo al método con los valores splice(3, 1) terminaría eliminando un solo elemento en el índice 3:
*/

const nombres2 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(3, 1)

console.log(nombres2)
// ['Rita', 'Pedro', 'Miguel', 'Vanesa']

/*
El método splice me sirve para eliminar cualquier elemento del array siempre y cuando conozca su índice. 
*/