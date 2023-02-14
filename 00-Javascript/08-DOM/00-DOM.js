/*
*████──████─████─█─█─█───█─███─█──█─███────████─████────██─███─███────█───█─████─████──███─█──
*█──██─█──█─█──█─█─█─██─██─█───██─█──█─────█──█─█──██────█─█────█─────██─██─█──█─█──██─█───█──
*█──██─█──█─█────█─█─█─█─█─███─█─██──█─────█──█─████─────█─███──█─────█─█─█─█──█─█──██─███─█──
*█──██─█──█─█──█─█─█─█───█─█───█──█──█─────█──█─█──██─█──█─█────█─────█───█─█──█─█──██─█───█──
*████──████─████─███─█───█─███─█──█──█─────████─████──████─███──█─────█───█─████─████──███─███
*/

//*************************************************/
//*               DOM: Definicion                 */
//*************************************************/
/*
El Modelo de Objetos del Documento (DOM) es una estructura que representa al documento HTML, y que podemos utilizar desde JavaScript para modificar la página actual. Todos los navegadores construyen el DOM de forma automática, estableciendo un objeto por cada etiqueta del HTML, así como una relación de jerarquía en función de la disposición de las etiquetas anidadas. Supongamos ahora que tenemos el siguiente documento HTML:

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Document Objet Model</h2>
  </body>
</html>

Cuando la página se carga en el navegador, se genera el DOM constituido por una jerarquía de objetos (comúnmente llamada jerarquía de nodos) que el programador/a puede emplear para explorar la estructura de la página web, realizar salidas y capturar entradas.

Existe una organización de los elementos del DOM teniendo en cuenta las etiquetas creadas dentro de otra etiqueta (anidamiento). Esta situación determina relaciones de jerarquía entre los elementos llamadas relaciones de padre-hijo, donde la etiqueta que contiene a otras se identifica como padre, y sus etiquetas anidadas como hijo. Analicemos la siguiente estructura para focalizar más en detalle el significado de esta relación:

<p>Esta página es <strong>muy sencilla</strong></p>

Como podemos observar, la etiqueta párrafo (<p>) contiene dentro de sí una etiqueta <strong>; al momento de crearse el DOM se instancia un objeto (nodo) por cada etiqueta y se determina que el nodo <p> es padre del nodo <strong>, porque <strong> está dentro de <p>.

? Debemos tener presente algunas particulares cuando hablamos del DOM:
- El DOM es independiente del lenguaje de programación: como tecnología empleada para representar documentos HTML en estructuras manipulables e integrada en todos los navegadores, cuenta con su propio estándar bien definido  (DOM Standard), y puede utilizarse desde cualquier lenguaje de programación (JavaScript, Python, PHP, etcétera).
- Cada nodo del DOM tiene propiedades y métodos propios: siendo los nodos del DOM objetos, dispone de propiedades y métodos que podemos utilizar para modificarlos, eliminarlos o agregar nuevos nodos.
- El DOM se crea en el cliente: cuando el intérprete (navegador) realiza la lectura del documento HTML, genera el DOM. Dado que este último puede modificarse empleando instrucciones JavaScript, el tiempo de construcción de dicha estructura puede variar. Podemos analizar el DOM desde el cliente empleando herramientas como Live DOM Viewer, DOM node tree viewer, o en la propia consola para desarrolladores en la pestaña “Elements

?Tipos de nodos
Dijimos que en el DOM se crea un objeto al que llamamos “nodo”, por cada elemento del HTML.  Existen distintos tipos de nodos, entre los cuales identificamos los siguientes como esenciales:
- Document: Nodo raíz, del cual derivan todos los demás nodos del árbol.
- Element: Representa cada una de las etiquetas HTML. Estos tipos de nodos son los únicos que pueden contener atributos, y de los cuales pueden derivar otros nosdos. 
- Attr: Representa los atributos de las etiquetas HTML, es decir, un nodo por cada atributo=valor.
- Text: Es el que contiene el texto incluido en una etiqueta HTML.
- Comment: Representa los comentarios de la página.
*/






