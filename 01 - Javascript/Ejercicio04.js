function a() {
    b();
    var c;
    console.log("c = " + c);
}

function b() {
    var d;
    console.log("d = " + d);
}

var d = 1;
a();
console.log("d = " + d);
