const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer');
const Tareas = require('./modelos/tareas');

const main = async() => {
    let opc = 0;
    console.clear();
    tareas = new Tareas();
    do {
        opc = await inquirerMenu();

        switch (opc) {
            case 1: 
                    const resp = await capturaEntrada('Descripción: ');
                    tareas.crearTarea(resp); break;
           
        

        }
    } while (opc !== 0);

    await pausa();
};

main();