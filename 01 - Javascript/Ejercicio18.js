function constuyeFunciones() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

var arreglo = constuyeFunciones();

arreglo[0]();
arreglo[1]();
arreglo[2]();