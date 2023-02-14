/*
*███─█─█─███─█──█─███─████─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█───█─█─█───██─█──█──█──█─█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*███─█─█─███─█─██──█──█──█─███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*█───███─█───█──█──█──█──█───█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*███──█──███─█──█──█──████─███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*            Eventps en Javascript              */
//*************************************************/
/*
?Evento: definición
Los eventos son la manera que tenemos en Javascript de controlar las acciones del usuario, y definir el comportamiento de la aplicación en respuesta a las mismas. Supongamos que el usuario hace clic sobre un botón de la interfaz: a esta situación se la identifica como evento.

Elementos del DOM y el navegador cuentan con eventos asociados, los cuales podemos utilizar para establecer la interpretación de un bloque de instrucciones cuando ocurren. El tiempo en el que un evento pasa (o “se dispara”, como se suele decir) puede variar, ya que en la mayoría de los casos depende de un comportamiento del usuario sobre la interfaz. Por dicha razón,  la respuesta a un evento, la cual se define en forma de función y se la suele llamar manejador de eventos o  "event handlers", se interpreta automáticamente cuando el evento ocurre.

Si bien un elemento del DOM cuenta con un conjunto de eventos posibles, es responsabilidad del programador/ra definir qué eventos se van a controlar en la página con JavaScript. Esto se realiza asociando un manejador de eventos al evento escogido, procedimiento que cuenta con tres alternativas de declaración que desarrollaremos en los siguientes párrafos.
*/

//*************************************************/
//*       Definiendo eventos con JavaScript       */
//*************************************************/
/*
Para determinar en el script qué eventos vamos a controlar en la página web (también se puede decir “eventos a escuchar en la página web”), es necesario emplear una de las tres notaciones presentadas a continuación. 
Por fines explicativos, cabe aclarar que el código JavaScript se encuentra en el documento HTML, entre etiquetas <script></script>, pero a esta altura del curso se recomienda codificar la lógica de la aplicación siempre en un archivo .js aparte. Habiendo dicho esto, analicemos las tres notaciones disponibles para determinar el control de un evento. Con el objetivo de percibir diferencias de declaración, en todos los ejemplos se escucha el evento click sobre un botón.
*/

//*************************************************/
//*              AddEventListener                 */
//*************************************************/
/*
El método addEventListener permite definir qué evento escuchar sobre cualquier elemento del DOM. El primer parámetro corresponde al nombre del evento, y el segundo a la función de respuesta.  El manejador de eventos puede ser una función con nombre,  anónima o función flecha. Veamos ahora un ejemplo de codificación de esta opción: 

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>AddEventListener</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
                console.log("Respuesta evento");
      }
    </script>
  </body>
</html>

Como podemos observar, primero obtenemos el elemento sobre el cual queremos definir el evento; en este adquirimos la referencia al botón empleando el método getElementById. Realizada dicha instrucción, podemos emplear la variables botón para llamar al método addEventListener, enviando los parámetros necesarios.
Gracias a estas instrucciones, cada vez que el usuario haga un clic en el botón cuyo id es btnPrincipal, se efectuará una salida por consola con el mensaje “Respuesta evento”.
*/

//*************************************************/
//*                   OnEvent                     */
//*************************************************/
/*
Podemos emplear una propiedad on-event para asignar el manejador de evento, definiendo la respuesta al evento escogido.  Para reconocer el identificador de la propiedad,  utilizamos el nombre del evento y el prefijo on, siendo en el caso del evento click la propiedad onclick. Veamos el ejemplo correspondiente: 

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Coder House</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}
    </script>
  </body>
</html>

En la opción 2, también obtenemos el elemento sobre el cual queremos definir el evento, pero en este caso utilizamos el acceso por propiedad boton.onclick, y asignamos una función flecha como manejador. Gracias a estas instrucciones, cada vez que el usuario realice un clic en el botón cuyo id es btnPrincipal se efectuará una salida por consola con el mensaje “Respuesta 2”.


*/