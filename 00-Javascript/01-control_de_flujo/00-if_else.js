
/* 
*███─███─███─████─█─█─████─███─█─█─████─████────███─███────███─█───███─███
*█───█────█──█──█─█─█─█──█──█──█─█─█──█─█──█─────█──█──────█───█───█───█──
*███─███──█──████─█─█─█─────█──█─█─████─████─────█──███────███─█───███─███
*█─────█──█──█─█──█─█─█──█──█──█─█─█─█──█──█─────█──█──────█───█─────█─█──
*███─███──█──█─█──███─████──█──███─█─█──█──█────███─█──────███─███─███─███
*/

//**************************************************/
//*          Definicion de condicionales           */
//**************************************************/
/*
Condicionales: definición
Los condicionales son instrucciones especiales, también llamadas sentencias, que nos permiten determinar si se ejecuta o no cierta parte del programa. Es decir, son elementos que se usan para hacer o no hacer algo, teniendo en cuenta cierta situación.  
En la vida cotidiana, estamos rodeados/as de condicionales, por ejemplo cuando actuamos en consecuencia al clima:
    - Si hace frío, entonces me abrigo.
    - Si está lloviendo, entonces llevo un paraguas.
    - Si hace calor, entonces no uso un abrigo
Notemos que en los ejemplos anteriores estamos evaluando siempre el clima, y teniendo en cuenta su estado, hacemos una cosa u otra. De forma similar funcionan los condicionales en la programación: al evaluar si un variable coincide o no con cierto valor, se interpreta (o no) un conjunto de instrucciones.

Valores booleanos
Cuando trabajamos con este tipo de condiciones nos encontramos con nuevos tipos de valores posibles dentro de un programa, que son los valores booleanos. Estos pueden tomar básicamente dos valores posibles, true o false, verdadero o falso. 
Siguiendo con el caso anterior, hacemos distintas evaluaciones del clima y según eso hacemos una cosa o no. Es decir, si la evaluación (por ej, hace frío?) es verdadera, hacemos una cosa; y si es falsa hacemos o no otra. Básicamente las condiciones que evaluamos se resuelven en un valor booleano, son true o son false, y según eso le diremos a nuestro programa qué hacer al respecto.

Estructura if
Existen distintos condicionales que podemos emplear en JavaScript. Estos suelen identificarse bajo el nombre de estructuras condicionales. La más empleada es if, que se utiliza para ejecutar un bloque si la condición es verdadera. Veamos un ejemplo de declaración de esta instrucción:

if (true){
    console.log("vas a ver este mensaje");
}

- if es la palabra reservada que inicia la instrucción,
- Los paréntesis () incluyen la comparación a evaluar: si lo que está entre paréntesis es verdadero (true), se interpretan las instrucciones que “están dentro” del condicional.
- Las llaves {} determinan qué líneas de código forman parte del condicional, y se interpretarán si la condición es verdadera.  Al conjunto de instrucciones definidas entre las llaves se lo llama bloque. Así, es correcto decir que si la comparación es  verdadera, entonces el bloque se interpreta. Caso contrario, si la comparación a evaluar resulta falsa, las instrucciones que conforman el bloque no formarán parte de la ejecución actual del programa. Como por ejemplo:

if (false){
    console.log("no vas a ver este mensaje");
}

Tenemos que tener presente que en los ejemplos anteriores lo que está dentro de los paréntesis del if no es una comparación propiamente dicha, ya que para esto deberíamos tomar una variable, y preguntarnos si es igual a un valor, como en el siguiente código:

let unNumero = 5

- Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

- Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}

Dado que el bloque que se interpreta es aquel cuya comparación es verdadera, en este caso la única salida que se visualizará por consola es la que cumple que unNumero es igual a 5.

Operadores de comparación
Cuando utilizamos operadores matemáticos entre dos valores numéricos, éstos resuelven un nuevo tipo de valor numérico que es el resultado de la operación. Cuando comparamos dos valores a través de un operador de comparación, ésta operación siempre se resuelve en true o false, es decir la comparación es verdadera o falsa, y según eso se ejecuta nuestro bloque o no.
El primer operador de comparación es el operador de equivalencia == . No hay que confundirlo con el operador = que sirve para asignar valores a una variable. Con el operador == estamos preguntando si los valores a ambos lados del operador son iguales, y esto devuelve verdadero o falso, y funciona tanto con números como con strings.
*/

//**************************************************/
//*           Estructura basica if else            */
//**************************************************/
/*
Estructura if… else
Si bien la estructura if nos permite definir un conjunto de instrucciones a interpretarse cuando algo se cumple, puede ser necesario definir un código adicional en aquellos casos en que el resultado no es el esperado. Para estas situaciones, contamos con la estructura if...else, la cual nos permite contar con dos bloques, como podemos ver el siguiente ejemplo:
*/
let condicion = true;//Condicion a cumplir

if (condicion == true)//En caso de que condicion sea true se imprimira el siguiente console
{
    console.log("el valor del condición es: true");
}
else//Si la condicion es false se imprimir el siguiente console
{
    console.log("el valor del condición es: false");
}



