/*
*████─███─████─█───████────███─████─████
*█──█──█──█──█─█───█──█────█───█──█─█──█
*█─────█──█────█───█──█────███─█──█─████
*█──█──█──█──█─█───█──█────█───█──█─█─█─
*████─███─████─███─████────█───████─█─█─
*/

//*************************************************/
//*               Estructura For                  */
//*************************************************/
/*
La estructura for en JavaScript garantiza la repetición de un conjunto de instrucciones hasta que cierta variable numérica tenga un valor específico. Analicemos a continuación su forma de declaración:

for (desde ; hasta ; actualización) {
    bloque del iterador
    lo que se escriba acá se ejecutará mientras dure el ciclo
}

Podemos decir que el condicional for está compuesto por tres partes: 
- Desde: implica el valor inicial de la variable, el cual determina desde qué números se empiezan a contar los ciclos. En esta sección, se declara una variable y se le asigna un valor que irá aumentando (o disminuyendo) en cada ciclo, según la actualización. Un tipo de declaración desde es let i = 0 o let index = 0.
- Hasta: siendo un bucle de conteo, la sección hasta determina la comparación que limita la iteración. Aquí comparamos la variable declarada en desde con un valor que representa la “cantidad de repeticiones”; si la comparación resulta falsa, el for finaliza, lo que implica que el bloque no vuelve a repetirse. Un ejemplo de declaración es i < 10 o index < 10.
- Actualización: la última parte de la comparación permite establecer cómo se cuenta en cada ciclo. Cuando termina una repetición, la variable de conteo va a cambiar teniendo en cuenta cómo está construida la actualización. El caso más común de actualización es i++ o index++, lo que quiere decir que en cada repetición el valor de la variable de conteo aumenta en uno ( i++ es lo mismo que escribir i = i + 1).

En resumen, con desde establecemos desde (valga la redundancia) qué valor empezamos a contar las repeticiones, con hasta definimos el número máximo de iteraciones, y con la actualización establecemos cómo vamos a realizar la modificación de la variable de conteo. Veamos ahora un ejemplo de uso de for para contar hasta 10:

for (let i = 1; i <= 10; i++) {
    alert(i);
}

Aquí el hasta inicia en uno , el desde va hasta 10 inclusive, porque la comparación es menor o igual, y la actualización se realiza de uno en uno; cuando i valga 11, lo cual ocurrirá al concluir la iteración 10, la estructura for deja de funcionar.
Ahora bien, es común iniciar la cuenta de los ciclos de conteo desde cero (0). Para ese caso, contar desde 0 a 9 implicaría la siguiente declaración:

for (let i = 0; i < 10; i++) {
    alert(i);
}

En ambos casos, el bloque a ejecutar constituye de un alert(i). Es interesante destacar que el valor de i va cambiando en cada repetición, por lo que en cada ejecución del bloque veremos un alert de un número diferente ascendiendo del 0 hasta el 9.
*/

//*************************************************/
//*          Uso de la estructura For             */
//*************************************************/
/*
La estructura for tiene distintos casos de aplicación en la programación, uno de ellos, dada su característica de bucle de conteo, es la posibilidad de realizar operaciones incrementales o decrementales, valiéndose de la variable de conteo (que desde ahora llamaremos índice). Veamos ahora un ejemplo de cómo podemos usar for para calcular la tabla de multiplicar de un número ingresado por el usuario:

- Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
- En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

Por otro lado, recordemos que los bucles son consecutivos, y que en el índice se almacena el número de la iteración, lo cual convierte a for en un candidato para asignación ordinal, es decir, utilizar la variable de conteo para definir un orden en las operaciones. Veamos ahora cómo podemos usar for para informar veinte turnos, uno por cada nombre ingresado:

for (let i = 1; i <= 20; i++) {
    En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
*/

//*************************************************/
//*               Break y Continue                */
//*************************************************/
/*
Cuando utilizamos un ciclo, puede surgir la necesidad de interrumpir o saltar una iteración en respuesta a la evaluación de cierto cálculo utilizando un condicional, para estos casos tenemos la sentencia break y continue respectivamente.
Veamos ahora un ejemplo sobre cómo podemos usar break para cancelar las repeticiones restantes (interrumpir) del for, cuando el índice es igual a cinco:

for (let i = 1; i <= 10; i++) {
    - Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}

Si usamos continue en lugar de break, las instrucciones restantes no se interpretan, y se pasa a la siguiente repetición, razón por la cual se dice coloquialmente que se “salta” un ciclo cuando se cumple la condición asociada al continue.

for (let i = 1; i <= 10; i++) {
    Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}

Estas sentencias nos permiten establecer un control más específico sobre las variables manejadas dentro del bucle.
*/

//?Ejemplo:
//Un ciclo for se repite hasta que una condición especificada se evalúe como false . El bucle for de JavaScript es similar al bucle for de Java y C. Cuando se ejecuta un bucle for , ocurre lo siguiente: Se ejecuta la expresión de iniciación expresiónInicial , si existe.

for (let i = 1; i <= 10; i++) 
{
    /* En este ciclo podemos declarar el contador y asignarele un calor dentro del mismo ciclo */
    /* En este caso i es igual a uno, mientras i sea menor que 10 se ejecutara el ciclo sumandole una unidad a y (i++) */
    console.log(i);/* Imprimimos el valor de "i" */
}