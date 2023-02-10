/*
*████─████─████────██─██────███─█──█─███─███─███
*█──█─█──█─█──█─────███─────█───█──█──█──█────█─
*████─█──█─████──────█──────███─████──█──███──█─
*█────█──█─█─────────█────────█─█──█──█──█────█─
*█────████─█─────────█──────███─█──█─███─█────█─
*/

//*************************************************/
//*       Metodo Pop y Shift en Javascritp        */
//*************************************************/
/*
De manera inversa a los anteriores, tenemos métodos para eliminar un elemento en el inicio o el final del array. El método pop() elimina el último elemento de un array, no importa cuál fuese, mientras que el método unshift() elimina siempre el primer elemento en el array:
*/

const nombres = ["Luis", "Ana", "Julia", "Juan"]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

nombres.shift()
console.log(nombres) // ["Ana", "Julia"]