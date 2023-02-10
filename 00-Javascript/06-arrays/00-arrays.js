/*
*████─████─████─████─██─██─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█──█─█──█─█──█─█──█──███──█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*████─████─████─████───█───███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*█──█─█─█──█─█──█──█───█─────█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*█──█─█─█──█─█──█──█───█───███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*           Arrays en Javascript                */
//*************************************************/
/*
Los arrays (también llamados colecciones) son un tipo de objeto especial que nos permite agrupar elementos. Se utilizan cuando necesitamos contar con un conjunto de valores asociados a un listado. En estas estructuras, podemos guardar cualquier tipo de dato u objeto. Es decir, es posible crear arrays de números, cadenas, booleanos, objetos e incluso un array compuesto por otros arrays (matrices).
Si bien el array es un objeto, para crear una estructura de este tipo no es necesario emplear el constructor (por ejemplo: new Array()), sino que nos basta con usar los corchetes y especificar los elementos que componen la lista separados por coma (,), como podemos observar en el ejemplo:

- Declaraciòn de array vacío
const arrayA = [];
- Declaración de array con nùmeros
const arrayB = [1,2];
- Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
- Declaración de array con booleanos
const arrayD = [true,false,true,false];
- Declaración de array mixto
const arrayE = [1,false,"C4"];



Dado que el array es un objeto, es preferible declarar la variable a la que se asigna esta estructura con la palabra reservada const, para evitar una posible sobre-escritura de la referencia. 
Por otro lado, es importante determinar que los arrays pueden contener elementos heterogéneos, siendo necesario un control por parte del/la programador/a sobre el tipo de elemento a incluir en la colección, con la intención de evitar problemas de procesamiento al momento de operar con elementos de distinto tipo.

Si el array es homogéneo, es decir, todos sus elementos tienen el mismo tipo de dato, no se presenta inconveniente alguno al momento de hacer operaciones entre los valores de la lista. Podemos observar esto en el siguiente array numérico:

const  numeros = [1,2,3,4,5];
let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4; 
let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4

Para acceder a un elemento de array, tenemos que emplear su posición o índice. Dado que los elementos de estas estructuras tienen un orden, para el ejemplo podríamos identificarlo a simple vista de la siguiente manera;

1 es el primer elemento del array.
2 es el segundo elemento del array.
3 es el tercer elemento del array.
4 es el cuarto elemento del array.
5 el quinto elemento del array.

Sin embargo, lo anterior sería una interpretación incompleta para determinar las posiciones reales de los elementos en la lista, porque en los arrays las posiciones inician desde el número 0. Entonces, para identificar el ordenamiento correcto decimos:

1 está en la posición 0 del array.
2 está en la posición 1 del array.
3 está en la posición 2 del array.
4 está en la posición 3 del array.
5 está en la posición 4 del array.

Ahora que tenemos correctamente identificadas las posiciones de los elementos, para acceder a cada uno empleamos el identificador del array seguido de corchetes, y las posiciones entre estos; por ejemplo: numeros[0] ,numeros[1] ,numeros[2], numeros[3] y numeros[4].
También es posible emplear la estructura for para acceder a un elemento del array en cada ciclo. A esta forma de acceso a los elementos se la conoce con el nombre de “recorrido del array”:

const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}

Podemos acceder a todos los elementos en este caso porque hacemos coincidir el valor de la variable de conteo (index) con una posición válida del array. Como el hasta (index < 5)  implica iterar hasta que index tenga un valor igual a 4, y de 0 a 4 existen cinco posiciones en la lista, se puede obtener elemento a elemento sin inconvenientes. En el caso de que quiera acceder con un índice de valor 5 al array, y no existe un elemento para dicha posición, se obtiene undefined.
Recorrer un array de principio a fin es una de las acciones más utilizadas en programación, ya que es la principal ventaja que nos ofrece el tener ordenados en un listado (array) nuestros datos. Hay diversas acciones que podemos aplicar sobre los elementos de un array recorriéndolo, incluidas acciones de búsqueda o filtración sobre el mismo. 
Con el caso anterior, definimos explícitamente el hasta del iterador porque sabemos que consta de 5 elementos en total, pero por lo general no sabemos de forma determinada cuál es el límite de nuestro array. Por ello, recurrimos a la propiedad length del array que nos retorna su longitud, es decir la cantidad de elementos que contiene. Este valor se utiliza como límite de nuestro iterador y nos garantiza poder recorrer un array de principio a fin, sin saber de forma explícita cuántos elementos contiene:

const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < numeros.length; index++) {
    alert(numeros[index]);
}

En este caso, numeros.length retorna el valor de 5, que es la longitud del array y funciona exactamente como el límite para el iterador.
*/