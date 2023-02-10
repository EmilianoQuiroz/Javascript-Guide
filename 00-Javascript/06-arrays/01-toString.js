/*
*███─████─███─███─████─███─█──█─████
*─█──█──█─█────█──█──█──█──██─█─█───
*─█──█──█─███──█──████──█──█─██─█─██
*─█──█──█───█──█──█─█───█──█──█─█──█
*─█──████─███──█──█─█──███─█──█─████
*/

//*************************************************/
//*           toString en Javascript              */
//*************************************************/
/*
El método toString convierte un array en un string, compuesto por cada uno de los elementos del array separados por comas. Es muy útil cuando queremos incluir el detalle de los elementos del array en una salida (console.log o alert). No obstante, hay que tener en cuenta que esta transformación no se realiza adecuadamente cuando hacemos toString a un array de objetos personalizados. En el siguiente ejemplo vemos cómo podemos emplear el métodos toString para obtener una cadena desde un valor mixto:
*/

const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.toString() );//imprime "marca,3,palabra"
