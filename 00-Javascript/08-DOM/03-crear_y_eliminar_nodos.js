/*
*████─████─███─████─████─█──█────██─██────███─█───███─█───█─███─█──█─████─████────█──█─████─████──████─███
*█──█─█──█─█───█──█─█──█─██─█─────███─────█───█────█──██─██──█──██─█─█──█─█──█────██─█─█──█─█──██─█──█─█──
*█────████─███─████─████─█─██──────█──────███─█────█──█─█─█──█──█─██─████─████────█─██─█──█─█──██─█──█─███
*█──█─█─█──█───█──█─█─█──█──█──────█──────█───█────█──█───█──█──█──█─█──█─█─█─────█──█─█──█─█──██─█──█───█
*████─█─█──███─█──█─█─█──█──█──────█──────███─███─███─█───█─███─█──█─█──█─█─█─────█──█─████─████──████─███
*/

//*************************************************/
//*           Crear y eliminar nodos              */
//*************************************************/
/*
?Pasos para cambiar mecanismos de una estructurta HTML
- Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
- Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Mundo!</h2>"; 
- Añadir el nodo Element como hijo de body
document.body.append(parrafo);

1. Crear un nodo nuevo con el método createElement: el cual nos permite crear un nuevo nodo, especificando por parámetro el nombre de la etiqueta deseada (en el ejemplo optamos por un párrafo <p></p>).
2. Definir la estructura del nodo creado: ahora que tenemos un nuevo nodo, es necesario determinar cómo estará compuesto el interior del elemento. Esto podemos hacerlo empleando la propiedad innerHTML del nuevo elemento. 
3. Añadir el nodo al DOM: para agregar el elemento creado, es necesario introducirlo como hijo de un elemento existente en el DOM. En el ejemplo analizado, el nodo párrafo se introduce como hijo del nodo body, usando el método append. El método append inserta el nuevo elemento sobre el final del contenido del nodo padre seleccionado; si queremos insertarlo sobre el comienzo podemos utilizar el método prepend de forma similar.

Para eliminar un nodo del DOM basta con seleccionarlo de forma precisa a través de alguno de los métodos vistos y aplicar el método remove() sobre éste:

let parrafo      = document.getElementById("parrafo1");

- Elminando el propio elemento
parrafo.remove()

let paises       = document.getElementsByClassName("paises");

- Eliminando el primer elemento de clase paises
paises[0].remove()

Y ¿por qué necesito crear nodos si podría definir las etiquetas directamente sobre el HTML? La creación del HTML con JavaScript es necesaria cuando la información de la interfaz depende de una estructura de datos, es decir que los valores en variables y objetos determinan cómo el usuario va a utilizar la interfaz, pudiendo actualizar la página web si los datos asociados se modifican. Veamos ahora un ejemplo aplicado:

- Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre      = document.getElementById("personas");
- Array con la información a agregar
let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
- Iteramos el array con for...of
for (const persona of personas) {
    - Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.append(li);
}


Gracias al código anterior, las opciones del listado se crean teniendo en cuenta la información del array. Si se agrega o elimina un elemento de la colección del identificador personas, las opciones generadas también cambiarán. A esta forma de construir el documento HTML se la suele llamar generación dinámica de páginas web o HTML dinámico, y es empleada para construir aplicaciones web interactivas, ya que se supone que la información y la estructura del sitio deben cambiar en respuesta a las acciones del usuario, y la información que este u otros usuario produzcan.
*/