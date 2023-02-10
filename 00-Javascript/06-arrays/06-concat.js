/*
*████─████─█──█─████─████─███
*█──█─█──█─██─█─█──█─█──█──█─
*█────█──█─█─██─█────████──█─
*█──█─█──█─█──█─█──█─█──█──█─
*████─████─█──█─████─█──█──█─
*/

//*************************************************/
//*         Metodo Concat en Javascritp           */
//*************************************************/
/*
A veces tenemos la necesidad de unir dos arrays, es decir, crear un nuevo array desde los elementos de dos arrays previamente declarados. Esto lo podemos hacer mediante el método concat, que nos retorna un único array compuesto por los elementos de ambos.
*/

const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)

console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

/*
Es importante identificar que llamamos al método concat desde un array pasando por parámetro la segunda lista. Esta operación no es conmutativa, lo cual implica que los elementos del array desde el cual se llama al método estarán primero que los del array enviado por parámetro.
*/
