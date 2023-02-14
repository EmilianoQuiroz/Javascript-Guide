/*
*████─█───████─███─███────████──████─███─███
*█──█─█───█──█─█───█──────█──██─█──█──█──█──
*█────█───████─███─███────█──██─████──█──███
*█──█─█───█──█───█─█──────█──██─█──█──█──█──
*████─███─█──█─███─███────████──█──█──█──███
*/

//*************************************************/
//*                La clase date                  */
//*************************************************/
/*
Seguramente en algún momento necesitemos manipular fechas dentro de los datos que manejamos. Para ésto, javascript posee una clase diseñada para representar fechas. 
Instanciar un objeto Date nos genera la fecha y tiempo actual:
*/

console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina)

//*************************************************/
//*                 Constructor                   */
//*************************************************/
/*
El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number). Hay que tener en cuenta que la convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:
*/

console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)


const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

/*
El constructor también puede crear una fecha a partir de un string con formato específico:
*/

const casiNavidad2 = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad2)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

//***********************************************/
//*    Obtener un valor singular de la fecha    */
//***********************************************/
/*
Instanciado un objeto Date, podemos aplicar distintos métodos que nos devuelven determinados valores de la misma. 
- getFullYear() nos devolverá el number que representa el año creado.
- getMonth() nos retornará el number que representa el mes (entre 0 y 11).
- getDay() nos retorna el number que representa el día creado (1 = lunes, 7 = domingo).
*/

const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)

/*
?Presentación
La clase también tiene distintos métodos que presentan la fecha con distintos formatos posibles de tipo string. Según la utilidad que queramos presentar, podemos optar por alguna de las siguientes opciones, aunque hay más disponibles que pueden investigar en la documentación (Date - JavaScript | MDN)
*/

const fechaHoy = new Date("December 17, 2021")

console.log( fechaHoy.toDateString() ) // Fri Dec 17 2021
console.log( fechaHoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( fechaHoy.toLocaleDateString() ) // 17/12/2021
console.log( fechaHoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)

/*
?Diferencias
Es posible calcular diferencias entre fechas pero entendiendo que los resultados se generan en milisegundos. Si quisiera calcular la diferencia de días entre dos fechas habría que generar cálculos adicionales sobre esta diferencia en milisegundos, lo cual no resulta muy agradable. Por suerte existen librerías que solucionan estos problemas de forma eficiente y rápida, pero las trabajaremos en clases posteriores.
Algunos ejemplos de medir diferencias:
*/

const navidad3 = new Date("December 25, 2021")
const hoy2 = new Date("December 17, 2021")


console.log( navidad3 - hoy2 ) // 691200000


const milisegundosPorDia = 86400000


console.log( (navidad3 - hoy2 ) / milisegundosPorDia) // 8

const inicio = new Date()


for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()


console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos
