/*
*███─███─████─████─████───██─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█────█──█──█─█──█─█──█────█─█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*███──█──█──█─████─████────█─███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*──█──█──█──█─█─█──█──█─█──█─█──────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*███──█──████─█─█──█──█─████─███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*             Javascript: Storage               */
//*************************************************/
/*
El storage es un medio de almacenamiento en el cliente, lo cual implica que podemos utilizarlo para guardar información de la aplicación en el navegador del usuario. Es común que aplicaciones web empleen el storage para conservar datos de usuario mientras utilizan el sitio. Podemos comprobar nosotros/as mismos/as que Google emplea dicho recurso desde la consola que desarrolló, en la pestaña aplicación, sección Storage

La información almacenada en el storage tiene la estructura clave-valor:
- Clave: identificador alfanumérico que permite obtener un valor almacenado en el storage.
- Valor: un string con cierto formato (DOMString) que representa la información almacenada.

Podemos pensar al storage como una tabla, donde cada fila está compuesta por dos celdas: la primera es el término para identificar la información guardada, y la segunda la información en sí.
Tenemos dos tipos de storage: uno identificado como temporal, cuya información almacenada existe si la pestaña actual en uso se encuentra abierta, conocido como SessionStorage; y otro donde la información almacenada se conserva, incluso si se cierra el navegador, conocida como LocalStorage.
*/


//*************************************************/
//*                localStorage                   */
//*************************************************/
/*
Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida, o hasta que se borren los datos de navegación del browser. La información persiste aunque reiniciemos el navegador, e incluso el sistema operativo. Además, los datos se comparten entre pestañas, permitiendo que los valores almacenados puedan ser utilizados y actualizados en distintas pestañas del navegador.
Para almacenar un valor en localStorage, y teniendo en cuenta que es un objeto, podemos emplear la llamada al método setItem de la siguiente manera:

-  Método ->  localStorage.setItem(clave, valor)
-  clave = nombre para identificar el elemento 
-  valor = valor/contenido del elemento 
localStorage.setItem('bienvenida', '¡Hola Code!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

Para recuperar la información almacenada en el localStorage, es necesario emplear el nombre de clave como parámetro del método getItem, lo cual no retornara el valor asociado:

let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’

Hay que tener presente que toda la información recuperada del storage es un string, y en consecuencia es necesario parsear algunos tipos de datos para emplearlos adecuadamente.
*/


//*************************************************/
//*               sessionStorage                  */
//*************************************************/
/*
La información almacenada en sessionStorage (variable global preexistente) permanece en el navegador hasta que el usuario cierra la ventana. Los datos sólo existen dentro de la sesión actual. lo cual implica que la información en el sessionstorage no se comparte entre pestañas.
Si abrimos otra pestaña con la misma página, esta  tendrá un sessionStorage exclusivo. No obstante, es posible acceder esta información desde elementos embebidos, como pueden ser iframes en la pestaña (asumiendo que estos tengan el mismo origen).
Para almacenar información en el SessionStorage, empleamos la llamada al método setItem  de la siguiente manera:

- Método ->  sessionStorage.setItem(clave, valor)
- clave = nombre del elemento
- valor = Contenido del elemento
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');

Para recuperar la información almacenada en el sessionStorage, también es necesario emplear el nombre de clave como parámetro del método getItem. Notemos que en este ejemplo, el campo de clave ‘seleccionados’ es un array al momento de almacenarse, pero se recupera del storage como string; en consecuencia, es necesario emplear el método split para recuperar la información, asociando el tipo de dato correcto.

let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera); //boolean;
console.log(typeof email);   //string;

Lo mismo ocurre con el dato con clave  esValido, con el cual para recuperarlo como valor booleano desde el storage (como una string ‘true’ o ‘false’)  empleamos una comparación que nos permite obtener el tipo de dato correcto.

Acceso de tipo objeto y recorrido
Si tenemos presente que localStorage y sessionStorage son objetos globales, es posible crear y acceder a las claves como si fueran propiedades de un objeto. Pero esto no es recomendable por dos motivos:
- Hay eventos asociados a la modificación del storage al emplear setItem, que no funcionan con la asignación de tipo objeto.
- No es posible emplear algunas palabras como claves (por ejemplo length o toString) cuando se crean mediante el acceso de tipo objeto, pero con los métodos getItem y setItem estos  términos funcionan correctamente:

- Guarda una clave
localStorage.numeroPrueba = 5;

- Leer una clave
alert( localStorage.numeroPrueba ); // 5

let clave = 'toString';	 //toString método reservado	
localStorage[clave] = "6"; //No se guarda este dato

Dado que local y session storage son objetos, también es común pensar que podemos recorrer las claves creadas por nosotros con for...in. Pero esta forma de acceso no es muy eficaz, dado que se listan todas las propiedades existentes en el objeto, incluso las existentes por defecto. 
Para distinguir correctamente las claves creadas en el storage por el/la programador/a, debemos emplear el método key, por ejemplo la siguiente manera:

- Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}


Otra opción de recorrido de claves es emplear un for...of sobre las propiedades de los objetos storage usando keys(), luego distinguimos cada propiedad iterada como clave del storage usando el método key().

Eliminar datos del storage
Para eliminar la información almacenada en sessionStorage o localStorage tenemos dos opciones:
- Eliminación por clave: se elimina un único valor en el storage detallando la clave como parámetro del método  removeItem.
- Vaciado: eliminamos toda la información existente en el storage con el método clear().

Veamos un ejemplo de cada implementación:

localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información
*/

