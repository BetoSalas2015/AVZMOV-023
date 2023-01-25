var funsaludo = function(nombre) {
    console.log("Hola " + nombre);
}

funsaludo("Roberto");

var saludo = function(nombre) {
    console.log("Hola " + nombre);
}("Roberto");

console.log(saludo);
console.log(saludo);
console.log(saludo);
console.log(saludo);
console.log(saludo("Juan"));