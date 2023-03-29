const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada } = require('./js/inquirer');
const Tareas = require('./modelos/tareas');
const { guardaBase, cargaBase } = require('./js/guardabase');

const main = async() => {
    let opc = 0;
    console.clear();
    tareas = new Tareas();
    do {
        opc = await inquirerMenu();
        const tareasdb = await cargaBase();
        if( tareasdb ) {
            await tareas.cargarListado(tareasdb);
        }
        switch (opc) {
            case 1: 
                    const resp = await capturaEntrada('Descripción: ');
                    tareas.crearTarea(resp); break;
            case 2: tareas.imprimeTareas(); 
                    break; 
            case 3: tareas.imprimePendietesCompletdas( true );
                    break;
            case 4: tareas.imprimePendietesCompletdas( false );
                    break;

        

        }
        guardaBase(tareas.listadoArr);
    } while (opc !== 0);

    await pausa();
};

main();