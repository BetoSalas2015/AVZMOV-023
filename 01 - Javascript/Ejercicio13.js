console.log(this);

function b() {
    console.log(this);
}

b();

var objeto = {
    nombre: "Roberto",
    fun1: function () {
        console.log(this);
        console.log(this.nombre);
    }
}

objeto.fun1();