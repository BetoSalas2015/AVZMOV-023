/*  Sintaxis:
var nombreObjeto = {
    atributo: valor,
    metodos: function () { },
    otroObjeto: {}
}

nombreObjeto.atributo; */

var persona = {
    nombre: "Roberto",
    apellido: "Salazar",
    direccion: {
        calle: "2 sur 2",
        colonia: "Centro"
    }
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion.calle);