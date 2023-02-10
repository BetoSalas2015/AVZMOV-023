var a = 5;
console.log(typeof a);

var b = "Saludos";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log( Object.prototype.toString.call(d) );

function persona(nombre) {
    this.nombre = nombre;
};

var e = new persona("Juanito");
console.log(typeof e);
console.log(e instanceof persona);
console.log(e instanceof Number);

console.log(typeof undefined);
console.log(typeof null);
console.log(null);