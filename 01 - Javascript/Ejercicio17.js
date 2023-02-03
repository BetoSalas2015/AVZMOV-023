function saludo(mensaje) {
    return function (nombre) {
        console.log(mensaje + " " + nombre);
    }
}

var hola = saludo("Hola");
hola("Roberto");