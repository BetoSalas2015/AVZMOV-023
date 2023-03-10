const fs = require('fs');
const colors = require('colors');
 
 const crearArchivo = async(base = 5, limite = 10) => {

    let salida = '';

    console.log(`=====================`.rainbow);
    console.log(`=  tabla del ${base}      =`.yellow);
    console.log(`=====================`.rainbow);

    for (let i = 1; i <= limite; i++) {
        salida += `${base} ${'*'.green} ${i} ${'='.green} ${ base * i}\n`;
    }

    try {
         fs.writeFileSync(`Tabla-${base}.txt`, salida);
    } catch (error) {
        return error;
    }

    console.log(salida);

    return `tabla-${base}.txt`;
};

module.exports = {
    crearArchivo
};
