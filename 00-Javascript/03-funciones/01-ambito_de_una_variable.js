/*
*████─█───█─████──███─███─████────████──███────█─█─█──█─████────█─█─████─████─███─████─████──█───███
*█──█─██─██─█──██──█───█──█──█────█──██─█──────█─█─██─█─█──█────█─█─█──█─█──█──█──█──█─█──██─█───█──
*████─█─█─█─████───█───█──█──█────█──██─███────█─█─█─██─████────█─█─████─████──█──████─████──█───███
*█──█─█───█─█──██──█───█──█──█────█──██─█──────█─█─█──█─█──█────███─█──█─█─█───█──█──█─█──██─█───█──
*█──█─█───█─████──███──█──████────████──███────███─█──█─█──█─────█──█──█─█─█──███─█──█─████──███─███
*/

//*************************************************/
//*            Scope de una variable              */
//*************************************************/
/*
Ámbito de variable: scope
En la programación, según donde declaremos una variable, podemos determinar distintas restricciones de empleo, a las cuales se las conoce como ámbitos de la variable, contextos de la variable o scope.
Teniendo presente su lugar de creación, identificamos a las variables en dos tipos:
- Variables globales: si una variable se declara fuera de cualquier función o bloque, automáticamente se transforma en variable global. Por ejemplo:

let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
- Se puede acceder a la variable resultado porque es global
console.log(resultado);

- Variables locales: cuando definimos una variable dentro de una función o bloque, la identificamos como una variable local, y será accesible sólo dentro de ese espacio. Si quisiéramos utilizarla por fuera, la variable no existirá para el intérprete. Por ejemplo:

function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
- No se puede acceder a la variable resultado fuera del bloque
console.log(resultado);

En conclusión, usamos variables globales cuando queremos emplearlas en distintos bloques del programa, y variables locales cuando sólo son relevantes para la función o estructura actual.
Hay que entender que las variables globales y locales se identifican como diferentes entre sí, y pueden existir en el programa bajo el mismo nombre sin conflicto:

let nombre = “John Doe” // variable global

function saludar() {
    let nombre = “Juan Gomez” // variable local
    console.log(nombre)
}
- Accede a nombre global
console.log(nombre)   // → “John Doe”

- Accede a nombre local
saludar() // → “Juan Gomez"
*/
