/*
*████─█───████─███─███─███────███─█──█──────██─████─█─█─████─███─████─████─███─████─███
*█──█─█───█──█─█───█───█──────█───██─█───────█─█──█─█─█─█──█─█───█──█─█──█──█──█──█──█─
*█────█───████─███─███─███────███─█─██───────█─████─█─█─████─███─█────████──█──████──█─
*█──█─█───█──█───█─█─────█────█───█──█────█──█─█──█─███─█──█───█─█──█─█─█───█──█─────█─
*████─███─█──█─███─███─███────███─█──█────████─█──█──█──█──█─███─████─█─█──███─█─────█─
*/

//*************************************************/
//*           Clases en Javascript                */
//*************************************************/
/*
Evaluamos en la sección anterior cómo podemos crear métodos personalizados, pero con la función constructora tenemos la desventaja de requerir una propiedad por cada método. Esto puede generar una complejidad de declaración ante la necesidad de trabajar con objetos con un número significativo de métodos asociados. También tenemos el problema de distinguir propiedades que representan los datos del objeto, y aquellas que son comportamientos.
Dado que el empleo de la función constructora presenta las particularidades mencionadas, desde la versión ES6 podemos emplear la notación de clase para crear objetos. Vemos a la clase como un equivalente de la función constructora, más ordenada en términos de definición. Analizamos cómo quedaría la función constructora declarada en la sección anterior como una clase: 

class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();

Lo primero que notamos es que la forma de instanciar un objeto es idéntica, independientemente de si se crea desde una función constructora o desde una clase. Lo importante de las clases es que los métodos se declaran aparte, sin la necesidad de asociarlos a una propiedad en el constructor.
Esto permite una declaración más ordenada, y al momento de crear un nuevo método personalizado podemos simplemente agregarlo sin modificar el constructor de la clase, como se observa en la siguiente declaración de la clase Producto, y sus  dos métodos personalizado sumaIva() y vender():

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

Asimismo, el empleo de clase nos permite aplicar técnicas avanzadas de programación al trabajar con ciertos objetos, como el uso de herencia de clase.
*/