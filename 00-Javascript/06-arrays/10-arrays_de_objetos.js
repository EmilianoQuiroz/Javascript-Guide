/*
*████─████─████─████─██─██─███────████──███────████─████────██─███─███─████─███
*█──█─█──█─█──█─█──█──███──█──────█──██─█──────█──█─█──██────█─█────█──█──█─█──
*████─████─████─████───█───███────█──██─███────█──█─████─────█─███──█──█──█─███
*█──█─█─█──█─█──█──█───█─────█────█──██─█──────█──█─█──██─█──█─█────█──█──█───█
*█──█─█─█──█─█──█──█───█───███────████──███────████─████──████─███──█──████─███
*/

//*************************************************/
//*        Arrays de objetos en Javascritp        */
//*************************************************/
/*
Mencionamos en la sección anterior que existen arrays de objetos personalizados, que son un listado de objetos creados por el usuario, ya sea de forma explícita usando objetos literales, o instanciándolos con un constructor. Veamos un caso de declaración con objetos literales:
*/

const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });

/*
Los arrays de objetos a veces implican un tratamiento especial. Como vimos, toString y join son métodos que no funcionan correctamente para visualizar su información, y esto se debe a que cuando buscamos transformar la información de un objeto a string, por defecto se obtiene la cadena [object Object]. Si bien, más adelante evaluaremos técnicas de transformación para obtener correctamente la información de un objeto en formato string, la primera herramienta que se puede utilizar para acceder a la información de cada objeto en un array es el bucle for...of, que permite realizar el recorrido de los objetos.
*/

//*************************************************/
//*              Recorriendo Arrays               */
//*************************************************/
/*
La sentencia for...of permite recorrer un objeto iterable (array), ejecutando un bloque de código por cada elemento del objeto. Para el caso de un array de objeto, la declaración de dicha estructura podría tener la siguiente forma:
*/

const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}

/*
Por cada ciclo del for...of, obtenemos la referencia a un elemento del array en orden. Es decir, accedemos de uno en uno a todos los elementos del array. El bucle termina una vez iterado el último de la lista. La referencia al elemento actual la tenemos en la variable creada antes de la palabra reservada of. 
Es decir, el iterador for… of tiene la siguiente estructura:
*/

//for (const referencia of array) { … }

/*
Es un iterador que recorre el array de principio a fin, y en cada iteración accedemos al elemento en cuestión a través de la referencia que declaramos. Por cada iteración se ejecuta el bloque de código que definimos entre llaves.
Como es un array de objetos, podemos acceder a su estructura con las dos formas de acceso: identificador.propiedad (Ejemplo producto.id) o identificador[“propiedad”] (por ejemplo producto[“id”]). 
Si el objeto tiene comportamiento, podemos emplear for...of para llamar a uno o más métodos pertenecientes a los objetos que componen el array, como podemos ver a continuación:
*/

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos2 = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos2)
    producto.sumaIva();

/*
También podemos anidar un for...in en el for...of para recorrer todas las propiedades del objeto actual. Además, es posible emplear las ya conocidas sentencias break o continue con for...of.
*/