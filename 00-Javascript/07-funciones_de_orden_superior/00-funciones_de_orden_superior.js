/*
*███─█─█─█──█─████─███─████─█──█─███─███────████──███────████─████─████──███─█──█────███─█─█─████─███─████─███─████─████
*█───█─█─██─█─█──█──█──█──█─██─█─█───█──────█──██─█──────█──█─█──█─█──██─█───██─█────█───█─█─█──█─█───█──█──█──█──█─█──█
*███─█─█─█─██─█─────█──█──█─█─██─███─███────█──██─███────█──█─████─█──██─███─█─██────███─█─█─████─███─████──█──█──█─████
*█───█─█─█──█─█──█──█──█──█─█──█─█─────█────█──██─█──────█──█─█─█──█──██─█───█──█──────█─█─█─█────█───█─█───█──█──█─█─█─
*█───███─█──█─████─███─████─█──█─███─███────████──███────████─█─█──████──███─█──█────███─███─█────███─█─█──███─████─█─█─
*/

//*************************************************/
//*          Funciones de orden superior          */
//*************************************************/
/*
Una función de orden superior (también conocidas como funciones de alto orden, o higher-order functions) es aquella que retorna una función, o recibe una función por parámetro. Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. En esta clase nos concentraremos más en la segunda acepción.

Retornar funciones
En el primer caso, podremos tener una función que retorna una función, lo cual nos permitiría crear funciones con un esquema superior. Por ejemplo:
*/

function mayorQue(n) {
    return (m) => m > n
}


let mayorQueDiez = mayorQue(10)


console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

/*
En este caso, mayorQue(n) retorna una función que compara un valor contra n y retorna true o false (porque es el resultado de la comparación). En mayorQueDiez se termina asignando la función que retorna el llamado de mayorQue(10). Al ser llamada con el valor de 10, la asignación se resuelve de la siguiente forma:
let mayorQueDiez = (m) => m > 10

De ahí que luego podemos llamar a la función y compara siempre contra 10. Si lo creamos con un llamado a mayorQue(5), la función siempre compararía contra 5.

Otro ejemplo:
*/

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}


let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")


console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2

/*
Si bien este ejemplo es un poco redundante, sirve para entender la capacidad de retornar funciones que podemos desarrollar. En este caso, según el parámetro op se termina asignando un return de función u otro a las variables declaradas.
*/

//*************************************************/
//*           Funciones como parametros           */
//*************************************************/

/*
La segunda acepción significa escribir funciones que puedan recibir funciones por parámetro. Para hacerlo más claro, empecemos con un ejemplo. Supongamos que quiero recorrer un array y hacer algo con cada uno de sus elementos. 
*/

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

/*
Esta función recibe un array por primer parámetro y una función por el segundo, y se encarga de recorrer el array y por cada elemento del mismo hacer un llamado a la función mencionada enviando dicho elemento por parámetro.
*/

const numeros= [1, 2, 3, 4]


porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4

/*
Al enviar console.log por parámetro, se entiende que se ejecuta esa función con cada elemento del array. Lo interesante de esto es que podemos enviar funciones diferentes en distintos llamados y ejecutar, en este caso, distintas acciones sobre los elementos del array, todo con la misma función.
*/

let total = 0


function acumular(num) {
    total += num
}


porCadaUno(numeros, acumular)
console.log(total) // 10

/*
Algo usual es definir la función directamente sobre el parámetro como una función anónima aprovechando la sintaxis de arrow function. Esto evita tener que andar declarando funciones todo el tiempo y definir acciones más dinámicas:
*/

const duplicado = []


porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})


console.log(duplicado) // [2, 4, 6, 8]

