/*  Sintaxis:
var nombreObjeto = {
    atributo: valor,
    metodos: function () { },
    otroObjeto: {}
}

nombreObjeto.atributo; */

Persona = new Object();         //  Objeto Vacío

Persona["nombre"] = "Roberto";
Persona["apellido"] = "Salazar";

console.log(Persona);

var campo = "nombre"

console.log(Persona[campo]);