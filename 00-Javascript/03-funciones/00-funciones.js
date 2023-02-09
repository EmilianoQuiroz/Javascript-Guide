/*
*███─█─█─█──█─████─███─████─█──█─███─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█───█─█─██─█─█──█──█──█──█─██─█─█───█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*███─█─█─█─██─█─────█──█──█─█─██─███─███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*█───█─█─█──█─█──█──█──█──█─█──█─█─────█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*█───███─█──█─████─███─████─█──█─███─███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*           Funciones en Javascript             */
//*************************************************/
/*
Definicion:
Las funciones son elementos que creamos con la intención de agrupar instrucciones a ser utilizadas una o más veces, a lo largo del script. En programación, el uso de funciones permite separar un problema en partes más pequeñas, independientes y  reutilizables. Esto quiere decir que los programadores/as pueden programar las tareas de una solución por separado, para luego agruparlas con un orden determinado, y resolver así un problema más complejo.
JavaScript nos brinda un conjunto de funciones base que podemos emplear, algunas de estas ya las aprendimos: son prompt(), console.log() y alert(). Como sabemos, cada una de estas funciones realiza una acción específica: prompt solicita entradas, console.log realiza salidas por consola, y alert envía salidas mediante un cuadro de texto en el navegador. En ejercicios previos, combinamos estos elementos junto a estructuras condicionales y ciclos, para crear programas más complejos; dicho enfoque corresponde a la forma de trabajar con funciones.
*/

//*************************************************/
//*           Declaracion de funciones            */
//*************************************************/
/*
Para crear una función personalizada, tienes que seguir la siguiente forma:

function saludar() {
    console.log("¡Hola mundo!");
}

La estructura previa los siguientes elementos:

- Palabra reservada “function”: término que utilizamos para indicar que estamos creando un función.
- Nombre de la función o identificador: en este caso, el nombre es ”saludar”; al igual que las variables, este nombre es definido por el programador/a, e identifica a la función, determinando la denominación que usamos para emplear la misma en el script.
- Paréntesis (): colocados luego del nombre de la función, nos permiten recibir valores a emplear dentro de la función (también llamados parámetros). En el ejemplo anterior, no se recibe dato alguno, por ende no hay nada dentro de los paréntesis. En ejemplos posteriores veremos cómo usar los llamados parámetros.
- Bloque {}: al igual que con las estructuras vistas anteriormente, todas las instrucciones que definimos dentro del bloque serán interpretadas al momento de utilizar la función. Una vez definida la función, podemos emplearla en cualquier parte del programa; en la siguiente sección analizaremos cómo podemos hacerlo.

Funciones: llamado
Para utilizar funciones previamente definidas en el script, utilizamos su nombre y tipeamos los paréntesis; al hacer esto, en dicha instrucción se interpreta el bloque correspondiente a la función. A este empleo de la función, se lo conoce como llamada o invocación de la función:

saludar();

Con este llamado se ejecutará la instrucción console.log(“¡Hola mundo!”) que definimos en su declaración.
*/

//*************************************************/
//*      Ventajas en el uso de funciones          */
//*************************************************/
/*
Las principales ventajas del uso de funciones en la programación son:
- Evitar instrucciones duplicadas (Principio DRY): no deberíamos tener dos instrucciones idénticas en el script; de ser ese el caso, debe transformarse dicha resolución en función
- Solucionar un problema complejo usando tareas sencillas (Principio KISS): si usamos funciones, dividimos un problema complejo en tareas independientes y reutilizables, y podemos abordarlas de forma aislada.
- Focalizarse en tareas prioritarias para el programa (Principio YAGNI): nos enfocamos en desarrollar las funciones esenciales para el funcionamiento del programa. Luego, si es necesario agregar funcionalidades, sumamos otras funciones para agregar nuevas funcionalidades. Nos permite depurar el código de instrucciones irrelevantes o redundantes al trabajar de forma más independiente las distintas tareas.
- Aporta ordenamiento y entendimiento al código: al tener el código fuente segmentado en funciones, es más sencillo leer todo el código (o lógica) que comprende el programa.
- Aporta facilidad y rapidez para hacer modificaciones: si es necesario cambiar, o sumar, o quitar instrucciones a una función, podemos hacerlo sin comprometer el funcionamiento del resto de las funciones, y de la totalidad del programa.
*/

//*************************************************/
//*                  Parametros                   */
//*************************************************/
/*
Cuando usamos console.log() o alert(), recordemos que escribimos entre paréntesis la variable o valor que queremos mostrar al usuario. A dicho elemento que se envía entre los paréntesis de la función se lo conoce como parámetro.
Una función puede recibir ninguno, uno o más de un parámetro. Para especificar que es necesario enviar datos para emplear la función correctamente, detallamos en la declaración de la misma, entre los paréntesis, la cantidad de parámetros a recibir, y el nombre con el que los identificamos dentro de la función separados por coma. Por ejemplo:
function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}


Luego, si queremos llamar a esta funciòn, el envío de datos se realiza de la siguiente manera:
conParametros("Hola", "Mundo"); // -> “Hola Mundo”


Hay que entender que los parámetros que definimos para una función, en este caso llamados parametro1 y parametro2, son variables que se declaran dentro de la función, cuyos valores correspondientes se definen en el llamado de la misma. Es decir, parametro1 y parametro2 son variables que reciben el valor de “Hola” y “Mundo” respectivamente al momento de ser llamada la función. Con esos valores iniciales se ejecuta luego el bloque de la función, siguiendo la lógica correspondiente. Esto permite que pueda llamar a la función varias veces con distintos valores y voy a obtener distintos resultados. Los valores que paso a la función en el llamado pueden ser escritos literalmente (en este caso, los strings) o también ser pasados desde otras variables:

conParametros("Hola", "Mundo"); // -> “Hola Mundo”

let mensaje = “Bienvenidos a”
let lenguaje = “Javascript”
conParametros(mensaje,lenguaje); // -> “Bienvenidos a Javascript”
*/

//*************************************************/
//*           Funciones con parametros            */
//*************************************************/
/*
Las funciones que realizan cálculos matemáticos son un caso usual de función con parámetros. Analizemos ahora la declaracion de la función creada con el nombre sumar:

- Declaración de variable para guardar el resultado de la suma
let resultado = 0;
- Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

Así, si queremos mostrar el resultado la instrucción comprende otra tarea, por lo cual puede ser conveniente realizar otra función para mantener las tareas lo más sencillas posibles (KISS):

Así, si queremos mostrar el resultado la instrucción comprende otra tarea, por lo cual puede ser conveniente realizar otra función para mantener las tareas lo más sencillas posibles (KISS):

- Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}

Ahora que tenemos las funciones sumar y mostrar, podemos realizar las llamadas consecutivas; primero calculamos el resultado con sumar, y luego mostramos la salida por consola con mostrar:

- Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 

De esta manera, tenemos la división del problema “sumar y mostrar” en dos funciones, las cuales reciben parámetros con la intención de poder reutilizar este comportamiento para hacer diferentes cálculos y salidas al usuario

- Otras llamadas a sumar y mostrar
sumar(25, 5);            
mostrar(resultado); 
sumar(1, 2);            
mostrar(resultado); 
*/

//*************************************************/
//*            Return de la funcion               */
//*************************************************/
/*
En el ejemplo anterior, usamos una variable resultado para asignar un nuevo valor a la misma cada vez que llamamos la función; pero si necesito obtener un valor al momento de llamar la función, en vez de utilizar un variable se recomienda emplear la palabra reservada return sobre el valor que quiero recuperar de la función, como por ejemplo:

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);

De esta manera, cada vez que llamo a la función obtengo el valor resultado del procesamiento de la función, sin necesitar una variable declarada previamente.
Para entenderlo mejor, podemos pensar la función como una operación que genera un nuevo valor. Así como las operaciones matemáticas o lógicas vistas previamente generaban nuevos valores en su resolución, lo mismo puede hacerse con funciones a través del return. En el espacio donde llamo a la función se genera un nuevo valor: este valor es el definido por el return de la misma. Si el return no se define, la función genera undefined como resultado.

Hay que tener en cuenta dos cuestiones asociadas a return:
Cuando se detecta un return en la función, se retorna el valor señalado y la función concluye, es decir que si existen instrucciones debajo del return no se interpretan.
Podemos codificar más de un return para establecer distintos valores de retorno posibles de la función según distintos casos. 
Para visualizar los aspectos mencionados tomemos el siguiente ejemplo como referencia, en el que la función calculadora retorna distintos resultados según el valor del parámetro operación: 
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}
console.log(calculadora(10, 5, "*"));

En este switch el break no hace falta definirlo, porque el return se encarga de terminar la función y el switch ahí.
*/

