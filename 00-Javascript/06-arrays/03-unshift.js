/*
*█─█─█──█─███─█──█─███─███─███
*█─█─██─█─█───█──█──█──█────█─
*█─█─█─██─███─████──█──███──█─
*█─█─█──█───█─█──█──█──█────█─
*███─█──█─███─█──█─███─█────█─
*/

//*************************************************/
//*        Metodo unShift en Javascritp           */
//*************************************************/
/*
Similar al push, el método unshift() nos permite agregar un elemento al inicio de un array, sobre su primera posición. Cabe destacar que cuando agregamos elementos al inicio de un array terminamos corriendo (o empujando) el índice de todos los elementos que había, ya que todos se corren un lugar en el array; no así cuando utilizamos push(), donde los elementos previos al agregado se mantienen en su posición:
*/

const miArray = ["marca", 3, "palabra"]
console.log(miArray[1]) // --> 3

miArray.unshift('otro elemento')
console.log(miArray[1]) // --> “marca”

console.log(miArray)
//[“otro elemento”, "marca", 3, "palabra"]

/*
Los métodos de push y unshift pueden recibir varios parámetros, siendo éstos la cantidad de nuevos elementos que quiero agregar al array en el inicio o final:
*/

const nombres = ["Ana", "Julia"]

nombres.push("Juan", "Carlos")
console.log(miArray) // ["Ana", "Julia", "Juan", "Carlos"]

nombres.unshift("Luz", "Clara", "Ricardo")
console.log(nombres) 
// ["Luz", "Clara", “Ricardo”, "Ana", "Julia", "Juan", "Carlos"]

