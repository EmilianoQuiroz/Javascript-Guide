/*
*███─███─████─████─███────████──███────███─█─█─███─█──█─███─████─███
*─█───█──█──█─█──█─█──────█──██─█──────█───█─█─█───██─█──█──█──█─█──
*─█───█──████─█──█─███────█──██─███────███─█─█─███─█─██──█──█──█─███
*─█───█──█────█──█───█────█──██─█──────█───███─█───█──█──█──█──█───█
*─█──███─█────████─███────████──███────███──█──███─█──█──█──████─███
*/

//*************************************************/
//*        Tipos de eventos en javascript         */
//*************************************************/
/*
Si bien ya sabemos como definir los eventos a escuchar en la aplicación, determinar cuál utilizar comprende reconocer bajo qué condiciones se dispara cada evento. Esto puede ser una tarea inicial un tanto extenuante, ya que son bastantes los eventos estándar (que funcionan en todos los navegadores) definidos en las especificaciones oficiales, Por ende, se recomienda empezar con los eventos que son más empleados en el desarrollo web, entre los cuales distinguimos distintos tipos:
*/

//*************************************************/
//*              Eventos del Mouse                */
//*************************************************/
/*
Los eventos del mouse, llamados MouseEvent, son aquellos que se producen por las acciones del usuario con el mouse. De los eventos clasificados en esta categoría, los más utilizados son:

1. Mousedown: se dispara cuando se oprime un botón del ratón sobre un elemento.
2. Mouseup:  se dispara cuando se suelta un botón del ratón sobre un elemento.
3. Mouseover: se dispara cuando el puntero del mouse se posiciona sobre un elemento.
4. Mouseout:  el puntero del mouse se sale del elemento.
5. Mousemove: el movimiento del mouse sobre el elemento activa el evento.
6. Click: se activa al disparar el evento  mousedown o mouseup sobre un elemento.

Veamos ahora un ejemplo de definición de evento de tipo mouse: 

- CODIGO HTML DE REFERENCIA
<button id="btnMain">CLICK</button>

- CODIGO JS
let boton = document.getElementById("btnMain");
boton.onclick = () => {console.log("Click")};
boton.onmousemove = () => {console.log("Move")}
*/

//*************************************************/
//*             Eventos del Teclado               */
//*************************************************/
/*
Los eventos de teclado o KeyboardEvent, ocurren ante una interacción del usuario con el teclado. Este tipo de eventos permite determinar cuando el usuario presiona una tecla, siendo muy útil para controlar entradas que el mismo haga sobre etiquetas input. De este tipo de eventos destacamos: 

- Keydown: se dispara cuando se presiona una tecla sobre el elemento.
- Keyup: se dispara cuando se suelta una tecla sobre el elemento.

Veamos ahora un ejemplo de definición de evento de tipo teclado: 

- CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">
<input id = "edad"   type="number">

- CODIGO JS
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onkeyup   = () => {console.log("keyUp")};
input2.onkeydown = () => {console.log("keyDown")};

Podemos notar en los ejemplos de eventos de mouse y teclado que empleamos las propiedades on-event para definir el manejador de eventos. Optamos por funciones flechas, y una salida por consola en respuesta, porque nos permite hacer un código más acotado,  con la finalidad de exponer un ejemplo sencillo. No obstante, ante el desarrollo de la propia aplicación, se espera que en los manejadores de eventos se realice un procesamiento significativo, transformando las entradas mediante operaciones y efectuando al menos una salida por el DOM en respuesta.
*/

//*************************************************/
//*                Evento Change                  */
//*************************************************/
/*
El evento change se activa ante un cambio de valor en elementos de tipo <input>, <select>, y <textarea>.  Su principal utilidad es poder determinar cuándo el nuevo valor es confirmado por el usuario. Por ejemplo, mientras estamos escribiendo en un input de tipo texto, no hay evento change, ya que no se dispara por cada caracter ingresado en la caja; pero cuando salimos del input modificado, pasando a otro input o sección de la aplicación, el nuevo valor se asume como confirmado disparando entonces el evento change.

A continuación, podemos observar cómo asignar el manejador de eventos empleando la propiedad onchange: 

- CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">
<input id = "edad"   type="number">

- CODIGO JS
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

El evento change nos sirve para generar funciones que evalúen el value de los inputs, es decir su valor actual (el texto ingresado u opción seleccionada) y generar efectos de UI con la interacción del usuario. Si queremos trabajar con cada ingreso (tipeo) del usuario, es recomendable utilizar el evento input (oninput) para ello.
*/

//*************************************************/
//*                Evento Submit                  */
//*************************************************/
/*
El evento submit se activa cuando un elemento de tipo formulario (<form></form>) es enviado. Este evento normalmente se utiliza para validar el formulario antes de ser enviado al servidor, o bien para abortar el envío y procesarlo con JavaScript de forma asíncrona. Veamos ahora un ejemplo codificado:

- CODIGO HTML DE REFERENCIA
 <form id="formulario">
      <input type="text">
      <input type="number">
      <input type="submit" value="Enviar">
 </form>

 - CODIGO JS
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}

Podemos observar en el manejador de eventos una línea adicional; al recibir el parámetro cuyo identificador es “e”, llamamos en la primera línea de la función al método preventDefault. ¿Por qué? Esto se debe a que el método nos permite cancelar el comportamiento por defecto en respuesta al evento submit, el cual incluye refrescar la página actual. Como estamos programando aplicaciones interactivas, y pretendemos mostrar salidas al usuario sin que se refresque la página, es necesario emplear las mencionadas instrucciones.  
Tenemos que identificar que refrescar la página actual es el equivalente en aplicaciones web a “reiniciar la aplicación”, y si no se establecen mecanismos de guardado previo (por ejemplo usando storage), la información producida por el usuario antes del envío del formulario se pierde. Por esta razón, particularmente ante el evento submit, es necesario emplear el preventDefault; pero ¿de dónde salió el parámetro “e”? Esto lo veremos en la siguiente sección.
*/
