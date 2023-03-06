const fs = require('fs');

console.clear();

const base = 5;
let salida = '';

console.log(`=====================`);
console.log(`=  tabla del ${base}  =`);
console.log(`=====================`);

for (let i = 1; i <= 10; i++) {
    salida += `${base} * ${i} = ${ base * i}\n`;
}

console.log(salida);