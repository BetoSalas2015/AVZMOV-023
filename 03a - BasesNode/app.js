const { crearArchivo } = require('./modulos/multiplicar');
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                demandOption: true,
                deault: 5,
                describe: 'Base de la tabla de multiplicar',
                type: 'number'
            })
            .check( (argv, option) => {
                if (isNaN(argv.base)) {
                    throw 'El argumento base no es un número';
                }
                return true;
            })
            .argv;

console.clear();

const base = argv.base;

crearArchivo(base, limite = 10)
    .then((nombreArchivo) => { console.log(nombreArchivo, ' creado');})
    .catch( (err) => { console.log(err);} );