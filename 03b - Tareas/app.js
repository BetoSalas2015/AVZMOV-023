const colors = require('colors');
const { inquirerMenu, 
        pausa, 
        capturaEntrada, 
        listadoTareasBorrar, 
        confirmar,
        listadoSeleccionar } = require('./js/inquirer');
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
            case 5: const comp = await listadoSeleccionar(tareas.listadoArr);
                    tareas.cambiaTareas(comp);
                    break;
            case 6: const id = await listadoTareasBorrar(tareas.listadoArr);
                    if (id === 0)  break;
                    const ok = await confirmar('¿Desea Borrar la tarea?');
                    if ( ok ) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada'.green);
                    }
                    
                    break;

        }
        guardaBase(tareas.listadoArr);
    } while (opc !== 0);

    await pausa();
};

main();