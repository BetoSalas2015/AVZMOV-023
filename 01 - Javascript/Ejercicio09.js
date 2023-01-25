/*  Sintaxis:
var nombreObjeto = {
    atributo: valor,
    metodos: function () { },
    otroObjeto: {}
}

nombreObjeto.atributo; */

persona = new Object();         //  Objeto Vacío

persona.nombre = "Roberto";
persona.apellido = "Salazar";
persona.direccion = new Object();
persona.direccion.calle = "2 sur 2";
persona.direccion.colonia = "Centro";

console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion.calle);