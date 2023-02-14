/*
*████─████─████─███─███─████────████─█──────████──████─█───█
*█──█─█──█─█──█─█───█───█──█────█──█─█──────█──██─█──█─██─██
*████─█────█────███─███─█──█────████─█──────█──██─█──█─█─█─█
*█──█─█──█─█──█─█─────█─█──█────█──█─█──────█──██─█──█─█───█
*█──█─████─████─███─███─████────█──█─███────████──████─█───█
*/

//*************************************************/
//*                Acceso al DOM                  */
//*************************************************/
/*
Como desarrolladores/as front-end, empleamos el DOM para modificar la interfaz del usuario, controlando las acciones que realiza en la página web con la intención de obtener entradas, y en consecuencia efectuar salidas apropiadas. Para operar sobre el DOM en JavaScript, empleamos el objeto de acceso global document:
*/

console.dir(document);
console.dir(document.head)
console.dir(document.body);

/*
Podemos emplear el método console.dir() para obtener un detalle por consola de las propiedades y métodos que componen dicho objeto. Mediante la propiedad head podemos acceder al nodo <head> del HTML, y mediante body al correspondiente nodo <body>. Esta última referencia será posible sólo si el script utilizado se encuentra referenciado en la página web antes de la cláusula de la etiqueta body, como observamos a continuación:

<body>
    <h2>Acceso al DOM</h2>
    <script src="js/main.js"></script>
</body>

Utilizaremos algunos métodos de document con la intención de obtener, y posiblemente modificar, los nodos y sus propiedades. Inicialmente, identificamos tres formas de acceso a los elementos del DOM:

- Por identificador único: acceder a un elemento de la página empleando el valor del atributo id, el cual  se utiliza para especificar un identificador único asociado a una sola  etiqueta del documento  HTML.
- Por clase: acceder a uno o más elementos de la página empleando el valor del  atributo class, utilizado para especificar un identificador asociado a un grupo de etiquetas del documento  HTML.
- Por etiqueta: acceder a uno o más elementos de la página, usando el nombre de la etiqueta empleada (<p>, <div>, <h2>, etcétera).
Por cada forma de acceso, se cuenta con un método que podemos utilizar.
*/

//*************************************************/
//*      Obtener elemento por identificador       */
//*************************************************/
/*
El método getElementById() sirve para acceder a un elemento del HTML, utilizando el valor del atributo id. Por ejemplo: 

- CODIGO HTML DE REFERENCIA
<div id = "app">
<p id = "parrafo1" >Hola Mundo</p>
</div>

- CODIGO JS
let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

El único parámetro de método getElementById es un string que debe ser igual al valor del identificador a obtener. El método nos permite obtener un único elemento, que coincide con el notificador enviado. En caso de no existir un elemento que cumpla la igualdad, se obtiene null.

Podemos obtener la estructura interna (es decir, las etiquetas anidadas) del elemento obtenido empleando la propiedad innerHTML
*/

//*************************************************/
//*          Obtener elemento por clase           */
//*************************************************/
/*
El método getElementsByClassName() sirve para acceder a un conjunto de elementos del HTML, utilizando el valor del atributo class. Por ejemplo:

- CODIGO HTML DE REFERENCIA
 <ul>
      <li class="paises">AR</li>
      <li class="paises">CL</li>
 	<li class="paises">UY</li>
 </ul>

- CODIGO JS
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

La llamada al método retornará un conjunto de elementos con todas las coincidencias. Para acceder a cada uno de los nodos encontrados, debemos manejar el acceso de forma similar a un array.
*/

//*************************************************/
//*        Obtener elemento por etiqueta          */
//*************************************************/
/*
El método getElementsByTagName() sirve para acceder a un conjunto de elementos del HTML, utilizando el nombre de etiqueta como criterio de búsqueda, por ejemplo: 

- CODIGO HTML DE REFERENCIA
<div>
<div>CONTENEDOR 2</div>
     <div>CONTENEDOR 3</div>
</div>
- CODIGO JS
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

Esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML, siendo difícil establecer un criterio adicional para  diferenciarlas entre sí al no emplear id o class.
Por último, cabe aclarar que los elementos obtenidos mediante getElementsByTagName y getElementsByClassName se encuentran contenidos en un array especial identificado como HTMLCollection, que podemos iterar con for...of con la intencion de acceder a todos los elemento obtenidos con un recorrido:

let paises       = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises) {
    console.log(pais.innerHTML);
}
for (const div of contenedores) {
    console.log(div.innerHTML);
}
*/