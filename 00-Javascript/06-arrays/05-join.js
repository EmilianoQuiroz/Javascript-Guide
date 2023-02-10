/*
*──██─████─███─█──█
*───█─█──█──█──██─█
*───█─█──█──█──█─██
*█──█─█──█──█──█──█
*████─████─███─█──█
*/

//*************************************************/
//*          Metodo Join en Javascritp            */
//*************************************************/
/*
Mediante este método podemos juntar todos los elementos de un array en una cadena string, indicando como parámetro el separador para esos elementos. Al igual que toString(), la nueva cadena creada comprende todos los elementos del array, con la diferencia de que en vez de estar separados por coma, se utiliza la subcadena por parámetro (o delimitador) para separar los elementos en la cadena resultante:
*/

const otroArray = ["hola", 22, "mundo"];
console.log(otroArray.join("*")); //Imprime "hola*22*mundo"

/*
Hay que tener en cuenta que esta transformación, al igual que en toString, no se realiza adecuadamente cuando hacemos join a un array de objetos personalizados.
*/