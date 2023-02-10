/*
*████─█─█─███─█──█
*█──█─█─█─█───█──█
*████─█─█─███─████
*█────█─█───█─█──█
*█────███─███─█──█
*/

//*************************************************/
//*          Metodo Push en Javascritp            */
//*************************************************/
/*
Este método se utiliza para sumar un elemento a un array ya existente, pasando como parámetro el valor (o variable) a agregar. Dicho elemento se agregaría al final del listado, pudiendo enviar cualquier tipo de dato como parámetro al método.
Al igual que en un string, la propiedad length nos sirve para obtener el largo de un array, es decir, cuántos elementos tiene. Cada vez que realizamos push de un elemento, el length del array aumenta en uno:
*/

const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // --> 4
//El array ahora tiene 4 posiciones

console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]
