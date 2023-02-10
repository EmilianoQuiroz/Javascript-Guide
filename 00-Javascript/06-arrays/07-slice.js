/*
*███─█───███─████─███
*█───█────█──█──█─█──
*███─█────█──█────███
*──█─█────█──█──█─█──
*███─███─███─████─███
*/

//*************************************************/
//*          Metodo Slice en Javascritp           */
//*************************************************/
/*
Este método retorna un nuevo array, que representa una copia de una parte de otro, un corte del array. Como parámetros, se envían dos índices: primero un índice inclusivo, que significa la posición desde donde iniciamos el corte, y segundo un índice excluyente que significa el final del corte:
*/

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
// array desde la posición 1 (inclusivo) a 3 (excluyente)
// es decir, elementos en posición 1 y 2
// masculinos contiene ['Pedro','Miguel']

/*
En este caso, el nuevo array se genera desde la posición 1 a la 3, pero lo que hay que tener en cuenta es que la segunda posición enviada no se incluye en el array retornado. Es decir que el valor en la posición 3 no forma parte de la copia.
Hay que observar que en ningún momento se está modificando el array nombres, sino que se crea un nuevo array que asignamos a la variable masculinos. Pero el array original sigue conteniendo los mismos valores. Para eliminar un elemento de un array podemos usar el método splice.
*/