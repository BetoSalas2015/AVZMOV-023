function mapForEach(arr, fn) {
    var arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        arr2.push( fn( arr[index] ) );
    }
    return arr2;
}

var arreglo = [1, 2, 3, 4, 5];

var arreglo2 = mapForEach(arreglo, function(valor) { 
    return valor * 2 
} );

var arreglo3 = mapForEach(arreglo, function(valor) {
    return ( (valor % 2) === 0 );
});

var arreglo4 = mapForEach(arreglo, function(valor) {
    return valor *  valor * valor;
});

var arreglo5 = mapForEach(arreglo, function(valor) {
    if(valor === 1 || valor === 2) return 1;
    var f1 = 1;
    var f2 = 1;
    var f;
    for (var i = 3; i <= valor; i++) {
        f = f1 + f2;
        f2 = f1;
        f1 = f;
    }
    return f;
})



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
console.log(arreglo5);

