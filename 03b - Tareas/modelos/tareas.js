const Tarea = require('./tarea');

//  { {id: xyz. { id:xyz, des:'blabla' } }

class Tareas {
    constructor() {
        this.listado = {};
    }

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        });
        return listadoArr;
    }

    cargarListado = (arreglo) => {
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea;
        });
    };

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    };

    imprimeTareas = () => {
        let salida = '';
        let cont = 1;
        this.listadoArr.forEach( (tarea) => {
            salida = `${cont.toString().green} ${tarea.desc.gray} :: `;
            if ( tarea.completado ) {
                salida += `${'Completada'.green}.`;
            } else {
                salida += `${'Pendiente'.red}.`;
            }
            console.log(salida);
            cont++;
        });
    };

    imprimePendietesCompletdas = (tipo) => {
        let salida = '';
        let cont = 1;
        if (tipo) {
            this.listadoArr.forEach( (tarea) => {
                if (tarea.completado !== null) {
                    salida += `${cont.toString().green}. ${tarea.desc.gray} :: ${'Completada'.green}.\n`;
                    cont++;
                }
            });
            console.log(salida);
        } else {
            this.listadoArr.forEach( (tarea) => {
                if (tarea.completado === null) {
                    salida += `${cont.toString().green}. ${tarea.desc.gray} :: ${'Pendiente'.red}.\n`;
                    cont++;
                }
                
            });
            console.log(salida);
        }

    };

    borrarTarea = (id) => {
        if ( this.listado[id] ) {
            delete this.listado1[id];
        }
    };


}

module.exports = Tareas;