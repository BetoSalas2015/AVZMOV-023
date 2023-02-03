function persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

persona.prototype.getFullName = function () {
    return this.nombre + " " + this.apellido;
}

var juan = new persona("Juanito", "Pérez");
var pedrito = new persona("Pedrito", "López");

console.log(juan);
console.log(pedrito);

console.log(juan.getFullName());
console.log(pedrito.getFullName());