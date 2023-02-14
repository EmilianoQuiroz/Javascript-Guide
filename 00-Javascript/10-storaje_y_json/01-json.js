/*
*──██─███─████─█──█────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*───█─█───█──█─██─█────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*───█─███─█──█─█─██────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*█──█───█─█──█─█──█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*████─███─████─█──█────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*             Json en Javascript                */
//*************************************************/
/*
Mencionamos anteriormente que tanto la clave como el valor se almacenan como string. Esto implica que cualquier otro tipo de dato, como un número o un objeto, se convierte a cadena de texto automáticamente al momento de guardarse con setItem. Esta situación puede generar ciertas inconsistencias en los datos almacenados, principalmente en los objetos, ya que su transformación a string por defecto es la cadena “[object Object]”, como vemos en siguiente ejemplo:

const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]

Entonces necesitamos un formato que nos permita almacenar la información de un objeto en una cadena de texto: ese es JavaScript Object Notation (JSON). Se trata de un formato de texto plano, que sirve para representar datos estructurados con la sintaxis de objetos de JavaScript. Es muy utilizado para enviar y almacenar datos en aplicaciones web.

Aunque es muy parecido (casi similar) a la sintaxis de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir, parsear) y generar JSON.

Decimos que JSON es un string con un formato específico, lo que implica que si quiero crear un objeto usando la información de esta cadena, o transformar un objeto en un string JSON, existe un proceso de conversión Objeto-JSON y JSON-Objeto.
*/

//*************************************************/
//*           Convertir objetos a JSON            */
//*************************************************/
/*
Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON. Es posible emplear el método de la siguiente manera:

const producto1 = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
- Se guarda {"id":2,"producto":"Arroz"}

Como podemos observar, contamos con un objeto global llamado JSON que nos permite realizar esta transformación usando el método stringify, el cual acepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente. Este proceso se realiza cuando quiero almacenar la información de un objeto correctamente en storage, o deseo enviar los datos del objeto al servidor  para ser procesados.
*/

//*************************************************/
//*           Convertir JSON a objetos            */
//*************************************************/
/*
Con JSON.parse podemos transformar string en formato JSON, a objeto JavaScript. Es posible emplear el método de la siguiente manera:

const enJSON    = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON);     // string
console.log(typeof producto1);  // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);  // 2  

Como podemos observar, utilizamos el método parse cuando tenemos una cadena en formato JSON, ya sea del storage o desde un variable, y necesitamos un objeto creado a partir de estos datos. El método recibe el string como parámetro, y devuelve el objeto JavaScript correspondiente. Este proceso se realiza cuando queremos recuperar información de un objeto almacenado en storage o para obtener datos del servidor con formato de texto plano.

*/