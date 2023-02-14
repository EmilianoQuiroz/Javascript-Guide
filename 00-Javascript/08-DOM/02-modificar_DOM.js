/*
*█───█─████─████──███─███─███─████─████─████────█──█─████─████──████─███
*██─██─█──█─█──██──█──█────█──█──█─█──█─█──█────██─█─█──█─█──██─█──█─█──
*█─█─█─█──█─█──██──█──███──█──█────████─████────█─██─█──█─█──██─█──█─███
*█───█─█──█─█──██──█──█────█──█──█─█──█─█─█─────█──█─█──█─█──██─█──█───█
*█───█─████─████──███─█───███─████─█──█─█─█─────█──█─████─████──████─███
*/

//*************************************************/
//*                  Inner Text                   */
//*************************************************/
/*
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.

- CODIGO HTML DE REFERENCIA
<h1 id=”titulo”>Hola Mundo!</h1>

- CODIGO JS
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”

- Cambio el contenido del elemento
titulo.innerText = “Hola desde el DOM!”
console.log( titulo.innerText ) // “Hola desde el DOM!”

Esto cambiaría el nodo de texto del elemento seleccionado con id “título” en el DOM. Significa que en la pantalla puedo ver reflejado el cambio en la etiqueta.
*/

//*************************************************/
//*                  Inner HTML                   */
//*************************************************/
/*
Similar al innerText, innerHTML permite definir el código html interno del elemento seleccionado. La diferencia con lo anterior, es que al utilizar innerHTML el navegador lo interpreta como código HTML y no como contenido de texto, por lo que puedo asignar como string a la propiedad innerHTML de un elemento un bloque de código html que se reflejará en la forma de una nueva estructura de etiquetas y contenido interno:

- CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>

- CODIGO JS
let container = document.getElementById("contenedor")

- Cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”

- Resultado en el DOM
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>

Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador la interpreta como código html y genera nuevos nodos con su contenido dentro del <div> seleccionado.
*/

//*************************************************/
//*                   ClassName                   */
//*************************************************/
/*
A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases. Esto es de utilidad cuando queremos generar cambios dinámicos en el estilado de elementos, combinando la asignación de clases desde JS con los estilos y clases prearmadas en CSS:

- CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>

- CODIGO JS
let container = document.getElementById("contenedor")

- Cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”

- Cambio el atributo class
container.className = “container row”

- Resultado en el DOM
<div id=”contenedor” class=“container row”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>

!Otras propiedades
De forma similar podemos acceder a otras propiedades y métodos de los nodos que nos permiten modificarlos. Si queremos podemos acceder y modificar los atributos id, style, src, value, etc., de diversos elementos siguiendo un tratamiento similar. Para esto, es importante saber qué queremos cambiar de cada elemento y poder investigar cómo hacerlo. Recuerda que todo lo que se genera en el DOM es accesible y modificable desde JS. 
*/